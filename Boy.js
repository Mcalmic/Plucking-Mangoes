class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.5,
            length: 10
        }
        this.sling1 = loadImage("boy.png");
        this.chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.chain);
    }

    display(){
        image(this.sling1, 100, 300, 200, 200);

        if(this.chain.bodyA != null){

            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

        }
    }

    fly(){

        this.chain.bodyA = null;

    }
    
}