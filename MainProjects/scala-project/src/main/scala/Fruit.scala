trait Fruit{
  var weight :Double
  var fruitType :String 
} 
trait Tiny_Fruit extends Fruit{}

trait Medium_Fruit extends Fruit{}

trait Huge_Fruit extends Fruit{}

trait Oval_Shaped extends Fruit{}

trait Circular_Shaped extends Fruit{}

trait Berry extends Tiny_Fruit{}

class Apple extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 195
  override var fruitType: String = "Apple"
}
class Avocado extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 170
  override var fruitType: String = "Avocado"
}
class Blackberries extends Tiny_Fruit with Berry{
  override var weight: Double = 2.45
  override var fruitType: String = "Blackberries"
}
class Elderberries extends Tiny_Fruit with Berry{
  override var weight: Double = 0.5
  override var fruitType: String = "Elderberries"
}
class Gooseberries extends Tiny_Fruit with Berry{
  override var weight: Double = 2.3
  override var fruitType: String = "Gooseberries"
}
class Cranberries extends Tiny_Fruit with Berry{
  override var weight: Double = 1.7
  override var fruitType: String = "Cranberries"
}
class Blueberries extends Tiny_Fruit with Berry{
  override var weight: Double = 0.5
  override var fruitType: String = "Blueberries"
}
class Grapes extends Tiny_Fruit with Circular_Shaped{
  override var weight: Double = 5
  override var fruitType: String = "Grapes"
}
class Banana extends Medium_Fruit{
  override var weight: Double = 120
  override var fruitType: String = "Banana"
}
class Figs extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 50
  override var fruitType: String = "Figs"
}
class Orange extends Medium_Fruit with Circular_Shaped{
  override var weight: Double = 130
  override var fruitType: String = "Orange"
}
class Apricot extends Tiny_Fruit with Circular_Shaped{
  override var weight: Double = 35
  override var fruitType: String = "Apricot"
}
class Pineapple extends Huge_Fruit with Oval_Shaped{
  override var weight: Double = 1590
  override var fruitType: String = "Pineapple"
}
class Peaches extends Medium_Fruit with Circular_Shaped{
  override var weight: Double = 150
  override var fruitType: String = "Peaches"
}
class Pear extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 180
  override var fruitType: String = "Pear"
}
class Strawberries extends Tiny_Fruit with Oval_Shaped{
  override var weight: Double = 12
  override var fruitType: String = "Strawberries"
}
class Watermelon extends Huge_Fruit with Circular_Shaped{
  override var weight: Double = 9000
  override var fruitType: String = "Watermelon"
}
class Guava extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 200
  override var fruitType: String = "Guava"
}
class Mango extends Medium_Fruit with Oval_Shaped{
  override var weight: Double = 200
  override var fruitType: String = "Mango"
}
class Cantaloupe extends Huge_Fruit with Oval_Shaped{
  override var weight: Double = 2750
  override var fruitType: String = "Cantaloupe"
}