class launch{
    constructor(body, pointB){
        var options = {
            bodyA:body,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.bodyA = body
        this.pointB = pointB
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }
    attach(body){
        this.launch.bodyA = body
    }
    fly(){
        this.launch.bodyA = null
    }
    
    display(){
        if (this.launch.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);    
        }
        
    }
    
}