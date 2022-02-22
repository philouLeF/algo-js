class circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xOffset = xPos;
        this.yOffset = yPos;
    }
    get surface() {
        return Math.PI * Math.pow(this.radius,2)
    }
}

let test1 = new circle(1, 2, 5)