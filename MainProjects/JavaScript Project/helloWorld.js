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
(apple.setName = function () {
  this.name = "apple";
}),
  apple.setName();
apple.setType(Medium.getshape() + " " + oval.getshape() + " " + apple.name);

var avocado = Object.create(Fruit);
avocado.setWeight(170);
(avocado.setName = function () {
  this.name = "avocado";
}),
  avocado.setName();
avocado.setType(Medium.getshape() + " " + oval.getshape() + " " + avocado.name);

var Blackberries = Object.create(Fruit);
Blackberries.setWeight(2.45);
(Blackberries.setName = function () {
  this.name = "Blackberries";
}),
  Blackberries.setName();
Blackberries.setType(
  tiny.getshape() + " " + berry.getshape() + " " + Blackberries.name
);

var Elderberries = Object.create(Fruit);
Elderberries.setWeight(0.5);
(Elderberries.setName = function () {
  this.name = "Elderberries";
}),
  Elderberries.setName();
Elderberries.setType(
  tiny.getshape() + " " + berry.getshape() + " " + Elderberries.name
);

var Gooseberries = Object.create(Fruit);
Gooseberries.setWeight(2.3);
(Gooseberries.setName = function () {
  this.name = "Gooseberries";
}),
  Gooseberries.setName();
Gooseberries.setType(
  tiny.getshape() + " " + berry.getshape() + " " + Gooseberries.name
);

var Cranberries = Object.create(Fruit);
Cranberries.setWeight(1.7);
(Cranberries.setName = function () {
  this.name = "Cranberries";
}),
  Cranberries.setName();
Cranberries.setType(
  tiny.getshape() + " " + berry.getshape() + " " + Cranberries.name
);

var Blueberries = Object.create(Fruit);
Blueberries.setWeight(0.5);
(Blueberries.setName = function () {
  this.name = "Blueberries";
}),
  Blueberries.setName();
Blueberries.setType(
  tiny.getshape() + " " + berry.getshape() + " " + Blueberries.name
);

var Grapes = Object.create(Fruit);
Grapes.setWeight(5);
(Grapes.setName = function () {
  this.name = "Grapes";
}),
  Grapes.setName();

Grapes.setType(tiny.getshape() + " " + circular.getshape() + " " + Grapes.name);

var Banana = Object.create(Fruit);
Banana.setWeight(120);
(Banana.setName = function () {
  this.name = "Banana";
}),
  Banana.setName();
Banana.setType(Medium.getshape() + " " + Banana.name);

var Figs = Object.create(Fruit);
Figs.setWeight(50);
(Figs.setName = function () {
  this.name = "Figs";
}),
  Figs.setName();
Figs.setType(Medium.getshape() + " " + oval.getshape() + " " + Figs.name);

var orange = Object.create(Fruit);
orange.setWeight(130);
(orange.setName = function () {
  this.name = "orange";
}),
  orange.setName();
orange.setType(
  Medium.getshape() + " " + circular.getshape() + " " + orange.name
);

var Apricots = Object.create(Fruit);
Apricots.setWeight(35);
(Apricots.setName = function () {
  this.name = "Apricots";
}),
  Apricots.setName();
Apricots.setType(
  tiny.getshape() + " " + circular.getshape() + " " + Apricots.name
);

var Pineapple = Object.create(Fruit);
Pineapple.setWeight(1590);
(Pineapple.setName = function () {
  this.name = "Pineapple";
}),
  Pineapple.setName();
Pineapple.setType(
  huge.getshape() + " " + oval.getshape() + " " + Pineapple.name
);

var Peaches = Object.create(Fruit);
Peaches.setWeight(150);
(Peaches.setName = function () {
  this.name = "Peaches";
}),
  Peaches.setName();
Peaches.setType(
  Medium.getshape() + " " + circular.getshape() + " " + Peaches.name
);

var Pear = Object.create(Fruit);
Pear.setWeight(180);
(Pear.setName = function () {
  this.name = "Pear";
}),
  Pear.setName();
Pear.setType(Medium.getshape() + " " + oval.getshape() + " " + Pear.name);

var Strawberries = Object.create(Fruit);
Strawberries.setWeight(12);
(Strawberries.setName = function () {
  this.name = "Strawberries";
}),
  Strawberries.setName();
Strawberries.setType(
  tiny.getshape() + " " + oval.getshape() + " " + Strawberries.name
);

var Watermelon = Object.create(Fruit);
Watermelon.setWeight(9000);
(Watermelon.setName = function () {
  this.name = "Watermelon";
}),
  Watermelon.setName();
Watermelon.setType(
  huge.getshape() + " " + circular.getshape() + " " + Watermelon.name
);

var Guava = Object.create(Fruit);
Guava.setWeight(200);
(Guava.setName = function () {
  this.name = "Guava";
}),
  Guava.setName();
Guava.setType(Medium.getshape() + " " + oval.getshape() + " " + Guava.name);

var Mango = Object.create(Fruit);
Mango.setWeight(200);
(Mango.setName = function () {
  this.name = "Mango";
}),
  Mango.setName();
Mango.setType(Medium.getshape() + " " + oval.getshape() + " " + Mango.name);

var Cantaloupe = Object.create(Fruit);
Cantaloupe.setWeight(2750);
(Cantaloupe.setName = function () {
  this.name = "Cantaloupe";
}),
  Cantaloupe.setName();
Cantaloupe.setType(
  huge.getshape() + " " + oval.getshape() + " " + Cantaloupe.name
);

/////////////////////////////////////////////

////////////binary search tree//////////////

var FruitBST = function (value) {
  var root = Object.create(FruitBST.prototype);
  root.value = value;
  root.left = undefined;
  root.right = undefined;
  return root;
};

FruitBST.prototype.display = function (n) {
  console.log(
    "name:" +
      n.value.name +
      "  type:" +
      n.value.getType() +
      "  weight: " +
      n.value.getWeight()
  );
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
bst.iterate();
