const BinaryTree = require('../data-structs/binaryTree')

const array1 = [10, 6, 14, 5, 9, 11, 15, 8, 13]
const bt1 = new BinaryTree()
bt1.insertBatch(array1)

/**
 * 遍历整个树，获取节点
 * @param {*} node 
 */
function bfs(node) {
  const result = []
  result.maxDepth = 0
  bfsImpl(node, result, 0, 0)
  return result
}

function bfsImpl(node, result, depth, index) {
  if (!result[depth]) {
    result[depth] = []
  }
  if (node === null) {
    return
  }
  // 判断当前最大的节点层数
  result.maxDepth = depth > result.maxDepth ? depth + 1 : result.maxDepth
  result[depth].push({
    key: node.key,
    position: index, 
  })
  bfsImpl(node.left, result, depth + 1, 2 * index + 0)
  bfsImpl(node.right, result, depth + 1, 2 * index + 1)
}

function formatConsole() {
  const layerList = bfs(bt1.root)
  let lines = []
  for (let i = layerList.length - 1; i >=0 ; i--) {
    const nodeList = layerList[i]
    if (nodeList.length) {
      lines = lines.concat(drawLine(nodeList, i, layerList.maxDepth))
    }
  }
  lines.pop()
  console.log(lines.reverse())
}

function drawNull(line1, line2, i, maxDepth, index1, index2) {
  while (index1++ < index2) {
    line1 += '  '
    line1 += '  '.repeat(maxDepth - i + 1)
    line2 += '  '
    line2 += '  '.repeat(maxDepth - i + 1)
  }
  return {
    line1,
    line2
  }
}

function drawNode(line1, line2, i, maxDepth, key, index) {
  line1 += index % 2 === 1 ? '  ' : key
  line1 += '  '.repeat(maxDepth - i + 1)
  line1 += index % 2 === 1 ? key : '  '
  line2 += index % 2 === 1 ? '  ' : '[-'
  line2 += '--'.repeat(maxDepth - i + 1)
  line2 += index % 2 === 1 ? '-]' : '  '
  return {
    line1,
    line2
  }
}

function formatNumber(number) {
  number = (Number(number) || 0).toString()
  while (number.length < 2) {
    number = ' ' + number
  }
  return number
}

function drawLine(nodeList, j, maxDepth) {
  let index = 0
  let line1 = ''
  let line2 = ''
  // todo
  line1 += '  '.repeat(0.5 * (maxDepth - j + 2) * (maxDepth - j - 1))
  line2 += '  '.repeat(0.5 * (maxDepth - j + 2) * (maxDepth - j - 1))
  for (let i = 0; i < nodeList.length; i++) {
    const result1 = drawNull(line1, line2, j, maxDepth, index, nodeList[i].position)
    line1 = result1.line1
    line2 = result1.line2
    const result2 = drawNode(line1, line2, j, maxDepth, formatNumber(nodeList[i].key), nodeList[i].position)
    line1 = result2.line1
    line2 = result2.line2
    index = nodeList[i].position + 1
  }
  const result3 = drawNull(line1, line2, j, maxDepth, index, 2 ^ maxDepth - 1)
  line1 = result3.line1
  line2 = result3.line2
  return [line1, line2]
}

formatConsole()