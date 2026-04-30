/*Marquez, Mark Lawrence A., CS1-1, 03/30/2023, example5.cpp*/
#include <iostream>

using namespace std;

int main()
{

string name;
cout << "Enter your name: ";
getline (cin, name);
    // read a whole line into the string name
if (name == "")
{
    cout << "You entered an empty string, "
         << "assigning default\n";
    name = "John";
}
else
{
    cout << "Thank you, " << name
         <<" for running this simple program!"
         << endl;
}
}

