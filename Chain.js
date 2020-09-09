class Chain {
constructor(bodyA, bodyB){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 10
    }
    var c= Constraint.create(options);
    World.add(world, c);
   

}
display(){
var pointA = this.c.bodyA.position;
var pointB = this.c.bodyB.position;

    strokeWeight(4);
  line(pointA.x,pointA.y,pointB.x,pointB.y);


}

}
