class Box extends BaseClass{
  constructor(x, y, width, height) {
    //to transfer all the properties of parent class to child class
    super(x,y,width,height);
    this.image=loadImage("sprites/wood1.png");
  }
}