export default class Room{
    constructor(){
        this.ListOfItems = [];
    }

    addItem = (item) => {
        this.ListOfItems = [...this.ListOfItems, item];
    }
}