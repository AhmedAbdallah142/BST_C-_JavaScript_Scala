var TreeFruit = function(weight , fruit){
    var node = Object.create(TreeFruit.prototype)
        node.weight = weight;
        node.fruit = fruit;
        node.right = undefined;
        node.left = undefined;
    return node 
};

TreeFruit.prototype.insert = function(weight , fruit){
    var temp = TreeFruit(weight , fruit);
    function recurse(bst) {
         if (bst.weight > weight && bst.left === undefined) {
          bst.left = temp;
        } else if (bst.weight > weight) {
          recurse(bst.left);
        } else if (bst.weight < weight && bst.right === undefined) {
          bst.right = temp;
        } else if (bst.weight < weight) {
          recurse(bst.right);
        }
      }
      recurse(this);
}

var a = Object.create(TreeFruit);
a.prototype.insert(15,2);
console.log(a.prototype.weight);


