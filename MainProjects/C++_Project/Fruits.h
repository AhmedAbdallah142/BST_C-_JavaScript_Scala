#ifndef FRUITS_H_INCLUDED
#define FRUITS_H_INCLUDED
#include <iostream>
#include <bits/stdc++.h>

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


#endif // FRUITS_H_INCLUDED
