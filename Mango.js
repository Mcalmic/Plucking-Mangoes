class Mango{
    constructor(x, y, diameter) {
        var options = {
            'restitution':0,
            'friction':1.0,
            isStatic: true,
        }
        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.diameter, this.diameter);
      }
}