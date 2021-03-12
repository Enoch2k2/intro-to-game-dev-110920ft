class Laserbeam {
  static all = [];

  constructor(attr) {
    this.x = attr.x;
    this.y = attr.y;
    this.width = attr.width;
    this.height = attr.height;
    this.color = 'green';
    this.direction = attr.direction;
    this.speed = 2;
    Laserbeam.all.push(this);
  }

  update() {
    if(this.direction == "up") {
      this.y = this.y - this.speed;
    } else if (this.direction == "down") {
      this.y = this.y + this.speed;
    } else if (this.direction == "left") {
      this.x = this.x - this.speed;
    } else if (this.direction == "right") {
      this.x = this.x + this.speed;
    }

    
    if(this.y <= 0 || this.y >= GAME_HEIGHT || this.x + this.width <= 0 || this.x >= GAME_WIDTH) {
      let index = Laserbeam.all.indexOf(this);
      Laserbeam.all.splice(index, 1);
      // Laserbeam.all = Laserbeam.allslice(0, index).concat(Laserbeam.all.slice())
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}