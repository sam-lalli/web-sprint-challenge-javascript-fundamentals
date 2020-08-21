// 1. Copy and paste your prototype in here and refactor into class syntax.


// using slightly different varible names so there is no problems with scope and binding
class CuboidMaker2{
    constructor(attributes){
        this.length2 = attributes.length2;
        this.width2 = attributes.width2;
        this.height2 = attributes.height2;
    };

    volume(){
        return this.length2 * this.width2 * this.height2 
    }

    surfaceArea(){
        return (2 * (this.length2 * this.width2 + this.length2 * this.height2 + this.width2 * this.height2));
    }
};


const cuboid2 = new CuboidMaker2({
    length2: 4,
    width2: 5,
    height2: 5,
  });
  

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
