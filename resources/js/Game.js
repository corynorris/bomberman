
Bomberman.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;	//	the tween manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
    this.speed = 100;
    this.player1;
    this.player2;
};

Bomberman.Game.prototype = {

	create: function () {

       this.game.physics.startSystem(Phaser.Physics.ARCADE);

       map = this.game.add.tilemap('arena');
       map.addTilesetImage('myTiles', 'tiles');


        // LAYERS
        background = map.createLayer('background');
        obstacles = map.createLayer('obstacles');
        map.setCollisionBetween(1, 10000, true, obstacles);

        background.resizeWorld();
        obstacles.resizeWorld();
        obstacles.debug = true;



        // PLAYERS
        player1 = this.game.add.sprite(32 * 3, 32, 'player-1');
        player2 = this.game.add.sprite(416, 288, 'player-2');


        // PHYSICS
        player1.bounce = 0;
        //player1.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(player1);
        cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function () {


        this.game.physics.arcade.collide(player1, obstacles);


        if (cursors.left.isDown) {
            player1.body.velocity.x = -this.speed;
            //player1.angle = 90;
        } else if (cursors.right.isDown) {
            player1.body.velocity.x = this.speed;
            // player1.angle = 0;

        } else if (cursors.up.isDown) {
            player1.body.velocity.y = -this.speed;
            //player1.angle = 270;
        } else if (cursors.down.isDown) {
            player1.body.velocity.y = this.speed;
            //player1.angle = 180;
        } else {
            player1.body.velocity.x = 0;
            player1.body.velocity.y = 0;
        }

    },

    quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};