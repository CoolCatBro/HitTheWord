function gameTextNode(char,x,y,style = "30px Arial")
{
    gameNode.call(this,"text")
    
    this.render = function(context)
    {
    context.font = style;
    context.fillText(char,x,y);
    }
}