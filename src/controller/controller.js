class Controller {
  constructor(view) {
    this.view = view;
  }

  init = () => {
    this.view.init();
    this.showCanvas.init();
  };
}

export default Controller;
