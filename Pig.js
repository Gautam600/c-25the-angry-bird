class Pig extends BaseClass {
    constructor(x, y) {
      //to transfer all the properties of parent class to child class
      super(x,y,50,50);
     this.image=loadImage("sprites/enemy.png");
    }
  }
  