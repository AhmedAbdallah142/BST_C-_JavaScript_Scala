var Fruit = {
  weight: 0,
  name: "name",
  type: "fruit",
  setWeight: function (weight) {
    this.weight = weight;
  },
  getWeight: function () {
    return this.weight;
  },
  setType: function (type) {
    this.type = type;
  },
  getType: function () {
    return this.type;
  },
  setName: function () {
    this.name = "fruit";
  },
};
//////////////friuts type////////////////
var oval = {
  getshape: function () {
    return "oval";
  },
};

var berry = {
  getshape: function () {
    return "berry";
  },
};

var circular = {
  getshape: function () {
    return "circular";
  },
};

var tiny = {
  getshape: function () {
    return "tiny";
  },
};

var Medium = {
  getshape: function () {
    return "Medium";
  },
};

var huge = {
  getshape: function () {
    return "huge";
  },
};

//////////////////////////////////

//////////////fruits/////////////

var apple = Object.create(Fruit);
apple.setWeight(195);
apple.setType(Medium.getshape() + " " + oval.getshape());
(apple.setName = function () {
  this.name = "apple";
}),
  apple.setName();

var avocado = Object.create(Fruit);
avocado.setWeight(170);
avocado.setType(Medium.getshape() + " " + oval.getshape());
(avocado.setName = function () {
  this.name = "avocado";
}),
avocado.setName();

var Blackberries = Object.create(Fruit);
Blackberries.setWeight(2.45);
Blackberries.setType(tiny.getshape() + " " + berry.getshape());
(Blackberries.setName = function () {
  this.name = "Blackberries";
}),
Blackberries.setName();

var Elderberries = Object.create(Fruit);
Elderberries.setWeight(0.5);
Elderberries.setType(tiny.getshape() + " " + berry.getshape());
(Elderberries.setName = function () {
  this.name = "Elderberries";
}),
Elderberries.setName();

var Gooseberries = Object.create(Fruit);
Gooseberries.setWeight(2.3);
Gooseberries.setType(tiny.getshape() + " " + berry.getshape());
(Gooseberries.setName = function () {
  this.name = "Gooseberries";
}),
Gooseberries.setName();

var Cranberries = Object.create(Fruit);
Cranberries.setWeight(1.7);
Cranberries.setType(tiny.getshape() + " " + berry.getshape());
(Cranberries.setName = function () {
  this.name = "Cranberries";
}),
Cranberries.setName();

var Blueberries = Object.create(Fruit);
Blueberries.setWeight(0.5);
Blueberries.setType(tiny.getshape() + " " + berry.getshape());
(Blueberries.setName = function () {
  this.name = "Blueberries";
}),
Blueberries.setName();

var Grapes = Object.create(Fruit);
Grapes.setWeight(5);
Grapes.setType(tiny.getshape() + " " + circular.getshape());
(Grapes.setName = function () {
  this.name = "Grapes";
}),
Grapes.setName();

var Banana = Object.create(Fruit);
Banana.setWeight(120);
Banana.setType(Medium.getshape());
(Banana.setName = function () {
  this.name = "Banana";
}),
Banana.setName();

var Figs = Object.create(Fruit);
Figs.setWeight(50);
Figs.setType(Medium.getshape() + " " + oval.getshape());
(Figs.setName = function () {
  this.name = "Figs";
}),
Figs.setName();

var orange = Object.create(Fruit);
orange.setWeight(130);
orange.setType(Medium.getshape() + " " + circular.getshape());
(orange.setName = function () {
  this.name = "orange";
}),
orange.setName();

var Apricots = Object.create(Fruit);
Apricots.setWeight(35);
Apricots.setType(tiny.getshape() + " " + circular.getshape());
(Apricots.setName = function () {
  this.name = "Apricots";
}),
Apricots.setName();

var Pineapple = Object.create(Fruit);
Pineapple.setWeight(1590);
Pineapple.setType(huge.getshape() + " " + oval.getshape());
(Pineapple.setName = function () {
  this.name = "Pineapple";
}),
Pineapple.setName();

var Peaches = Object.create(Fruit);
Peaches.setWeight(150);
Peaches.setType(Medium.getshape() + " " + circular.getshape());
(Peaches.setName = function () {
  this.name = "Peaches";
}),
Peaches.setName();

var Pear = Object.create(Fruit);
Pear.setWeight(180);
(Pear.setName = function () {
  this.name = "Pear";
}),
Pear.setName();

