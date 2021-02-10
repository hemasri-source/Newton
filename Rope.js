class Rope{
    constructor (bodyX, pointY){
        var options = {
            bodyA:bodyX,
            pointB:pointY,
            stiffness:0.05,
            lenght:300,
        }
        this.pointB = pointY
        this.SlingShot = Constraint.create(options)
        World.add(world,this.SlingShot)
    }
    display(){
        var pointA = this.SlingShot.bodyA.position
        var pointB = this.pointB
        strokeWeight(5)
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
       }
}
