/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, SecLarge.cpp*/

#include <iostream>
using namespace std;

int main()
{
    int array[10]={101,11,3,4,50,69,7,8,9,0};
    int loop, largest, second;

    if(array[0]> array[1]){
    largest= array[0];
    second  = array[1];
    }
    
    else{
    largest= array[1];
    second  = array[0];
    }

        for(loop =2; loop <10; loop++){
        if( largest < array[loop]){
        second= largest;
        largest= array[loop];
        }else if( second < array[loop]){
        second=  array[loop];
        }
    }


        cout<<"Largest element of array is  "<<largest<<endl;
        cout<<"Second largest element of array is  "<<second;
        return 0;
}