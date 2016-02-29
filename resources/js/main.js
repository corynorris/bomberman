var game;

window.onload = function() {
    game = new Phaser.Game(480, 352, Phaser.AUTO, "");
}


var map;
var tileset;
var player1;
var player2;
var obstacles;
var cursors;
var speed = 100;

var Bomberman = Bomberman || {};



Bomberman.BootState = function() {
    "use strict"
    Phaser.State.call(this);
}

Bomberman.BootState.prototype = Object.create(Phaser.State.prototype);
Bomberman.BootState.prototype.constructor = BombermanB.ootState;
 
Bomberman.Preload =  function() {
    game.load.tilemap('arena', 'assets/gameMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/myTiles.png');
    game.load.image('player-1', 'assets/rsz_player-1.png');
    game.load.image('player-2', 'assets/rsz_player-2.png');
}

Bomberman.Create = function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('arena');
    map.addTilesetImage('myTiles', 'tiles');


    // LAYERS
    background = map.createLayer('background');
    obstacles = map.createLayer('obstacles');
    map.setCollisionBetween(1, 10000, true, obstacles);

    background.resizeWorld();
    obstacles.resizeWorld();
    obstacles.debug = true;



    // PLAYERS
    player1 = game.add.sprite(32 * 3, 32, 'player-1');
    player2 = game.add.sprite(416, 288, 'player-2');


    // PHYSICS
    player1.bounce = 0;
    //player1.anchor.setTo(0.5, 0.5);
    game.physics.enable(player1);
    cursors = game.input.keyboard.createCursorKeys();
}


Bomberman.Update = function() {


    game.physics.arcade.collide(player1, obstacles);


    if (cursors.left.isDown) {
        player1.body.velocity.x = -speed;
        //player1.angle = 90;
    } else if (cursors.right.isDown) {
        player1.body.velocity.x = speed;
        // player1.angle = 0;

    } else if (cursors.up.isDown) {
        player1.body.velocity.y = -speed;
        //player1.angle = 270;
    } else if (cursors.down.isDown) {
        player1.body.velocity.y = speed;
        //player1.angle = 180;
    } else {
        player1.body.velocity.x = 0;
        player1.body.velocity.y = 0;
    }

}

