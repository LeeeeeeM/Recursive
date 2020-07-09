const BinaryTree = require('../../data-structs/binaryTree')

const array1 = [10, 6, 14, 5, 9, 11, 15, 8, 13]

const bt1 = new BinaryTree()
bt1.insertBatch(array1)

const array2 = [10, 6, 14, 9, 11, 15, 8, 13]
const bt2 = new BinaryTree()
bt2.insertBatch(array2)


function isSymmetryNode(root) {
  if (root === null) {
    return true
  }
  return  isSymmetryNodeImpl(root.left, root.right)
}

function isSymmetryNodeImpl(node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  }
  if (node1 === null && node2 !== null) {
    return false
  }
  if (node2 === null && node1 !== null) {
    return false
  }
  return isSymmetryNodeImpl(node1.left, node2.right) && isSymmetryNodeImpl(node1.right, node2.left)
}

console.log(isSymmetryNode(bt1.root))

console.log(isSymmetryNode(bt2.root))