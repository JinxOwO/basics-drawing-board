/*
 * @Date: 2023-05-23 20:12:19
 * @Author: JinxOwO
 * @LastEditTime: 2023-05-23 22:56:29
 * @FilePath: \basics-drawing-board\lib\component\Button.js
 */
// import {
//     Point,
//     Rect,
// } from "../draw/index";

class LButton {
    #id;
    constructor() {
        // this.id = "";
        this.fontStyle = {};
        this.btnStyle = {};
        this.width = "";
        this.height = "";
    }

    /**
     * @description 初始化
     *
     * @memberof LButton
     */
    init(fatherDom, point, width, height) {
        this.#id = `L-${Number(Math.random().toString().substr(3, 8) + Date.now()).toString(36)}`;
        // this.myRect = new Rect(new Point(point.x, point.y), width, height);
        this.dom = document.createElement("button");
        this.dom.value = "button"
        this.dom.innerHTML = "button"
        this.dom.classList.add("child")
        // this.dom.setAttribute("top", point.y)
        // this.dom.setAttribute("left", point.x)
        this.dom.setAttribute("style", `width:${width}px;height:${height}px;top:${point.y}px;left:${point.x}px`);
        fatherDom.appendChild(this.dom);
        console.log("12------->", this);
    }
}
// export {
//     LButton
// }