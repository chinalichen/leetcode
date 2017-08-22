function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTreeFromArray(a) {
  const nodes = a.map(n => n == null ? null : new TreeNode(n));
  for (let i = 0, l = nodes.length; i < l; i++) {
    if (nodes[i] != null) {
      const left = 2 * i + 1, right = 2 * i + 2;
      nodes[i].left = left < l ? nodes[left] : null;
      nodes[i].right = right < l ? nodes[right] : null;
    }
  }
  const root = nodes[0];
  return root;
}

module.exports = buildTreeFromArray;