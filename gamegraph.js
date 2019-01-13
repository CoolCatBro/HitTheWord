function gameScene(scene_name="game",width=600,height=500)
{
    var layers = new Array();
    this.id = scene_name;

    Canvas.call(this,scene_name,width,height);
    
    this.addLayer = function(layer)
    {
        layers.push(layer);
    }

    this.deleteLayer = function(layer_name)
    {
        for(i=0;i<layers.length;i++)
        {
            if(layers[i].id == layer_name)
            layers.splice(i,1);
        }
    }

    this.render = function()
    {
        for(i=0;i<layers.length;i++)
        {
            layers[i].render(this.context);
        }
    }
}

function gameLayer(layer_name="gameLayer")
{
    var nodes = new Array();
    this.id = layer_name;

    this.addNode = function(node)
    {
        nodes.push(node);
    }

    this.deleteNode = function(node_name)
    {
        for(i=0;i<nodes.length;i++)
        {
            if(nodes[i].id == node_name)
            {
                nodes.splice(i,1);
            }
        }
    }

    this.render = function(context)
    {
        for(i=0;i<nodes.length;i++)
        {
            nodes[i].render(context);
        }
    }
}

function gameNode(node_name="gameNode")
{
    this.id  = node_name;
}