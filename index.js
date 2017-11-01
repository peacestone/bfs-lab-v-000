function bfs(rootNode, vertices, edges) {

  let queue = []

  queue.push(rootNode)

  while(queue.length !== 0){

    console.log(queue)
  let firstNode = queue.shift()
  let adjacentNodes = findAdjacent(firstNode.name, vertices, edges)
  console.log(adjacentNodes)
  debugger
  markDistanceAndPredecessor(rootNode, adjacentNodes)
  queue.push(adjacentNodes)
  }
}

function findAdjacent(node, vertices, edges) {
  let adjacentNodeName = []
  for (let i = 0; i < edges.length; i++) {
    debugger
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

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  for (let i = 0; adjacentNodes.length > i; i++) {
    adjacentNodes[i].predecessor = predecessor
    adjacentNodes[i].distance = predecessor.distance + 1
  }
}
