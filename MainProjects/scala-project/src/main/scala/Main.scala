class Fruit{
  var weight :Int = 0;
} 
class Tiny_Fruit extends Fruit{

} 
class Oval_Shaped extends Fruit{

}
class Berry extends Tiny_Fruit{

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

object Main extends App {
  var a : Fruit = new Apple();
  println(a.weight);
  a = new Blueberries();
  println(a.weight);
  a = new Berry();
  println(a.weight);
  a = new Avocado();
  println(a.weight);
  a = new Grapes();
  println(a.weight);
}