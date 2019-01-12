function Scene(scene_name)
{   
    this.div = document.createElement("div");

    this.div.id = scene_name;
    this.div.className = "scene";
    document.body.appendChild(this.div);


    this.addLayer = function(layer){
        this.div.appendChild(layer.div);
    }

    this.deleteLayer = function(layer_name){
        for(i=0; i<this.div.childNodes.length; i++)
        {
            if (this.div.childNodes[i].id == layer_name)
            {
                this.div.removeChild(this.div.childNodes[i]);
            }
        }
    }
}

function Layer(layer_name)
{
    this.div = document.createElement("div");

    this.div.id = layer_name;
    this.div.className = "layer";

    this.addNode = function(node) {
        this.div.appendChild(node.div);
    }
    
    this.deleteNode = function(node_name) {
        for(i=0; i<this.div.childNodes.length; i++)
        {
            if (this.div.childNodes[i].id == node_name)
            {
                this.div.removeChild(this.div.childNodes[i]);
            }
        }
    }
}

function Node(node_name)
{
    this.div = document.createElement("div");

    this.div.id = node_name;
    this.div.className = "node";
}