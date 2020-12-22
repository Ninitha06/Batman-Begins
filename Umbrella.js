class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella);
        this.speed = 0;
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        this.speed = this.speed + 0.05;
           var frameSpeed = floor(this.speed % walkingFrames.length);
            image(walkingFrames[frameSpeed],pos.x,pos.y+70,300,300);
        
    }
}