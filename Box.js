class Box1{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.Visibility = 255
      World.add(world, this.body);
  }
  score(){
      if(this.Visibility < 0 && this.Visibility > -102){
          Score = Score + 1
      }
  }
  display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue")
        rect(0, 0, 50, 50);
        pop();
    }
    else{
        World.remove(world, this.body);
        push()
        this.Visibility = this.Visibility - 5
        pop()
        console.log(this.Visibility)
    }
  }
}

