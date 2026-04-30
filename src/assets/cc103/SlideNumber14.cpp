/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 04/25/23, SlideNumber14.cpp*/

#include <iostream>
using namespace std;

void myFunction(string country = "Norway") {
    cout << country << "\n";
}

int main() {
    myFunction("Sweden");
    myFunction("India");
    myFunction();
    myFunction("USA");
    return 0;
}
