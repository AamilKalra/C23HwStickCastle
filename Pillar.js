class Pillar {
    constructor(x, y, width, height) {
    var options = {
        'friction':0.3,
        'density':1.0,
        'isStatic':true
    }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.height = height;
     this.width = width;

     World.add(world, this.body);
    }

display(){
    var pos =this.body.position;
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("orange");
    rect (0, 0, this.width, this.height);
  
}
}