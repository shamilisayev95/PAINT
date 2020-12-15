class View {
  constructor() {
    this.root = null;
    this.canvas = null;
    this.footerRange = null;
    this.footerColor = null;
    this.mainContainer = null;
    this.footerContainer = null;
  }
  init = () => {
    this.root = document.getElementById('root');
  }


}

export default View;