function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}


class BinaryTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    let node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      insertNode(this.root, node)
    }
  }
  insertBatch(array = []) {
    array.forEach(item => {
      this.insert(item)
    })
  }
}

class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.key = value
  }
}

module.exports = BinaryTree