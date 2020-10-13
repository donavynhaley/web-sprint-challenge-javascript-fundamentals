// 1. Copy and paste your prototype in here and refactor into class syntax.
class  CuboidMaker {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.width * this.length + this.length * this.height + this.width * this.height);
    }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboid = new CuboidMaker(4, 5, 5);
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(length, width, height){
        super(length, width, height)
    }
    isCube(){
        if(this.length == this.width && this.width == this.height){
            return true;
        }
        else{
            console.log("All sides of a cube must be the same")
            return false;
        }
    }
    volume(){
        if(this.isCube() == true){
            return this.length**3
        }
        else{
            return "Error"
        }
    }
    surfaceArea(){
        if(this.isCube() == true){
            return 6 * (this.length**2)
        }
        else{
            return "Error"
        }       
    }
}

const cube1 = new CubeMaker(5, 5, 5);
 console.log(cube1.volume()); // 125
 console.log(cube1.surfaceArea()); // 150

 const cube2 = new CubeMaker(3, 5, 5);
 console.log(cube2.volume()); // Error
 console.log(cube2.surfaceArea()); // Error