var Strawberries = Object.create(Fruit);
Strawberries.setWeight(12);
Strawberries.setType(tiny.getshape() + " " + oval.getshape());
(Strawberries.setName = function () {
  this.name = "Strawberries";
}),
Strawberries.setName();

var Watermelon = Object.create(Fruit);
Watermelon.setWeight(9000);
Watermelon.setType(huge.getshape() + " " + circular.getshape());
(Watermelon.setName = function () {
  this.name = "Watermelon";
}),
Watermelon.setName();

var Guava = Object.create(Fruit);
Guava.setWeight(200);
Guava.setType(Medium.getshape() + " " + oval.getshape());
(Guava.setName = function () {
  this.name = "Guava";
}),
Guava.setName();

var Mango = Object.create(Fruit);
Mango.setWeight(200);
Mango.setType(Medium.getshape() + " " + oval.getshape());
(Mango.setName = function () {
  this.name = "Mango";
}),
Mango.setName();

var Cantaloupe = Object.create(Fruit);
Cantaloupe.setWeight(2750);
Cantaloupe.setType(huge.getshape() + " " + oval.getshape());
(Cantaloupe.setName = function () {
  this.name = "Cantaloupe";
}),
Cantaloupe.setName();

/////////////////////////////////////////////

////////////binary search tree//////////////

var FruitBST = function (value) {
  var root = Object.create(FruitBST.prototype);
  root.value = value;
  root.left = undefined;
  root.right = undefined;
  return root;
};

FruitBST.prototype.display = function(n){
  console.log("name:" + n.value.name + "  type:" + n.value.getType() + "  weight: " + n.value.getWeight());
};

FruitBST.prototype.insert = function (value) {
  var node = FruitBST(value);

  function findplace(bst) {
    if (bst.value.weight > value.weight && bst.left === undefined) {
      bst.left = node;
    } else if (bst.value.weight > value.weight) {
      findplace(bst.left);
    } else if (bst.value.weight < value.weight && bst.right === undefined) {
      bst.right = node;
    } else if (bst.value.weight < value.weight) {
      findplace(bst.right);
    }
  }
  findplace(this);
};

FruitBST.prototype.inorder = function (myfunction) {
  function iter(bst) {
    if (bst === undefined) {
      return;
    }
    iter(bst.left);
    myfunction(bst);
    iter(bst.right);
  }
  iter(this);
};

FruitBST.prototype.iterate = function () {
  this.inorder(iterate2);
  function iterate2(bst) {
    if (bst === undefined) {
      return;
    }
    FruitBST.prototype.display(bst);
  }
};

FruitBST.prototype.filterbytype = function (type) {
  this.inorder(filttype);
  function filttype(bst) {
    if (bst === undefined) {
      return;
    }
    if (bst.value.type.includes(type)) {
      FruitBST.prototype.display(bst);
    }
  }
};

FruitBST.prototype.filterByWeight = function (weight) {
  this.inorder(filtweight);
  function filtweight(bst) {
    if (bst === undefined) {
      return;
    }
    if (bst.value.weight > weight) {
      FruitBST.prototype.display(bst);
    }
  }
};

FruitBST.prototype.magnifyByType = function (type, weight) {
  const list = [];
  this.inorder(magnifyByType2);
  function magnifyByType2(bst) {
    if (bst === undefined) {
      return;
    }
    if (bst.value.type.includes(type)) {
      var newWeight = bst.value.getWeight() + weight;
      bst.value.setWeight(newWeight);
    }
    list.push(bst.value);
  }
  var newbst = FruitBST(list[0]);
  for (i = 1; i < list.length; i++) {
    newbst.insert(list[i]);
  }
  return newbst;
};

FruitBST.prototype.findHeaviest = function () {
  var node = this;
  while (node.right !== undefined) {
    node = node.right;
  }
  FruitBST.prototype.display(node);
};

FruitBST.prototype.findLightest = function () {
  var node = this;
  while (node.left !== undefined) {
    node = node.left;
  }
  FruitBST.prototype.display(node);
};

//////////////////testing//////////////////////

var bst = FruitBST(apple);
bst.insert(orange);
bst.insert(Figs);
bst.insert(Pear);
bst.insert(Peaches);
bst.insert(Mango);
bst.insert(Guava);
bst.insert(Grapes);
bst.insert(Blackberries);
bst.insert(Banana);
bst.insert(Blueberries);
bst.insert(Watermelon);


