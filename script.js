//Rectangle class having 2 properties length and breadth, 1 method.
class Rectangle {
	constructor(length,breadth){
		this.length= length;
		this.breadth= breadth;
	}
	calculateArea() {
		return this.length* this.breadth;
	}
}
var rect1= new Rectangle(10,20);
console.log("Length is :" + rect1.length + " Breadth is :" + rect1.breadth);
console.log("Area of rectangle is :" + rect1.calculateArea());