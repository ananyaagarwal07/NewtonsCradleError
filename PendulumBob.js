class PendulumBob{
    constructor(x,y){
        var options = {isStatic: false, restitution: 0.3, friction: 0, density: .5};
	    this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);// translate helps rotate bodies around themselves
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(0, 0, 50, 50);    
        pop(); 
    }
}