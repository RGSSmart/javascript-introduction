var data = {
  "nodes": [
    {
      "id": "A",
      "group": "family"
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
var chart;// = anychart.graph(data);


function addNode() {
  var new_node = document.getElementById("newNode").value;
  // Provera da li postoji cvor u grafu. 
  // Ako ne posotji onda ga dodaje
  for (let node of data.nodes) {
    if (node.id == new_node) {
      return;
    }
  }
  // Novi cvor ima i atrigbut "grouP" koji ga boji u configGraphView metodi u crveno
  data.nodes.push({ "id": new_node, "group": "new" });
  renderGraph();
}
function addEdge() {
  var start_node = document.getElementById("startNode").value;
  var end_node = document.getElementById("endNode").value;
  // provera da li postoji veza u grafu. Ako postoji aca gresku
  // ako ne posotji onda ga dodaje
  data.edges.push({ "from": start_node, "to": end_node , "normal":{ stroke:{color:"#FF0000"}}});
  renderGraph();
}
function configGraphView(chart) {
  chart.nodes().labels().enabled(true);
  chart.nodes().labels().fontSize(42);
 //chart.edges().normal().stroke("#ffa000", 2, "10 5", "round");
  if( chart.group("new") != undefined){
    var family = chart.group("family");
    family.normal().shape("star5");
    family.normal().fill("#ffa000");
    family.hovered().fill("white");
  }
  if( chart.group("new") != undefined){
    var red = chart.group("new");
    red.normal().fill("#FF0000");
  }
}
function renderGraph() {

  document.getElementById("container").innerHTML = "";
  anychart.data.set(data);
  chart = anychart.graph(data);

  configGraphView(chart);

  chart.title("Primer jednog obicnog grafa");
  chart.container("container").draw();


}




function findPath() {
  var startNode = 'A';// document.getElementById("startNode");
  var endNode = 'D'; document.getElementById("endNode");
  var map_data = convertDataToMap(); // Da li moze bolje? Hm?
  // recursionSearch(startNode, endNode, map_data);
}

var resultSearchArray = [];
var nodeVisitedArray = [];

function notVisited(node) {
  return !nodeVisitedArray.includes(node);
}

function recursionSearch(currentNode, endNode, graph) {
  if (currentNode === endNode) {
    return currentNode;
  } else {
    console.log("Trenutno:" + currentNode);
    if (notVisited(currentNode)) {
      graph[currentNode].forEach(next => {
        nodeVisitedArray.push(next);
        resultSearchArray.push(recursionSearch(next, endNode, graph));
      });
    }
  }

}// Fancy method

function convertDataToMap() {
  var map_data = {};
  data.nodes.forEach(el => {
    map_data[el.id] = [];
  });
  data.edges.forEach(el => {
    map_data[el.from].push(el.to);
    map_data[el.to].push(el.from);
  });
  return map_data;
}
anychart.onDocumentReady(renderGraph);
