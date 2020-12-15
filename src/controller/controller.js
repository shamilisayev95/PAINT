class Controller {
   constructor(view, model) {
      this._view = view;
      this._model = model;
   }

   init = () => {
      this._view.init();
      
   };
}

export default Controller;
