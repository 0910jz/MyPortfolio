/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 04/25/23, SlideNumber13.cpp*/

#include <iostream>
using namespace std;

void displayNum(int n1, float n2){
    cout << "The int number is " << n1;
    cout << "\nThe double number is " << n2;
}

int main() {
    int num1 = 5;
    double num2 = 5.5;
    
    displayNum(num1,num2);
    return 0;
}