
class Dustbin {
    constructor(x, y, width, height) {

      this.body = Bodies.rectangle(x, y, width, height, {isStatic:true});
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 200,300);
      pop();
    }
  }
  
  
