function play()
{
    Scene1 = new Scene("scene1");
    game = new gameScene("game1");
    Scene1.addLayer(game);
    letter = new gameTextNode("A",10,50);
    game.addLayer(letter);
    game.render();
}