
Bomberman.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

Bomberman.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.music = this.add.audio('titleMusic');
		this.music.play();

		// this.bg = this.add.sprite(0,0,'menuBackground');
		

		this.playButton = this.add.button(this.game.width/2, this.game.height/2, 'playButton', this.startGame, this);
		this.playButton.anchor.setTo(0.5);


	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	Ok, the Play Button has been clicked or touched, so let's stop the music (otherwise it'll carry on playing)
		this.music.stop();

		//	And start the actual game
		this.state.start('Game');

	}

};