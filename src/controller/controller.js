class Controller {
  constructor(view) {
    this.view = view;
  }

  init = () => {
     this.view.init();
     this.view.painting();
  };


}

export default Controller;
