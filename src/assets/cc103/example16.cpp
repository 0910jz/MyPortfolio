/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 04/14/2023, example16.cpp*/
#include <iostream>
#include<string>

using namespace std;

int main()
{
     
    string s1, s2, result;
    cout << "Enter string s1: ";
    getline(cin, s1);
    cout << "Enter string s2: ";
    getline(cin, s2);
    
    result=s1.append(s2);
    cout << result << endl;
    
    return 0;
}
