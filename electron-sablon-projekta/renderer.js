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
  var chart;// = anychart.graph(data);
  
  
  function addNode() {
    var new_node = document.getElementById("newNode").value;  
    // provera da li postoji cvor u grafu. AKo postoi baca gresku.
    // ako ne posotji onda ga dodaje
      data.nodes.push({ "id": new_node });    
      renderGraph();  
  }
  function addEdge() {
    var start_node = document.getElementById("startNode").value;  
    var end_node = document.getElementById("endNode").value;  
    // provera da li postoji veza u grafu. Ako postoji aca gresku
    // ako ne posotji onda ga dodaje
      data.edges.push({ "from": start_node,"to":end_node });    
      renderGraph();  
  }
  function renderGraph() {
  
    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("Primer jednog obicnog grafa");
    chart.container("container").draw();
    findPath();
  }
  
  function findPath() {
    var startNode = 'A';// document.getElementById("startNode");
    var endNode = 'D'; document.getElementById("endNode");
    var map_data = convertDataToMap(); // Da li moze bolje? Hm?
    recursionSearch(startNode, endNode, map_data);
  }
  
  var resultSearchArray = [];
  var nodeVisitedArray = [];
  
  function notVisited(node){
    return !nodeVisitedArray.includes(node);  
  }
  
  function recursionSearch(currentNode, endNode, graph) {
    if (currentNode === endNode) {
      return currentNode;
    } else {
      console.log("Trenutno:" + currentNode);
      if(notVisited(currentNode)){
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
  