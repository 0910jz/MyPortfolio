/*ESTEBAN, JAMES CHRISTOPHER, 12 02 2022, PRG5.c*/

#include <iostream>
using namespace std;

int main()
{
    int gallons,quarts,pints,cups,tbsp;
    cout << "Enter the number of gallons: ";
    cin >> gallons;
    
    if(gallons>0){
        quarts = gallons * 4;
        pints = quarts * 2;
        cups = pints * 2;
        tbsp = cups * 16;

        cout << gallons << " gallons is equivalent to:" << endl;
        cout << quarts << " quarts" << endl;
        cout << pints << " pints" << endl;
        cout << cups << " cups" << endl;
        cout << tbsp << " tablespoons" << endl;
    }
    else cout << "Invalid input. Number of gallons can't be equal to 0. Please try again." << endl;
    

    return 0;
}

