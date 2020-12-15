class Controller {
  constructor(view) {
    this.view = view;
    this.color = null;
    this.range = null;
  }

  init = () => {
    this.view.init();
    this.view.painting();
  };
}

export default Controller;
