/*
 * @Date: 2023-05-23 20:33:53
 * @Author: JinxOwO
 * @LastEditTime: 2023-05-23 21:07:36
 * @FilePath: \basics-drawing-board\lib\Button.ts
 */
type obj = {

}
class LButton {
    private id: String;
    fontStyle: Object;
    btnStyle: Object;
    width: String;
    height: String;
    constructor(id: string, fontStyle: Object, btnStyle: Object, width: String, height: String) {
        this.id = id;
        this.fontStyle = fontStyle;
        this.btnStyle = btnStyle;
        this.width = width;
        this.height = height;
    }
    init() {
        this.id = `L-${/[a-zA-Z0-9]{8}/}`;
        console.log("------->", this.id);
    }

}