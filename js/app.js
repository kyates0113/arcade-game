// Enemies our player must avoid

class Enemy {
  constructor(x=-101, y=65){
    this.x = x;
    this.y = y;
    this.side = 101;
    this.sprite = 'images/enemy-bug.png';
  }
    //draw enemy on board
  render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //update enemy position - use dt - delta time between ticks
  //reset position when they hit end of board
  update(dt){
    if(this.x < this.side*5){
      this.x += 100*dt;
    }
    else {
      this.x = -101;
    }
  }
}
 const bug1 = new Enemy(-101, 166-30);
 const bug2 = new Enemy(-303, 249-30);
 const allEnemies = [];
 allEnemies.push(bug1, bug2);


// Now write your own player class
class Hero {
  constructor(){
    this.x = 101*2;
    this.y = (83*5)-30;
    this.forward = 83;
    this.side = 101;
    this.sprite = 'images/char-boy.png';
    this.width = 30;
  }
  //methods
  //render pic
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
      //update position on board & check for crashes or wins
  update(){
    for(let enemy of allEnemies){
      if (this.y === enemy.y && this.x > enemy.x -50 && this.x < enemy.x + 50){
        alert('You lose!');
        this.reset();
      }
      if (this.y === -30){
        alert('You win!');
        setTimeout(this.reset(), 5000);
      }
    }
  }
  reset(){
    this.y = 101*2
    this.y = (83*5)-30;
  }

      //handleInput allowedKeys
      // @param {string} input
  handleInput(input){
    switch(input) {
      case 'left':
        if (this.x>0){
            this.x -= this.side;
        }
        break;
      case 'up':
        if (this.y > 0){
            this.y -= this.forward;
        }
        break;
      case 'right':
        if (this.x < this.side*4) {
            this.x += this.side;
        }
        break;
      case 'down':
        if (this.y < this.forward*4){
            this.y += this.forward;
        }
        break;
    }
  }
      //upon win, reset player position
}

const player = new Hero();

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
