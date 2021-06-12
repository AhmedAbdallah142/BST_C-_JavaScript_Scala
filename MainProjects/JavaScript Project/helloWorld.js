var Fruit = {
  weight : 0,
  type : "fruit" , 
  setWeight : function(weight) {this.weight = weight;},
  getWeight : function(){return this.weight;},
  setType : function(type){this.type = type;},
  getType : function(){return this.type;}
}

var apple = Object.create(Fruit);
apple.setWeight(180);
apple.setType("apple fruit");

var orange = Object.create(Fruit);
orange.setWeight(150);
orange.setType("orange fruit");


var mango = Object.create(Fruit);
mango.setWeight(200);
mango.setType("mango fruit");


var FruitBST = function(value) {
  var root = Object.create(FruitBST.prototype);
  root.value = value;
  root.left = undefined;
  root.right = undefined;
  return root
};

FruitBST.prototype.insert = function(value){
  var node = FruitBST(value);

  function findplace(bst){
    if(bst.value.weight > value.weight && bst.left === undefined){
      bst.left = node;
    }
    else if (bst.value.weight > value.weight){
      findplace(bst.left);
    }
    else if (bst.value.weight < value.weight && bst.right === undefined){
      bst.right = node;
    }
    else if (bst.value.weight <value.weight){
      findplace(bst.right);
    }
  }
  findplace(this);
}

var bst = FruitBST(apple);
bst.insert(orange);
bst.insert(mango);
console.log(bst);


