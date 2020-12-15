class Controller {
  constructor(view) {
    this.view = view;
    this.color = null;
    this.range = null;
  }

  init = () => {
     this.view.init();
     this.view.painting();
     this.view.footerRangeChange(this.changeRange.bind(this));
     this.view.footerColorChange(this.changeColor.bind(this));


  };
    changeRange = () => {
        this.range = this.view.footerRange.value;
    }
    changeColor = () => {
        this.color = this.view.footerColor.value;
    }
}

export default Controller;
