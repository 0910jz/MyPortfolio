/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 04/25/23, SlideNumber17.cpp*/

#include <iostream>
using namespace std;

void display(char c = '*', int count = 3) {
    for (int i = 1; i <= count; ++i) {
        cout << c;
    }
    cout << endl;
}

int main() {
    int count = 5;
    
    cout << "No argument passed: ";
    display();
    
    cout << "First argument passed: ";
    display('#');
    
    cout << "Both arguments passed: ";
    display('$', count);
    
    return 0;
}
