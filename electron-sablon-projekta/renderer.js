// Spisak cvorova i njihovih veza 
var data = {
    "nodes": [{ "id": "A" }, { "id": "B" }, {"id" : "C"},{"id":"D"}],
    "edges": [{ "from": "A", "to": "B" },{"from":"C", "to":"D"},{"from":"A","to":"D"}]
}


// Metoda za iscrtavanje grafa u div-u koji sa id="container"
function renderGraph() {
    document.getElementById("container").innerHTML = "";
    anychart.data.set(data);
    chart = anychart.graph(data);
    chart.title("Primer jednog obicnog grafa");
    chart.container("container").draw();
    anychart.color.darken("#FF0000", 0.2)

} 
// Poziv metode za ispis
anychart.onDocumentReady(renderGraph);

