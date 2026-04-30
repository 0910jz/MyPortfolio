/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 04/14/2023, example10.cpp*/
#include <iostream>
#include<string>

using namespace std;

int main()
{
    
    
    string str1= "Hello";
    string str2= "Hello"; int result;
    result=str1.compare(str2);
    if (result==0)
    cout << "strings are equal" << endl;
    else
    cout << "strings are not equal" << endl;
    return 0;
}

