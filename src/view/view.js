class View {
  constructor() {
    this.root = null;
    this.canvas = null;
    this.footerRange = null;
    this.footerColor = null;
    this.mainContainer = null;
    this.footerContainer = null;
    this.canvasContext = null;
    this.cvet = null;
  }
  init = () => {
    this.root = document.getElementById("root");
    this.mainContainer = this.createDiv({
      className: "main__container",
      id: "main-container",
    });
    this.canvas = this.createCanvas({
      className: "canvas__container",
      id: "canvas-container",
      height: "400",
      width: "800",
    });
    this.footerRange = this.createInput({
      className: "footer__range",
      type: "range",
      id: "footer-range",
      min: "1",
      max: " 80",
      step: "1",
    });
    this.footerColor = this.createInput({
      className: "footer__color",
      type: "color",
      id: "footer-color",
    });
    this.footerContainer = this.createDiv({
      className: "footer__container",
      id: "footer-container",
    });

    this.footerContainer.append(this.footerRange);
    this.footerContainer.append(this.footerColor);
    this.mainContainer.append(this.canvas);
    this.mainContainer.append(this.footerContainer);
    this.root.append(this.mainContainer);
  };

  painting = () => {
    let canvass = document.getElementById("canvas-container")
    this.canvasContext = canvass.getContext('2d');
    let ctx = this.canvasContext;
    canvass.onmousedown = function (event) {
      let e = event.offsetX;
      let b = event.offsetY;
      ctx.moveTo(e, b);
      canvass.onmousemove = function (event){
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.footerColorChange;
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineTo(x, y); //доложен брать this.input vaulue
        ctx.stroke();
      }
      canvass.onmouseup = function () {
        canvass.onmousemove = null;
      }
      canvass.onmouseout = function () {
        canvass.onmousemove = null;
      }
    }
  }

  footerRangeChange = cb => {
    this.footerRange.addEventListener("change", () => {
      cb();
    })
  }

  footerColorChange = cb => {
    this.footerColor.addEventListener("change", () => {
       cb();
    })
  }

  createDiv = (props) => {
    const div = document.createElement("div");

    props.id && (div.id = props.id);
    props.className && (div.className = props.className);

    return div;
  };

  createCanvas = (props) => {
    const canvas = document.createElement("canvas");

    props.id && (canvas.id = props.id);
    props.className && (canvas.className = props.className);
    props.height && (canvas.height = props.height);
    props.width && (canvas.width = props.width);

    return canvas;
  };

  createInput = (props) => {
    const input = document.createElement("input");

    props.id && (input.id = props.id);
    props.className && (input.className = props.className);
    props.type && (input.type = props.type);
    props.max && (input.max = props.max);
    props.min && (input.min = props.min);
    props.step && (input.step = props.step);

    return input;
  };
}

export default View;
