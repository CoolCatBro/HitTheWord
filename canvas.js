var Canvas = new function(canvas_name = "canvas" ,width = 600 ,height = 500)
{
    Node.call(this,canvas_name,"canvas","game");
    this.div.width = width;
    this.div.height = height;
    this.context = this.div.getContext("2d");
}

function play()
{
    Scene1 = new Scene("scene1");
    Scene1.addLayer(Canvas);
}