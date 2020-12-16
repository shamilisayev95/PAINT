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
      id: "main-container",
      className: "main__container",
    });

    this.canvas = this.createCanvas({
      width: "800",
      height: "400",
      id: "canvas-container",
      className: "canvas__container",
    });

    this.footerRange = this.createInput({
      min: "1",
      max: " 80",
      step: "1",
      type: "range",
      id: "footer-range",
      className: "footer__range",
    });

    this.footerColor = this.createInput({
      type: "color",
      id: "footer-color",
      className: "footer__color",
    });

    this.footerContainer = this.createDiv({
      id: "footer-container",
      className: "footer__container",
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
    this.footerRange.addEventListener("change", (event) => {
      const { value } = event.target;
      cb(value);
    })
  }

  footerColorChange = cb => {
    this.footerColor.addEventListener("change", (event) => {
      const { value } = event.target;
      cb(value);
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
    props.height && (canvas.height = props.height || "500");
    props.width && (canvas.width = props.width || "900");

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
