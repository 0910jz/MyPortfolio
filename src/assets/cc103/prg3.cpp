/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 2/17/23, PRG3.cpp*/

#include <iostream>
using namespace std;

int main()
{
    int num1,num2;
    
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    
    switch (num1 > num2){
        case 0:
        cout << "The maximum number is: " << num2;
        break;
        
        case 1:
        cout << "The maximum number is: " << num1;
        break;
    }

    return 0;
}
