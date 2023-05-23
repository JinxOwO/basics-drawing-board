/*
 * @Date: 2023-05-23 21:30:58
 * @Author: JinxOwO
 * @LastEditTime: 2023-05-23 21:47:12
 * @FilePath: \basics-drawing-board\lib\draw\index.js
 */
class Rect {
    constructor() {
        // 获取起点位置
        this.startPoint = startPoint;
        // 获得宽度
        this.width = width;
        // 获得高度
        this.height = height;

    }

    // 具体实现画矩形的方法
    draw(context) {
        // 样式
        context.strokeStyle = "#000";
        // 画矩形  需要 起点坐标  宽  高 
        context.strokeRect(this.startPoint.x, this.startPoint.y, this.width, this.height);
    }
}

class Point {
    constructor() {
        this.x = x;
        this.y = y;
    }
    draw(point) {
        return this.x === point.x && this.y === point.y;
    }
}

// export {
//     Point,
//     Rect,
// }