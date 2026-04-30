/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 04/14/2023, example15.cpp*/
#include <iostream>
#include<cstring>

using namespace std;

int main()
{
    
    
    char s1[100], s2[100];
    
    cout << "Enter string s1: ";
    cin.getline(s1, 100);
    cout << "Enter string s2: ";
    cin.getline(s2, 100);
    
    strcat(s1, s2);
    
    cout << "s1 = "<< s1 << endl;
    cout << "s2 = "<< s2;
    
    return 0;
}

