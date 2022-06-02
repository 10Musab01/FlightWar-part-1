class Spaceship {
    constructor(x, y, width, height, ) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.spaceshipImg = loadImage("spaceship.png")
      
    }
    display() {
      if (keyIsDown(RIGHT_ARROW)   ) {
        this.position.y += 1;
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
        this.position.y -= 1;
      }
  
  
      push();
      translate(this.x, this.y);;
      imageMode(CENTER);
      image(this.spaceshipImg, 0, 0, this.width, this.height);
      pop();
      noFill();
    }
  }