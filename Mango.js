class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0.1,
          friction:3.0,
          density:1.0

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("sprites/mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("brown");
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };