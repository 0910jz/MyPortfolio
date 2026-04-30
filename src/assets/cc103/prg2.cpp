/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 2/17/23, PRG2.cpp*/

#include <iostream>
using namespace std;

int main()
{
    char letter;
    
    cout << "Enter a letter from the alphabet: ";
    cin >> letter;
    
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
        cout << "The letter is a Vowel." << endl;
    }
        
    else cout << "The letter is a Consonant" << endl;
    

    return 0;
}
