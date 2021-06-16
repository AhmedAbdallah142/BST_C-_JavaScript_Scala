
#include "Fruits.h"

//using namespace std;



class BST
{

public:
    Fruit* root;
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
    virtual Fruit* deleteNode(Fruit* parent , Fruit* root, Fruit* deleted ) = 0;
};

BST ::BST()
    : root(NULL)
{
}

class FruitsTree : public BST
{
public:
    vector<Fruit*> deleteAndInsert ;
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

    void filterByWeight(Fruit* root,int weight)
    {
        if (root == NULL)
        {
            return;
        }
        filterByWeight((*root).getLeft(),weight);
        if((*root).getWeight()  >=  weight)
        {
            cout << (*root).getType() <<"  "<< (*root).getWeight() << endl;
        }
        filterByWeight((*root).getRight(),weight);
    }

    Fruit* findHeaviest(Fruit* root){
            while (root != NULL && (*root).getRight() != NULL)
            {

                root = ( (*root).getRight() );

            }

    cout <<"The Heaviest :-    " << (*root).getType() <<"  "<< (*root).getWeight() << endl;
    return root;
    }


    Fruit* findLightest(Fruit* root){
            while (root != NULL && (*root).getLeft() != NULL)
            {

                //cout<<(*(*root).getLeft()).getType()<<endl;
                root = (*root).getLeft() ;

            }

    cout <<"The Lightest :-    " << (*root).getType() <<"  "<< (*root).getWeight() << endl;
    return root;
    }


    Fruit* deleteNode(Fruit* parent , Fruit* root, Fruit* deleted ) override
    {
        if (root == NULL)
            return root;

        if (((*deleted).getWeight()) < ((*root).getWeight())){
                parent = root ;
                (*root).setLeft(deleteNode( parent , (*root).getLeft() , deleted ));
        }
        else if (((*deleted).getWeight()) > ((*root).getWeight())){
                 parent = root ;
                (*root).setRight(deleteNode( parent , (*root).getRight() , deleted ));
        }
        else {
            if(root == deleted){
                if ((*root).getRight() == NULL && (*root).getLeft() == NULL){
                    return NULL;
                }
                else if ( (*root).getLeft() == NULL ) {
                    Fruit* temp = (*root).getRight();
                    return temp;
                }
                else if ((*root).getRight() == NULL) {
                    Fruit* temp = (*root).getLeft();
                    return temp;
                }
                Fruit* temp = deleteMinValue( root , (*root).getRight() );
                if(parent != NULL){
                if(((*root).getWeight()) > ((*parent).getWeight())){
                    (*parent).setRight(temp);
                }else{
                    (*parent).setLeft(temp);
                }
                (*temp).setRight( (*root).getRight() );
                (*temp).setLeft ( (*root).getLeft() );
                }else{
                    (*temp).setRight( (*root).getRight() );
                    (*temp).setLeft ( (*root).getLeft() );
                    root = temp;

                }
            }
            else{
                    parent = root ;
                (*root).setLeft( deleteNode(parent , (*root).getLeft() , deleted ));
            }
        }
        return root;
    }

    Fruit* deleteMinValue(Fruit* parent , Fruit* root)
    {
     while (root != NULL && (*root).getLeft() != NULL)
            {
                parent = root ;
                root = (*root).getLeft() ;
            }
            (*parent).setLeft(NULL);
            return root;
    }
    void deletedMagnify(Fruit* r,string Type,int Weight)
    {
       if (r == NULL)
        {
            return;
        }
        deletedMagnify((*r).getLeft(),Type , Weight);
        if((*r).getType()  ==  Type)
        {
            root=deleteNode(NULL,root,r);
            (*r).setLeft(NULL);
            (*r).setRight(NULL);
            (*r).weight+=Weight;
            //Insert(root,r);
            deleteAndInsert.push_back(r);
        }
        deletedMagnify((*r).getRight(),Type,Weight);
    }

    void insertMagnify(){
        for(int i = 0 ; i < deleteAndInsert.size() ; i++ ){
            Insert(root,deleteAndInsert[i]);
        }
        deleteAndInsert.clear();
    }


    void magnifyByType(Fruit* r,string Type,int Weight)
    {
        deletedMagnify(r,Type,Weight);
        insertMagnify();
    }

    };



int main()
{
    FruitsTree b;
    Apple n1 ;
    n1.weight=20;
    Avocado n2 ;
    n2.weight=10;
    Orange n3 ;
    n3.weight=30;
   // Apple n4 ;
    Avocado n5 ;
    n5.weight=5;
    Orange n6 ;
    n6.weight=15;
    //Apple n7 ;
    Avocado n8 ;
    n8.weight=25;
    Orange n9 ;
    n9.weight=35;
    b.setroot(b.Insert(b.getroot(),&n1));
    b.Insert(b.getroot(),&n2);
    b.Insert(b.getroot(),&n3);
  //  b.Insert(b.getroot(),&n4);
    b.Insert(b.getroot(),&n5);
    b.Insert(b.getroot(),&n6);
   // b.Insert(b.getroot(),&n7);
    b.Insert(b.getroot(),&n8);
    b.Insert(b.getroot(),&n9);
    cout<<"Tree"<<endl;
    b.Iterate(b.getroot());
    cout<<"Avocado"<<endl;
    b.filterByType(b.getroot() , "Avocado");
    cout<<"90"<<endl;
    b.filterByWeight(b.getroot() , 90);
    cout<<""<<endl;
    b.findHeaviest(b.getroot() );
    cout<<""<<endl;
    b.findLightest(b.getroot() );
    cout<<"Tree"<<endl;
    b.setroot(b.deleteNode(NULL, b.getroot() , &n1 ));
    b.Iterate(b.getroot());
    /*b.magnifyByType(b.getroot() , "Apple" , 200);
    b.Iterate(b.getroot());
    cout<<"Avocado"<<endl;
    b.filterByType(b.getroot() , "Avocado");
    cout<<"90"<<endl;
    b.filterByWeight(b.getroot() , 90);
    cout<<""<<endl;
    b.findHeaviest(b.getroot() );
    cout<<""<<endl;
    b.findLightest(b.getroot() );*/
    return 0;
}


