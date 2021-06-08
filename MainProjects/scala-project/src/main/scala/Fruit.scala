trait Fruit{
  var weight :Int = 0;
  var fruitType: String = "Fruit";
} 
trait Tiny_Fruit extends Fruit{

} 
trait Oval_Shaped extends Fruit{

}
trait Berry extends Tiny_Fruit{

}
class Grapes extends Tiny_Fruit{

  this.weight = 140;//21 grapes
  this.fruitType = "Grapes";
}
class Apple extends Oval_Shaped{

  this.weight = 150;
  this.fruitType = "Apple"
}
class Avocado extends Oval_Shaped{

  this.weight = 130;
  this.fruitType= "Avocado"
}
class Blackberries extends Berry{

  this.fruitType = "Blackberries";

}

class Elderberries extends Berry{

  this.weight = 77;
  this.fruitType = "Elderberries"

}
class Gooseberries extends Berry{
  this.fruitType = "Gooseberries"
}
class Blueberries extends Berry{

  this.weight= 80;
  this.fruitType = "Blueberries"
}