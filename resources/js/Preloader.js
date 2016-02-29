
Bomberman.Preloader = function (game) {
	Bomberman.GAME_WIDTH = 480;
	Bomberman.GAME_HEIGHT = 352;
	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

Bomberman.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.stage.backgroundColor = "#4488AA";
		this.preloadBar = this.add.sprite(300, 400, 'preloaderBar');

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);
	
		//	Here we load the rest of the assets our game needs.
		this.load.image('playButton', 'images/play_button.png');
		this.load.image('menuBackground', 'images/bg.png');
		this.load.audio('titleMusic', ['audio/main_menu.mp3']);

		this.load.tilemap('arena', 'assets/gameMap.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('tiles', 'assets/myTiles.png');
		this.load.image('player-1', 'assets/rsz_player-1.png');
		this.load.image('player-2', 'assets/rsz_player-2.png');

	},

	create: function () {
		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
	
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};