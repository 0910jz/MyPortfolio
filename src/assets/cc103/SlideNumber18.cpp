/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 04/25/23, SlideNumber18.cpp*/

#include <iostream>
using namespace std;

void myFunction(string fname, int age) {
    cout << fname << " Refsnes. " << age << " years old. \n";
}

int main () {
    myFunction("Liam", 3);
    myFunction("Jenny", 14);
    myFunction("Anja", 30);
    return 0;
}