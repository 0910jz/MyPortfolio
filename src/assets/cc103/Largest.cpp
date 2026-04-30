/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/24/23, Largest.cpp*/

#include <iostream>
using namespace std;

int main(){

int array[10]={1,2,3,4,5,6,7,8,9,0};
int loop, largest;
largest= array[0];

    for(loop =1; loop <10; loop++){
        if( largest < array[loop])
        largest= array[loop];
    }
    cout<<"Largest element of array is: "<<largest;

    return 0;
}
