class Model {
  constructor() {
    this.dataBase = [
      {
        color: "#0a0a0a",
        range: "40",
        xStart: "0",
        yStart: "0",
      },
    ];
  }

  changeColor = (color) => {
    this.dataBase.push({ color });
    console.log(this.dataBase);
  };

  changeRange = (range) => {
    this.dataBase.push({ range });
    console.log(this.dataBase);
  };

  mouseStart = (event) => {
    this.dataBase.push({ event });
    console.log(this.dataBase);
  };

  mouseMover = (event) => {
    this.dataBase.push(event);
    console.log(this.dataBase);
  };

  mouseStop = (event) => {
    this.dataBase.push({ event });
    console.log(this.dataBase);
  };

  mouseCanvasStop = () => {
    this.dataBase.push();
    console.log(this.dataBase);
  };
}

export default Model;
