#include <iostream>
using namespace std;

class Fruit
{
    Fruit *left, *right;
public:
    string type;
    string shape;
    string Fsize ;
    int weight ;
    Fruit();
    void setLeft(Fruit* n)
    {
        left = n;
    }
    Fruit* getLeft()
    {
        return left;
    }
    void setRight(Fruit* n)
    {
        right = n;
    }
    Fruit* getRight()
    {
        return right;
    }
    int getWeight()
    {
        return weight;
    }
    string getType()
    {
        return type;
    }
};

Fruit ::Fruit()
    : type("Fruit")
    , weight(100)
    , left(NULL)
    , right(NULL)
{
}

class Oval_Fruit: virtual public Fruit
{
public:
    Oval_Fruit()
    {
        shape = "Oval";
    }
};
class Tiny_Fruit: virtual public Fruit
{
public:
    Tiny_Fruit()
    {
        Fsize = "Tiny";
    }
};

class Huge_Fruit: virtual public Fruit
{
public:
    Huge_Fruit()
    {
        Fsize = "Huge";
    }
};
class Unoval_Fruit: virtual public Fruit
{
public:
    Unoval_Fruit()
    {
        shape = "Unoval";
    }
};
class Berry: virtual public Fruit
{
public:
    Berry()
    {
        shape = "Berry";
    }
};

class Apple: public Huge_Fruit, public Oval_Fruit
{
public:
    Apple()
    {
        weight = 130;
        type="Apple";
    }
};
class Avocado: public Huge_Fruit, public Oval_Fruit
{
public:
    Avocado()
    {
        weight = 100;
        type="Avocado";
    }
};
class Orange: public Huge_Fruit, public Oval_Fruit
{
public:
    Orange()
    {
        weight = 110;
        type="Orange";
    }
};/*
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};
class Apple: public Huge_Fruit, public Oval_Fruit
{
};*/


class BST
{
    Fruit* root;
public:
    BST();
    Fruit* getroot()
    {
        return root;
    }
    void setroot(Fruit* r)
    {
        root=r;
    }
    virtual Fruit* Insert(Fruit* r, Fruit* n) = 0;
    virtual void  Iterate(Fruit* root) = 0;
};

BST ::BST()
    : root(NULL)
{
}

class FruitsTree : public BST
{
public:
    Fruit* Insert(Fruit* r, Fruit* n) override
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



    void  Iterate(Fruit* root) override
    {

        if (root == NULL)
        {
            return;
        }
        Iterate((*root).getLeft());
        cout << (*root).getType() <<"  "<< (*root).getWeight() << endl;
        Iterate((*root).getRight());
    }

    void filterByType(Fruit* root,string type)
    {
        if (root == NULL)
        {
            return;
        }
        filterByType((*root).getLeft(),type);
        if((*root).getType()  ==  type)
        {
            cout << (*root).getType() <<"  "<< (*root).getWeight() << endl;
        }
        filterByType((*root).getRight(),type);
    }

};

/*
Fruit* BST ::Insert(Fruit* r,Fruit* n)
{
    if (r == NULL)
    {
        cout << (*n).getType()<<endl;
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


void BST ::Iterate(Fruit* root)
{

    if (root == NULL) {
        return;
    }
    Iterate((*root).getLeft());
    cout << (*root).getType() <<"  "<< (*root).getWeight() << endl;
    Iterate((*root).getRight());
}*/

int main()
{
    FruitsTree b;
    Apple n1 ;
    Avocado n2 ;
    Orange n3 ;
    b.setroot(b.Insert(b.getroot(),&n1));
    b.Insert(b.getroot(),&n2);
    b.Insert(b.getroot(),&n3);
    cout<<"Tree"<<endl;
    b.Iterate(b.getroot());
    cout<<"Apples"<<endl;
    b.filterByType(b.getroot() , "Avocado");
    return 0;
}


