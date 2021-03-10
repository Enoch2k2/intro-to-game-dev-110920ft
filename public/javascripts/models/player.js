class Player {

  constructor() {
    this.x = (GAME_WIDTH / 2) - 10;
    this.y = (GAME_HEIGHT / 2) - 10;
    this.color = 'red';
    this.width = 20;
    this.height = 20;

    this.direction = {
      up: true,
      down: false,
      left: false,
      right: false
    }

    this.xspeed = 0;
    this.yspeed = 0;

    this.addMovement = this.addMovement.bind(this);
    this.stopMovement = this.stopMovement.bind(this);
  }

  controls() {
    this.setupMovement()
  }

  setupMovement() {
    document.addEventListener('keydown', this.addMovement);
    document.addEventListener('keyup', this.stopMovement);
  }

  addMovement(e) {
    switch(e.keyCode) {
      case UP_KEY:
        this.yspeed = -1;
        this.xspeed = 0;
        this.resetDirection();
        this.direction.up = true;
        break;
      case DOWN_KEY:
        this.yspeed = 1;
        this.xspeed = 0;
        this.resetDirection();
        this.direction.down = true;
        break;
      case LEFT_KEY:
        this.xspeed = -1;
        this.yspeed = 0;
        this.resetDirection();
        this.direction.left = true;
        break;
      case RIGHT_KEY:
        this.xspeed = 1;
        this.yspeed = 0;
        this.resetDirection();
        this.direction.right = true;
        break;
    }
  }

  stopMovement(e) {
    switch(e.keyCode) {
      case UP_KEY:
        this.yspeed = 0;
        break;
      case DOWN_KEY:
        this.yspeed = 0;
        break;
      case LEFT_KEY:
        this.xspeed = 0;
        break;
      case RIGHT_KEY:
        this.xspeed = 0;
        break;
    }
  }

  resetDirection() {
    this.direction = {
      up: false,
      down: false,
      right: false,
      left: false
    }
  }

  update() {
    // used for updating the position
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  draw() {
    // used for drawing it to the canvas
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}