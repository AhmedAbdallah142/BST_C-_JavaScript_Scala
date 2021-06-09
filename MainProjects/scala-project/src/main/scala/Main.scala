
object Main extends App {

  var fruit : FruitBST = new FruitBST();
  fruit.insert(new Apple());
  fruit.insert(new Blueberries());
  fruit.insert(new Blackberries());
  fruit.insert(new Avocado());
  fruit.insert(new Apple());
  fruit.filterByType("Apple");
  println("--------------------------------");
  fruit.magnifyByType("Avocado",200);
  fruit.filterByWeight(100);
  println("--------------------------------");
  fruit.iterate();

  /*var bst : FruitTree = new TreeNode(new Apple(),EmptyTree,EmptyTree);
  bst = bst.insert(new Blueberries());
  bst = bst.insert(new Blackberries());
  bst = bst.insert(new Avocado());
  bst = bst.insert(new Apple());
 // bst.mfilterByType("Apple");
  //bst.filterByType("Apple");
  //bst.iterate();
  //println("--------------------------------")
  //bst.filterByWeight(20);
  //println("--------------------------------")
  bst.magnifyByType("Avocado",200);
  bst.findHeaviest().iterate();
  println("--------------------------------")
  //println(bst.findLightest().iterate());
  //println("--------------------------------")
  bst.iterate();*/
  //var tr: TreeNode = new TreeNode(new Avocado(),EmptyTree,EmptyTree)
}