/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var index = 1;
var mark = function (root) {
  if (root == null) {
    return;
  }
  root.id = index++;
  mark(root.left);
  mark(root.right);
}

var sumTree = function (root) {
  if (root == null) {
    return 0;
  }
  return root.val + sumTree(root.left) + sumTree(root.right);
}


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  mark(root);

  return true;
};



module.exports = {
  checkEqualTree,
  sumTree,
};
