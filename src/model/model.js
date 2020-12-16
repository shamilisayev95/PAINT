class Model {
    constructor() { 
        this.db = [];

    }

    footerColor = (color) => {
        this.db.push(color);
        console.log(this.db)
    }

}

export default Model;