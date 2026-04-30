/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 2/17/23, PRG1.cpp*/

#include <iostream>
using namespace std;

int main() {
    int month;
    cout << "Enter month number (1-12): ";
    cin >> month;

    switch (month) {
        case 2:
            cout << "28 or 29 days in leap year" << endl;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cout << "30 days" << endl;
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            cout << "31 days" << endl;
            break;
        default :
        cout << "Not a valid number for a month." << endl;
    }

    return 0;
}






