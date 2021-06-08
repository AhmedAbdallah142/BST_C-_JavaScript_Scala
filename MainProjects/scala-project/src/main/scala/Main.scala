
object Main extends App {
  var bst : FruitTree = new TreeNode(new Avocado(),EmptyTree,EmptyTree);
  bst = bst.insert(new Blueberries());
  bst = bst.insert(new Blackberries());
  bst = bst.insert(new Apple());
  bst = bst.insert(new Apple());
  bst.mfilterByType("Apple");
  /*bst.filterByType("Apple");
  println("--------------------------------")
  bst.filterByWeight(20);
  println("--------------------------------")
  bst.magnifyByType("Avocado",200);
  println(bst.findHeaviest().iterate());
  println("--------------------------------")
  println(bst.findLightest().iterate());
  println("--------------------------------")
  bst.iterate();*/
  //var tr: TreeNode = new TreeNode(new Avocado(),EmptyTree,EmptyTree)
}