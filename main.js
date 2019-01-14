// One time
function play()
{
    Scene1 = new Scene("scene1");
    game = new gameScene("game1");
    letters = new Letters();

    Scene1.addLayer(game);

    game.addLayer(letters);
    keyboard.addNode(letters);

    this.interval = setInterval(update,2);
}

// Run Every frame
function update()
{
    game.clear();
    letters.createLetter();
    letters.update();
    game.render();
}