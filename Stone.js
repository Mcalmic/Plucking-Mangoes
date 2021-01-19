class Stone{
    constructor(x, y, diameter) {
        var options = {
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diameter);
        this.diameter = diameter;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.diameter, this.diameter);
      }
}