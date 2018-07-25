// Enemies our player must avoid

class Enemy {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
  }
  //draw enemy on board
  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //update enemy position - use dt - delta time between ticks
  //reset position when they hit end of board
  update(dt) {

  }
}
 const bugs = new Enemy();
 const allEnemies = [];
 allEnemies.push(bugs);


// Now write your own player class
class Hero {
  constructor(){
    this.x = 101*2;
    this.y = 83*5;
    this.forward = 83;
    this.side = 101;
    this.sprite = 'images/char-boy.png';
  }
  //methods
      //update position on board & check for crashes or wins
  update(){

  }
      //render pic
  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
      //handleInput allowedKeys
      // @param {string} input
  handleInput(input){
    switch(input) {
      case 'left':
        this.x -= this.side;
        break;
      case 'up':
        this.y -= this.forward;
        break;
      case 'right':
        this.x += this.side;
        break;
      case 'down':
        this.y += this.forward;
        break;
    }


  }
      //upon win, reset player position
}

const player = new Hero();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
