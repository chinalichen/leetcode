/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// var index = 1;
// var mark = function (root) {
//   if (root == null) {
//     return;
//   }
//   root.id = index++;
//   mark(root.left);
//   mark(root.right);
// };

var sumTree = function (root) {
  if (root == null) {
    return 0;
  }
  return root.val + sumTree(root.left) + sumTree(root.right);
};

var partition = function (root, half) {

  function dfs_ldr(node) {
    if (node.left) {
      if (sumTree(node.left) === half) {
        return true;
      } else {
        dfs_ldr(node.left);
      }
    }

    if (node.right) {
      if (sumTree(node.right) === half) {
        return true;
      } else {
        dfs_ldr(node.right);
      }
    }
  }

  const result = dfs_ldr(root);
  return !!result;
};


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var checkEqualTree = function (root) {
  const sum = sumTree(root);
  if (sum % 2 !== 0) {
    // console.log('False');
    return false;
  }

  // mark(root);

  const result = partition(root, sum / 2);

  if (result) {
    // console.log('True');
    return true;
  } else {
    // console.log('False');
    return false;
  }
};

module.exports = {
  checkEqualTree,
  sumTree,
};
