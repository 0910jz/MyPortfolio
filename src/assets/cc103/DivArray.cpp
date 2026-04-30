/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, DivArray.cpp*/

#include <iostream>
using namespace std;
#define DIMENSION 10

int main() 
{
  int i;
  float max, array[DIMENSION]; 

      for (i = 0; i < DIMENSION; i++) 
      {
        cout<<"array["<< i <<"] = ";
        cin>>array[i];    
        if (i == 0) 
        {
          max = array[i];
        }
        if (max < array[i]) 
        {
          max = array[i];
        }
    }
    
    cout<<"\nBiggest element in array is " <<max<<endl;;
    for (i = 0; i < DIMENSION; i++) {
    array[i] /= max;
    cout<<"array["<< i <<"] =  " <<array[i] <<endl;
    }
    
return 0;
}