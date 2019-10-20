export default class Item{
    constructor(id, type, name, desc, imgSrc_jpg, imgSrc_png){
        this.id = id;
        this.type = type; // Loại item: áo, quần, giày dép,...
        this.name = name;
        this.desc = desc;
        this.imgSrc_jpg = imgSrc_jpg; // hình show bên khung shopping
        this.imgSrc_png = imgSrc_png; // hình show trên model
    }
}