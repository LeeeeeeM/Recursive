const BinaryTree = require('../../data-structs/binaryTree')

const array = [5, 2, 4, 3, 7, 6, 11, 1]

const bt = new BinaryTree()

array.forEach(item => {
  bt.insert(item)
})

function countLayer(tree) {
  const countMap = {}
  debugger
  countLayerImpl(tree.root, countMap, 1)
  return countMap
}


function countLayerImpl(node, map, count) {
  if (node === null) {
    return
  }
  map[count] = map[count] ? ++map[count] : 1
  count++
  countLayerImpl(node.left, map, count)
  countLayerImpl(node.right, map, count)
}

console.log(countLayer(bt))