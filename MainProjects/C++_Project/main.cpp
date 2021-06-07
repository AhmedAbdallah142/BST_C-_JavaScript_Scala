#include <iostream>
using namespace std;

class Node {

  string Name;
  int weight;
  Node *left, *right;
     public:
    Node();
    Node(string S, int value);
    void setWeight(int value);
    int getWeight();
    void setName(int S);
    string getName();
    void setLeft(Node* n);
    Node* getLeft(){
        return left;
    }
    void setRight(Node* n);
    Node* getRight(){
        return right;
    }
};


Node ::Node()
    : Name("Fruit")
    , weight(100)
    , left(NULL)
    , right(NULL)
{
}


Node ::Node(string S, int value)
{
    Name = S ;
    weight = value;
    left = right = NULL;
}

void Node ::setWeight(int value)
{
   weight = value;
}

int Node::getWeight()
{
    return weight;
}

void Node ::setName(int S)
{
   Name = S ;
}

string  Node::getName()
{
    return Name;
}

void Node ::setLeft(Node* n)
{
   left = n;
}

/*Node* Node::getLeft
{
    return left;
}*/

void Node ::setRight(Node* n)
{
   right = n;
}

/*Node* Node::getRight
{
    return right;
}*/


class BST
{
    Node* root;
    public:
    BST();
    Node* getroot(){
        return root;
    }
    void setroot(Node* r){
        root=r;
    }
    Node* Insert(Node* r , Node* n);
    void  Iterate(Node* root);
};

BST ::BST()
    : root(NULL)
{
}


Node* BST ::Insert(Node* r,Node* n)
{

    if (r == NULL)
    {
        return n;
    }

    if (((*n).getWeight()) > ((*r).getWeight()))
    {
        (*r).setRight(Insert((*r).getRight(),n));
    }
    else
    {
        (*r).setLeft(Insert((*r).getLeft(),n));
    }
    return r;
}


void BST ::Iterate(Node* root)
{
    if (root == NULL) {
        return;
    }
    Iterate((*root).getLeft());
    cout << (*root).getName() <<"  "<< (*root).getWeight() << endl;
    Iterate((*root).getRight());
}

int main()
{
    BST b;
    Node n1("Mango",50);
    Node n2("Apple",30);
    Node n3("Strawberry",20);
    Node n4("peach",40);
    Node n5("Grape",70);
    Node n6("banana",60);
    Node n7("apricot",80);

    b.setroot(b.Insert(b.getroot(),&n1));
    b.Insert(b.getroot(),&n2);
    b.Insert(b.getroot(),&n3);
    b.Insert(b.getroot(),&n4);
    b.Insert(b.getroot(),&n5);
    b.Insert(b.getroot(),&n6);
    b.Insert(b.getroot(),&n7);


    b.Iterate(b.getroot());
    return 0;
}


