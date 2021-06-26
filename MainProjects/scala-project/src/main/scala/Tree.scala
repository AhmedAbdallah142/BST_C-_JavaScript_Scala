import scala.collection.mutable.ListBuffer
trait FruitTree{
    def insert(nodeFruit: Fruit) : FruitTree
    def iterate();
    def InOrder(function:FruitTree => Unit);
    def filterByType(fruitType:String);
    def filterByWeight(fruitWeight:Int);
    //def DeleteMagnifyByType(fruitType: String, fruitWeight: Int):ListBuffer[Fruit];
    def findHeaviest();
    def findLightest();
}

case object EmptyTree extends FruitTree{

  override def InOrder(function: FruitTree => Unit): Unit = {}

  override def filterByWeight(fruitWeight: Int): Unit = {}

  override def findHeaviest(): Unit = {println("Empty tree")}

  override def findLightest(): Unit = {println("Empty tree")}

  override def filterByType(fruitType: String): Unit = {}

  override def iterate(): Unit = {}

  override def insert(nodeFruit: Fruit): FruitTree = TreeNode (nodeFruit,EmptyTree,EmptyTree)
}

case class TreeNode (var nodeFruit : Fruit,var left : FruitTree , var right : FruitTree) extends FruitTree {

  override def InOrder(function: FruitTree => Unit): Unit = {
    this.left.InOrder(function);
    function(this);
    this.right.InOrder(function);
  }

  override def filterByWeight(fruitWeight: Int): Unit = {
    def filterByWeight(treeNode : FruitTree) {
        treeNode match {
          case TreeNode(data,_,right) if (data.weight < fruitWeight) => filterByWeight(right);
          case TreeNode(data,left,right) if (data.weight >= fruitWeight) => {
            filterByWeight(left);
            println("Type = "+data.fruitType +", Weight = "+ data.weight);
            filterByWeight(right);
          }
          case EmptyTree => treeNode.filterByWeight(fruitWeight);
      }
    }
    filterByWeight(this);
  }

  def printNode(treeNode:TreeNode){
    println("Type = "+treeNode.asInstanceOf[TreeNode].nodeFruit.fruitType +", Weight = "+ treeNode.asInstanceOf[TreeNode].nodeFruit.weight)
  }
  
  override def findHeaviest(){
    def findHeaviest(treeNode : FruitTree){
      treeNode match {
        case TreeNode(_, _, right) => {
          right match {
            case TreeNode(_, _, _) => findHeaviest(right);
            case EmptyTree => printNode(treeNode.asInstanceOf[TreeNode]);
          }
        }
        case EmptyTree => treeNode.findHeaviest();
      }
    }
    findHeaviest(this);
  }

  override def findLightest() {
    def findLightest(treeNode : FruitTree) {
      treeNode match {
        case TreeNode(_,left, _) => {
          left match {
            case TreeNode(_,_, _) => findLightest(left);
            case EmptyTree => printNode(treeNode.asInstanceOf[TreeNode]);
          }
        }
        case EmptyTree => treeNode.findLightest();
      }
    }
    findLightest(this);
  }


  override def filterByType(fruitType: String): Unit = {
    InOrder((treeNode:FruitTree)=>{
      if (treeNode.asInstanceOf[TreeNode].nodeFruit.fruitType.equals(fruitType))
        printNode(treeNode.asInstanceOf[TreeNode]);
    });
  }


  override def iterate(): Unit = {
    InOrder((treeNode:FruitTree)=>{
      printNode(treeNode.asInstanceOf[TreeNode]);
    });
  }


  override def insert(nodeFruit: Fruit): FruitTree = {
      def insert(t:FruitTree,nodeFruit:Fruit):FruitTree = t match {
          case TreeNode(data,left, right) if (data.weight >= nodeFruit.weight) => TreeNode(data,insert(left,nodeFruit),right);
          case TreeNode(data,left, right) if (data.weight < nodeFruit.weight) => TreeNode(data,left,insert(right,nodeFruit));
          case EmptyTree => t.insert(nodeFruit);
          case _ => t
      }
      insert(this,nodeFruit)
  }



    /*override def DeleteMagnifyByType(fruitType: String, fruitWeight: Int): ListBuffer[Fruit] = {
    var list = new ListBuffer[Fruit]();
    /*def handleMagnifiedNode(treeNode:FruitTree,parent:FruitTree) {
        treeNode match {
        case TreeNode(nodeFruit,left, right) => {
          right match {
            case TreeNode(nodeFruit2, _, _) => {
              right.asInstanceOf[TreeNode].nodeFruit = nodeFruit;
              treeNode.asInstanceOf[TreeNode].nodeFruit = nodeFruit2;
              handleMagnifiedNode(right,treeNode);
            }
            case EmptyTree => {
              parent match {
                case TreeNode(_, _, _) => {
                  parent.asInstanceOf[TreeNode].right = left;
                  //insert nodeFruit to the tree
                  //root.asInstanceOf[TreeNode] = root.insert(nodeFruit);
                }
                case EmptyTree => {}
              }
            }
          }
        }
      }
    }
    list.addAll(this.left.DeleteMagnifyByType(fruitType,fruitWeight));
    list.addAll(this.right.DeleteMagnifyByType(fruitType,fruitWeight));
    if (nodeFruit.fruitType.equals(fruitType)){
      nodeFruit.weight += fruitWeight;
      list.addOne(nodeFruit);
      handleMagnifiedNode(this,EmptyTree);
    }*/
    list;
  }*/

}