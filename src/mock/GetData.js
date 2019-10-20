// Convert JSON OBJECT to OOP
import Room from './Room';
import Item from './Item';
import Data from './Data';

// Tạo instance của Room
let dressingRoom = new Room();

// Duyệt vòng lặp để đưa data từ vào danh sách mảng
for(let itemJson of Data){
    
    let id = itemJson.id;
    let type = itemJson.type;
    let name = itemJson.name;
    let desc = itemJson.desc;
    let imgSrc_jpg = itemJson.imgSrc_jpg;
    let imgSrc_png = itemJson.imgSrc_png;

    // Tạo một instance của Item, lấy data tự động thông qua loop
    let item = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);
    // Đưa item vừa tạo vào danh sách
    dressingRoom.addItem(item);
}

export default dressingRoom;


