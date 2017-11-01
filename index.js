function bfs(rootNode, vertices, edges){

}

function findAdjacent(node, vertices, edges) {
  let adjacentNodeName = []
  for (let i = 0; i < edges.length; i++) {
    if  (edges[i].includes(node)) {
      if (edges[i][0] === node) {
        adjacentNodeName.push(edges[i][1])
      }
      else {
        adjacentNodeName.push(edges[i][0])
      }
    }
  }
  return vertices.filter((vertice) => adjacentNodeName.includes(vertice.name) && vertice.distance === null)
}

function markDistanceAndPredecessor() {

}
