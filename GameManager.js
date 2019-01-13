var GameManager = new function()
{
    this.score = 0;
    this.gravity = 0;
    
    this.refX = 0;
    this.refY = 0;

    this.addScore = function()
    {
        this.score += 1;
    }
}