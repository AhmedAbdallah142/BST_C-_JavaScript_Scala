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

var tomato = Object.create(Fruit);
tomato.setWeight(100);
tomato.setType("tomato fruit");


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

FruitBST.prototype.inorder = function(myfunction){
  function iter(bst){
    if (bst === undefined){
      return;
    }
    iter(bst.left);
    myfunction(bst);
    iter(bst.right);
  }
  iter(this);
}


FruitBST.prototype.iterate = function(){
  this.inorder(iterate2);
  function iterate2(bst){
    if (bst === undefined){
      return;
    }
    console.log(bst.value);
  }
}


FruitBST.prototype.filterbytype = function(type){
  this.inorder(filttype);
  function filttype(bst){
    if (bst === undefined){
      return;
    }
    if(bst.value.type === type){
      console.log(bst.value);
    }
  }
}


FruitBST.prototype.filterByWeight = function(weight){
  this.inorder(filtweight);
  function filtweight(bst){
    if (bst === undefined){
      return;
    }
    if(bst.value.weight === weight){
      console.log(bst.value);
    }
  }
}




FruitBST.prototype.magnifyByType = function(type , weight){
  this.inorder(magnifyByType2);
  function magnifyByType2(bst){
    if (bst === undefined){
      return;
    }
    if(bst.value.type === type){
      var newWeight = bst.value.getWeight() + weight;
      bst.value.setWeight(newWeight);
    }
  }
}



FruitBST.prototype.findHeaviest = function(){
  var node = this;
  while(node.right !== undefined){
    node = node.right;
  }
  console.log(node.value);
}



FruitBST.prototype.findLightest = function(){
  var node = this;
  while(node.left !== undefined){
    node = node.left;
  }
  console.log(node.value);
}















var bst = FruitBST(apple);
bst.insert(orange);
bst.insert(mango);
bst.insert(tomato);
//console.log(bst);
//bst.iterate();
//bst.findHeaviest();
//bst.findLightest();
//bst.filterByWeight(150);
//bst.filterbytype("mango fruit");
//bst.filterByWeight(200);
//console.log("*******");
//bst.magnifyByType("tomato fruit" , 45);
//bst.iterate();



