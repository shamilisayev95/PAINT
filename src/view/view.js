class View {
  constructor() {
    this.root = null;
    this.canvas = null;
    this.footerRange = null;
    this.footerColor = null;
    this.mainContainer = null;
    this.canvasContext = null;
    this.footerContainer = null;
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

    this.canvasContext = this.canvas.getContext('2d');
    this.footerContainer.append(this.footerRange);
    this.footerContainer.append(this.footerColor);
    this.mainContainer.append(this.canvas);
    this.mainContainer.append(this.footerContainer);
    this.root.append(this.mainContainer);
  };

    mouseDown = cb => {
        this.canvas.addEventListener("mousedown", (event) => {
            cb(event);
        })
    }
    mouseMove = cb => {
        this.canvas.addEventListener("mousemove", (event) => {
            cb(event);
        })
    }
    mouseUp = cb => {
        this.canvas.addEventListener("mouseup", (event) => {
            cb(event);
        })
    }
    mouseOut = cb => {
        this.canvas.addEventListener("mouseout", (event) => {
            cb(event);
        })
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
