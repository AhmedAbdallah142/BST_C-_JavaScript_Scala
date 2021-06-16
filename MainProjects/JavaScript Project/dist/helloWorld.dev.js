"use strict";

var Fruit = {
  weight: 0,
  name: "name",
  type: "fruit",
  setWeight: function setWeight(weight) {
    this.weight = weight;
  },
  getWeight: function getWeight() {
    return this.weight;
  },
  setType: function setType(type) {
    this.type = type;
  },
  getType: function getType() {
    return this.type;
  },
  setName: function setName(name) {
    this.name = name;
  }
}; //////////////friuts type////////////////

var oval = {
  getshape: function getshape() {
    return "oval";
  }
};
var berry = {
  getshape: function getshape() {
    return "berry";
  }
};
var circular = {
  getshape: function getshape() {
    return "circular";
  }
};
var tiny = {
  getshape: function getshape() {
    return "tiny";
  }
};
var Medium = {
  getshape: function getshape() {
    return "Medium";
  }
};
var huge = {
  getshape: function getshape() {
    return "huge";
  }
}; //////////////////////////////////
//////////////fruits/////////////

var apple = Object.create(Fruit);
apple.setWeight(195);
apple.setType(Medium.getshape() + " " + oval.getshape());
apple.setName("apple");
var avocado = Object.create(Fruit);
avocado.setWeight(170);
avocado.setType(Medium.getshape() + " " + oval.getshape());
avocado.setName("avocado");
var Blackberries = Object.create(Fruit);
Blackberries.setWeight(2.45);
Blackberries.setType(tiny.getshape() + " " + berry.getshape());
Blackberries.setName("Blackberries");
var Elderberries = Object.create(Fruit);
Elderberries.setWeight(0.5);
Elderberries.setType(tiny.getshape() + " " + berry.getshape());
Elderberries.setName("Elderberries");
var Gooseberries = Object.create(Fruit);
Gooseberries.setWeight(1);
Gooseberries.setType(tiny.getshape() + " " + berry.getshape());
Gooseberries.setName("Gooseberries");
var Cranberries = Object.create(Fruit);
Cranberries.setWeight(1.5);
Cranberries.setType(tiny.getshape() + " " + berry.getshape());
Cranberries.setName("Cranberries");
var Blueberries = Object.create(Fruit);
Blueberries.setWeight(0.5);
Blueberries.setType(tiny.getshape() + " " + berry.getshape());
Blueberries.setName("Blueberries");
var Grapes = Object.create(Fruit);
Grapes.setWeight(5);
Grapes.setType(tiny.getshape() + " " + circular.getshape());
Grapes.setName("Grapes");
var Banana = Object.create(Fruit);
Banana.setWeight(120);
Banana.setType(Medium.getshape());
Banana.setName("Banana");
var Figs = Object.create(Fruit);
Figs.setWeight(50);
Figs.setType(Medium.getshape() + " " + oval.getshape());
Figs.setName("Figs");
var orange = Object.create(Fruit);
orange.setWeight(130);
orange.setType(Medium.getshape() + " " + circular.getshape());
orange.setName("orange");
var Apricots = Object.create(Fruit);
Apricots.setWeight(35);
Apricots.setType(tiny.getshape() + " " + circular.getshape());
Apricots.setName("Apricots");
var Pineapple = Object.create(Fruit);
Pineapple.setWeight(1590);
Pineapple.setType(huge.getshape() + " " + oval.getshape());
Pineapple.setName("Pineapple");
var Peaches = Object.create(Fruit);
Peaches.setWeight(150);
Peaches.setType(Medium.getshape() + " " + circular.getshape());
Peaches.setName("Peaches");
var Pear = Object.create(Fruit);
Pear.setWeight(180);
Pear.setType(Medium.getshape() + " " + oval.getshape());
Pear.setName("Pear");
var Strawberries = Object.create(Fruit);
Strawberries.setWeight(12);
Strawberries.setType(tiny.getshape() + " " + oval.getshape());
Strawberries.setName("Strawberries");
var Watermelon = Object.create(Fruit);
Watermelon.setWeight(9000);
Watermelon.setType(huge.getshape() + " " + circular.getshape());
Watermelon.setName("Watermelon");
var Guava = Object.create(Fruit);
Guava.setWeight(200);
Guava.setType(Medium.getshape() + " " + oval.getshape());
Guava.setName("Guava");
var Mango = Object.create(Fruit);
Mango.setWeight(200);
Mango.setType(Medium.getshape() + " " + oval.getshape());
Mango.setName("Mango");
var Cantaloupe = Object.create(Fruit);
Cantaloupe.setWeight(2750);
Cantaloupe.setType(huge.getshape() + " " + oval.getshape());
Cantaloupe.setName("Cantaloupe"); /////////////////////////////////////////////
////////////binary search tree//////////////

var FruitBST = function FruitBST(value) {
  var root = Object.create(FruitBST.prototype);
  root.value = value;
  root.left = undefined;
  root.right = undefined;
  return root;
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

    console.log(bst.value);
  }
};

FruitBST.prototype.filterbytype = function (type) {
  this.inorder(filttype);

  function filttype(bst) {
    if (bst === undefined) {
      return;
    }

    if (bst.value.type.includes(type)) {
      console.log(bst.value);
    }
  }
};

FruitBST.prototype.filterByWeight = function (weight) {
  this.inorder(filtweight);

  function filtweight(bst) {
    if (bst === undefined) {
      return;
    }

    if (bst.value.weight === weight) {
      console.log(bst.value);
    }
  }
};

FruitBST.prototype.magnifyByType = function (type, weight) {
  var list = [];
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

  console.log(node.value);
};

FruitBST.prototype.findLightest = function () {
  var node = this;

  while (node.left !== undefined) {
    node = node.left;
  }

  console.log(node.value);
}; //////////////////testing//////////////////////


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
bst.iterate(); //bst.findHeaviest();
//bst.findLightest();
//bst.filterByWeight(150);
//bst.filterbytype("mango fruit");
//bst.filterByWeight(200);
//console.log("*******");
//var newbst1 = bst.magnifyByType("oval" , 145);
//console.log("*******");
//newbst1.iterate();