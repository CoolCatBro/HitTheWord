function Letter()
{
    this.char;
    this.x;
    this.y;
    this.speed;
    
    gameNode.call(this,"char");
}

Letter.prototype.render = function(context)
{
    context.font = "30px Arial";
    context.fillText(this.char,this.x,this.y);
}

function Letters()
{
    this.nletters = 0;

    this.createLetter = function()
    {
        if (this.nletters < 8 )
        {
        letter = new Letter();
        letter.char = String.fromCharCode(Math.round(getRandom(65,90)));
        letter.id = letter.char;
        letter.x = getRandom(7,500);
        letter.y = 0;
        letter.speed = getRandom(1,10);
        
        this.addNode(letter);
        this.nletters++;
        }
    }

    this.update = function()
    {
        for(i=0;i<this.nodes.length;i++)
        {
            this.nodes[i].y += this.nodes[i].speed * 0.05; 
        }
    }
}

Letters.prototype = new gameLayer("letters");