class FruitBST {
  var root:FruitTree = EmptyTree;

   def insert(nodeFruit: Fruit) = {
    root = root.insert(nodeFruit);
  }

  def iterate(){
    root.iterate();
  }

  def filterByType(fruitType: String){
    root.filterByType(fruitType);
  }

  def filterByWeight(fruitWeight: Int){
    root.filterByWeight(fruitWeight);
  }

  def magnifyByType(fruitType: String, fruitWeight: Int){
    for (e <- root.DeleteMagnifyByType(fruitType,fruitWeight)) insert(e);
  }

  def findHeaviest(): FruitTree = {
    root.findHeaviest();
  }

  def findLightest(): FruitTree = {
    root.findLightest();
  }

}


/*class FruitBST () {
    var root : Node = null;
    def insert( NodeFruit : Fruit ){
        if (root == null){
            root = new Node(NodeFruit);
        }else{
            var temp : Node = root;
            var check : Boolean = true
            while (check){
                if (temp.element.weight < NodeFruit.weight){
                    if (temp.RightNode == null){
                        temp.RightNode = new Node(NodeFruit);
                        check = false;
                    }
                    else
                        temp = temp.RightNode;
                }
                else{
                    if (temp.LeftNode == null){
                        temp.LeftNode = new Node(NodeFruit);
                        check = false;
                    }
                    else
                        temp = temp.LeftNode;
                }
            }
        }
    }*/
    /*def delete(NodeFruit : Fruit):(Boolean)={
        var temp:Node = root;
        var parent:Node = null;
        while (temp!=null){
            if (temp.element.weight < NodeFruit.weight){
                temp = temp.RightNode;
            }else if (temp.element.weight > NodeFruit.weight){
                temp = temp.LeftNode;
            }
            else{
                if (temp.RightNode != null){

                }
                else {

                }

            }

        }
        return false;
    }*/
   /* def printBST(temp : Node){
        if (temp!=null){
            printBST(temp.LeftNode);
            printBST(temp.RightNode);
            println(temp.element.weight);
        }
    }
}
class Node(NodeFruit : Fruit){
    var element : Fruit = NodeFruit;
    var RightNode : Node = null;
    var LeftNode : Node = null;
}*/