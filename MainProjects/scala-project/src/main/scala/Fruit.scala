trait Fruit{
  var weight :Int = 0;
} 
trait Tiny_Fruit extends Fruit{

} 
trait Oval_Shaped extends Fruit{

}
trait Berry extends Tiny_Fruit{

}
class Grapes extends Tiny_Fruit{
  this.weight = 140; //21 grapes
}
class Apple extends Oval_Shaped{
  this.weight = 150;
}
class Avocado extends Oval_Shaped{
   this.weight = 130;
}
class Blackberries extends Berry{
  
}
class Elderberries extends Berry{
   this.weight = 77;
}
class Gooseberries extends Berry{
  
}
class Blueberries extends Berry{
   this.weight = 80;
}