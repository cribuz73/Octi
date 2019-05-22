var game = new Phaser.Game(1024, 521, Phaser.AUTO,'', {
    preload: preload,
    update: update,
    create: create
});

function preload() {
    game.load.image("tileset", "assets/tileset.png");
    game.load.tilemap("map", "assets/untitled.json", null, Phaser.Tilemap.TILED_JSON);
    game.load.spritesheet("player_sprite", "assets/adventurer-v1.5-Sheet.png", 50,37);
}

function create() {
    var map = game.add.tilemap("map", 64, 64, 16, 8);
    map.addTilesetImage("tileset");
    var background = map.createLayer("Background_Layer");
    var foreground = map.createLayer("Foreground_Layer");

    background.resizeWorld();


    player = game.add.sprite(1, 4, 'player_sprite', 1);
    player.animations.add('walk', [9,10,11], 8, true);
    player.animations.add('idle', [1,2,3], 6, false);
    player.animations.add('jump', [8,9,10], 4, true );
    game.camera.follow(player, Phaser.Camera.LOCKON, 0.1, 0.1);

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.right.isDown)
    {
        player.animations.play('walk');
        player.x +=3;
    }
    else if(cursors.right.isUp){
        player.animations.play('idle');
    }

    if (cursors.left.isDown){
        player.animations.play('jump');
        player.x -=3;
    }
}

function render(){
    game.debug.cameraInfo(game.camera, 32, 32);
}