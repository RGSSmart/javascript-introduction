
//Koliko graf ima cvorova I veza
export function getNodeCount(data){
    document.getElementById("nodeCount").innerHTML= " Graf ima "+  
      data.nodes.length + " cvorova";  
  };

  //Proverava da li postoji cvor u grafu koji nije ni sa kim povezan
  export function getNotconnectedNodes(data){
    
    var result = [];
    for( node of data.nodes){
        var isConnected = false;
        for( edge of data.edges ){
            if( edge.from === node.id){
                isConnected = true;
            }
        }   
        if( !isConnected )
            result.push(node);
    }
    return result;
  }