
object Main extends App {
  var bst : FruitBST = new FruitBST();
  bst.insert(new Blueberries());
  bst.insert(new Apple());
  bst.insert(new Blueberries());
  bst.insert(new Blueberries());
  bst.insert(new Blueberries());
  bst.insert(new Blueberries());
  bst.insert(new Blueberries());
  bst.insert(new Blueberries());
  bst.printBST(bst.root);
  /*var a : Fruit = new Apple();
  println(a.weight);
  a = new Blueberries();
  println(a.weight);
  a = new Blackberries();
  println(a.weight);
  a = new Avocado();
  println(a.weight);
  a = new Grapes();
  println(a.weight);*/
}