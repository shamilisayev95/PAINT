class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.color = null;
        this.range = null;
        this.isDrawing = null;
    }

    init = () => {
        this.view.init();
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
        this.ctx = this.view.canvasContext;
        this.view.mouseUp(this.mouseStop.bind(this));
        this.view.mouseDown(this.mouseStart.bind(this));
        this.view.mouseMove(this.mouseMover.bind(this));
        this.view.mouseOut(this.mouseCanvasStop.bind(this));
        this.view.footerRangeChange(this.changeRange.bind(this));
        this.view.footerColorChange(this.changeColor.bind(this));
    };

    changeRange = (range) => {
        this.range = range;
    }

    changeColor = (color) => {
        this.color = color;
        this.model.changeColor(this.color);
    }

    mouseStart = (event) => {
        this.x = event.layerX;
        this.y = event.layerY;
        this.isDrawing = true;
    }

    mouseMover = (event) => {
        if (this.isDrawing === true) {
            this.drawLine(this.x, this.y, event.layerX, event.layerY);
            this.x = event.layerX;
            this.y = event.layerY;
        }
    }

    mouseStop = (event) => {
        if (this.isDrawing === true) {
            this.drawLine(this.x, this.y, event.layerX, event.layerY);
            this.x = 0;
            this.y = 0;
            this.isDrawing = false;
        }
    }

    mouseCanvasStop = () => {
        this.isDrawing = false;
    }

    drawLine = (x1, y1, x2, y2) => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.range;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}

export default Controller;