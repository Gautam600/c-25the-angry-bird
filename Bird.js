class Bird extends BaseClass{
  constructor(x,y){
    //to transfer all the properties of parent class to child class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //to refer to the parent class display function
    super.display();
  }
}