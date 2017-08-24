function TreeNode(val) {
  this.val = val;
  this.left = this.right = undefined;
}

function buildTreeFromArray(a) {
  const nodes = a.map(n => n == null ? null : new TreeNode(n));
  const existsNodes = [];
  for (let i = 0, l = nodes.length; i < l; i++) {
    const n = nodes[i];
    const parent = existsNodes[0];
    if (n != null) {
      existsNodes.push(n);
    }
    if (!parent) {
      continue;
    }
    if (parent.left === undefined) {
      parent.left = n;
      continue;
    }
    if (parent.right === undefined) {
      parent.right = n;
      existsNodes.shift();
      continue;
    }
  }
  const root = nodes[0];
  return root;
}

module.exports = buildTreeFromArray;