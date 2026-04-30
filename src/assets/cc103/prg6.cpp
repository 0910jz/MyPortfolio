/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 02/19/23, PRG6.cpp*/
#include <iostream>

using namespace std;

int main() {
    int num;
    cout << "Enter a positive integer: ";
    cin >> num;

    bool is_prime = true;
    for (int i = 2; i < num; i++) {
        if (num % i == 0) {
            is_prime = false;
            break;
        }
    }
    if (num < 2 || !is_prime) {
        cout << num << " is not a prime number." << endl;
    } else {
        cout << num << " is a prime number." << endl;
    }

    return 0;
}