/*ESTEBANN, JAMES CHRISTOPHER C., CS1-1, 04/14/2023, example9.cpp*/
#include <iostream>
#include<cstring>

using namespace std;

int main()
{
    
    char str1[10] = "Hello";
    char str2[10] = "World";
    int result;
    result=strcmp(str1,str2);
    if (result==0)
    cout << "strings are equal" << endl;
    else
    cout << "strings are not equal" << endl;
    return 0;
}

