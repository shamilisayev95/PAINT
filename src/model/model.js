class Model {
    constructor() {
        this.dataBase = [{
            color: "#0a0a0a",
        }];
    }

    changeColor = (color) => {
        this.dataBase.push(color);
        console.log(this.dataBase);
    }
}

export default Model;