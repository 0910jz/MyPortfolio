/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 05/02/23, SampleStrings.cpp*/

#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main()
{
    char name[20];
    cout<<"Please enter your name: ";
    cin.get(name,20);
    cin.ignore();
    
    string program;
    cout << "Enter you program: ";
    getline(cin, program);
    
    cout << "Hello " << name << " from " << program << "." << endl;
    
// -------------------------------------------------------------------------------------- //

    cout << "Length of name: " << strlen(name) << endl;
    cout << "Length of program: " << program.length() << endl;

// -------------------------------------------------------------------------------------- //

    if (program.compare("BS Information Technology") == 0)
        cout << "You are currently enrolled in BS Information Technology." << endl;
    else
        cout << "You are not currently enrolled in BS Information Technology." << endl;

// -------------------------------------------------------------------------------------- //

    char name2[20];
    strcpy(name2, name);
    string s1 = name2;
    
    string result = program.append(s1);
    
    cout << result ;
    
// -------------------------------------------------------------------------------------- //

    cout << "\nPosition of the word Technology is: ";
    cout << program.find("Technology");
    
    return 0;
}