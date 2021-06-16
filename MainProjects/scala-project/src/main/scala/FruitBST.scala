import scala.collection.mutable.ListBuffer
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
    
    DeleteMagnifyByType(fruitType,fruitWeight,root).foreach(insert)
    
    //for (e <- DeleteMagnifyByType(fruitType,fruitWeight,root)) insert(e)
  }
  private def DeleteMagnifyByType(fruitType: String, fruitWeight: Int,nodeTree :FruitTree): ListBuffer[Fruit] = {
    var list = new ListBuffer[Fruit]();
    nodeTree match {
        case TreeNode(nodeFruit,left, right) => {
            list.addAll(DeleteMagnifyByType(fruitType,fruitWeight,left));
            list.addAll(DeleteMagnifyByType(fruitType,fruitWeight,right));
            if (nodeFruit.fruitType.equals(fruitType)){
                deleteTreeNode(nodeTree);
                nodeFruit.weight += fruitWeight;
                list.addOne(nodeFruit);
            }
        }
        case EmptyTree => {}
    }
    list;
  }
  def deleteTreeNode(treeNode:FruitTree){
    def setLeft(treeNode:FruitTree) : FruitTree = {
      treeNode match {
        case TreeNode(_,left,_) =>{
          left match {
            case TreeNode(_, _, _) => setLeft(left);
            case EmptyTree => treeNode;
          }
          
        }
        case EmptyTree => {treeNode};
      }
    }
    def Successor(treeNode:FruitTree):FruitTree = {
      treeNode match {
        case TreeNode(_,_,right)=>{
          setLeft(right);
        }
        case EmptyTree => EmptyTree
      }
    }
    treeNode match {
      case TreeNode(_,_,_) => {
        val successor:FruitTree = Successor(treeNode);
        successor match {
          case TreeNode(_,_,_) => {
            treeNode.asInstanceOf[TreeNode].nodeFruit = successor.asInstanceOf[TreeNode].nodeFruit;
            deleteNodeFromParent(successor);
          }
          case EmptyTree => {
            deleteNodeFromParent(treeNode)
          }
        }
      }
      case _ =>{}
    }
    def deleteNodeFromParent(nodeTree:FruitTree){
      val p : FruitTree = getParent(nodeTree,root);
      p match {
        case TreeNode(nodeFruit, left, _) =>{
          if (left.equals(treeNode)){
            p.asInstanceOf[TreeNode].left = EmptyTree;
          }else{
            p.asInstanceOf[TreeNode].right = EmptyTree;
          } 
        }
        case EmptyTree => {
          root match {
            case TreeNode(_, left, right) => {
              left match {
                case TreeNode(_, _, right) => {}
              }
            }
          }
        }
      }
    }
      
  }
  /*def Successor(nodeTree:FruitTree):FruitTree = {
    var temp:FruitTree= nodeTree;
    temp match {
      case TreeNode(_,_,_,right)=>{
        temp = right;
        def setLeft(){
          temp match {
            case TreeNode(_,_,left,_) =>{
              temp = left;
              setLeft();
            }
            case EmptyTree => {};
          }
        }
      }
    }
    temp;
  }*/
  def getParent(treeNode:FruitTree,root:FruitTree):FruitTree = {
    root match {
      case TreeNode(_, left, right) if(left.equals(treeNode)||right.equals(treeNode)) => {
        root;
      }
      case TreeNode(_, left, right) => {
        val t = getParent(treeNode,left);
        t match {
          case TreeNode(nodeFruit, left, right) => {t}
          case EmptyTree => {getParent(treeNode,right)}
        }
      }
      case EmptyTree => {EmptyTree}
    }
  }
  /*private def deleteNode(treeNode:FruitTree,parent:FruitTree){
        /*treeNode match {
        case TreeNode(nodeFruit,left, right) => {
          right match {
            case TreeNode(nodeFruit2, _, _) => {
              right.asInstanceOf[TreeNode].nodeFruit = nodeFruit;
              treeNode.asInstanceOf[TreeNode].nodeFruit = nodeFruit2;
              deleteNode(right,treeNode);
            }
            case EmptyTree => {
              parent match {
                case TreeNode(_, _, _) => {
                  parent.asInstanceOf[TreeNode].right = left;
                }
                case EmptyTree => {
                    root = left;
                }
              }
            }
          }
        }
      }*/
  }*/

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