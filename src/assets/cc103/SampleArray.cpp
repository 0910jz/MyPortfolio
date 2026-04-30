/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 03/24/23, SampleArray.cpp*/

#include <iostream>
using namespace std;

int main()
{
    int Ar[10], i = 7, j = 2, k = 4;
    Ar[0] = 1;
    Ar[i] = 5;
    Ar[j] = Ar[i] + 3;
    Ar[j+1] = Ar[i] + Ar[0];
    Ar[Ar[j]] = 12;
    
    cout << "Please enter a number:" ;
    cin >> Ar[k];
    
    int num = 0, element = 0;
    while (num < 10){
        int num1 = Ar[element];
        cout << "Ar[" << num << "] = " << num1 << endl;
        num++;
        element++;
    }
    return 0;
}
