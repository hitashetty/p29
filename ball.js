class ball {
    constructor(x,y,radius){
      var options = {
      'density' : 1
      }
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      this.image = loadImage("polygon.png");
      this.body.scale =
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,this.radius,this.radius);
        this.image.size = 0.3;
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
    }
}