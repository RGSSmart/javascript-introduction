
var data = {
    "nodes": [
      {
        "id": "A"
      },
      {
        "id": "B"
      },
      {
        "id": "C"
  
      },
      {
        "id": "D"
      }
    ],
    "edges": [
      { "from": "A", "to": "B" },
      { "from": "B", "to": "C" },
      { "from": "C", "to": "D" },
    ]
  }

function renderGraph() {

    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("Primer jednog obicnog grafa");
    chart.container("container").draw();
    
  }
renderGraph();

document.getElementById("provera").addEventListener("click", function(){
    var edgeEnd = document.getElementById("veza").value;
    var nodeName =  document.getElementById("cvor").value;
   
    if(!nodeIsInData(nodeName, data.nodes)){
        addNewNode(nodeName);
        if(!edgeIsInData(edgeEnd, data.edges) && isValid(edgeEnd)){
            addNewEdge(nodeName, edgeEnd);
        }
    }
    renderGraph();
});
function addNewEdge(from, to){  data.edges.push( { "from": from,  "to": to}, ); }
function addNewNode(node){  data.nodes.push({ "id": node,normal:{ fill: "#ffa000"}}); }
function isValid(edge) { edge!=''? true : false;}
function edgeIsInData( edge, array){
    
    for(el of array)
    {
        if(el.from == edge.from && el.to == edge.to)
        return true;
    }
    return false;
}
function nodeIsInData(element, array)
{
    for(el of array)
    {
        if( el.id == element.id)
        return true;
    }
    return false;
}