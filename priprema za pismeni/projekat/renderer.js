import { getNodeCount } from "../statiske";
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

// Funckija iz drugog fajla
getNodeCount(data);

function renderGraph() {

  document.getElementById("container").innerHTML = "";
  anychart.data.set(data);
  chart = anychart.graph(data);
  chart.title("Primer jednog obicnog grafa");
  chart.container("container").draw();
  findPath();
}
anychart.onDocumentReady(renderGraph);
