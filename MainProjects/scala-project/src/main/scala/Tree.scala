trait FruitTree{
    def insert(nodeFruit: Fruit) : FruitTree
    def iterate();
    def filterByType(fruitType:String);
    def mfilterByType(fruitType:String);
    def filterByWeight(fruitWeight:Int);
    def magnifyByType(fruitType:String,fruitWeight:Int)
    def findHeaviest():FruitTree;
    def findLightest():FruitTree;
}
case object EmptyTree extends FruitTree{

  override def mfilterByType(fruitType: String): Unit = ???

  override def filterByWeight(fruitWeight: Int): Unit = {}

  override def magnifyByType(fruitType: String, fruitWeight: Int): Unit = {}

  override def findHeaviest(): FruitTree = EmptyTree

  override def findLightest(): FruitTree = EmptyTree

  override def filterByType(fruitType: String): Unit = {}

  override def iterate(): Unit = {}

  override def insert(nodeFruit: Fruit): FruitTree = TreeNode (nodeFruit,EmptyTree,EmptyTree)
}

case class TreeNode (var nodeFruit : Fruit , left : FruitTree , right : FruitTree) extends FruitTree {

  override def mfilterByType(fruitType: String): Unit = ???


  override def filterByWeight(fruitWeight: Int): Unit = {
    def filterByWeight(treeNode : FruitTree) {
        treeNode match {
          case TreeNode(data,left,right) if (data.weight < fruitWeight) => filterByWeight(right);
          case TreeNode(data,left,right) if (data.weight > fruitWeight) => {
            filterByWeight(left);
            println("Type = "+data.fruitType +", Weight = "+ data.weight);
            filterByWeight(right);
          }
          case EmptyTree => {}
      }
    }
    filterByWeight(this);
  }

  override def magnifyByType(fruitType: String, fruitWeight: Int): Unit = {
    def handleMagnifiedNode(treeNode:FruitTree) {
        treeNode match {
        case TreeNode(_,_, right) => {
          right match {
            case TreeNode(nodeFruit2, _, _) => {
              right.asInstanceOf[TreeNode].nodeFruit = treeNode.asInstanceOf[TreeNode].nodeFruit;
              treeNode.asInstanceOf[TreeNode].nodeFruit = nodeFruit2;
              handleMagnifiedNode(right)
            }
            case EmptyTree => {}
          }
        }
      }
    }
    this.left.magnifyByType(fruitType,fruitWeight);
    //this.left.filterByType(fruitType);
    if (nodeFruit.fruitType.equals(fruitType)){
       nodeFruit.weight += fruitWeight;
       handleMagnifiedNode(this);
    }
    this.right.magnifyByType(fruitType,fruitWeight);
  }

  override def findHeaviest(): FruitTree = {
    def findHeaviest(treeNode : FruitTree) : FruitTree = {
      treeNode match {
        case TreeNode(_, _, right) => {
          right match {
            case TreeNode(_, _, _) => findHeaviest(right);
            case EmptyTree => treeNode;
          }
        }
        case EmptyTree => treeNode.findHeaviest();
      }
    }
    findHeaviest(this);
  }

  override def findLightest(): FruitTree = {
    def findLightest(treeNode : FruitTree) : FruitTree = {
      treeNode match {
        case TreeNode(_, left, _) => {
          left match {
            case TreeNode(_, _, _) => findLightest(left);
            case EmptyTree => treeNode;
          }
        }
        case EmptyTree => treeNode.findLightest();
      }
    }
    findLightest(this);
  }


  override def filterByType(fruitType: String): Unit = {
    this.left.filterByType(fruitType);
    if (nodeFruit.fruitType.equals(fruitType)){
      println("Type = "+nodeFruit.fruitType +", Weight = "+ nodeFruit.weight);
    }
    this.right.filterByType(fruitType);
  }


  override def iterate(): Unit = {
        this.left.iterate();
        println("Type = "+nodeFruit.fruitType +", Weight = "+ nodeFruit.weight);
        this.right.iterate();
  }


  override def insert(nodeFruit: Fruit): FruitTree = {
      def insert(t:FruitTree,nodeFruit:Fruit):FruitTree = t match {
          case TreeNode(data, left, right) if (data.weight >= nodeFruit.weight) => TreeNode(data,insert(left,nodeFruit),right);
          case TreeNode(data, left, right) if (data.weight < nodeFruit.weight) => TreeNode(data,left,insert(right,nodeFruit))
          case EmptyTree => t.insert(nodeFruit)
          case _ => t
      }
      insert(this,nodeFruit)
  }

}