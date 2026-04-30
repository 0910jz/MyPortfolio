/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/24/23, SumArray.cpp*/

#include <iostream>
using namespace std;

int main(){
    int array[10]={1,2,3,4,5,6,7,8,9,0};
    int sum, loop;
    sum=0;
    
    for(loop =9; loop >=0; loop--){
        sum= sum + array[loop];
    }
    
    cout<<"The sum of the given array is " << sum;
    return 0;
}
