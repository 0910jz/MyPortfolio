/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, Smallest.cpp*/

#include <iostream>
using namespace std;

int main() {
    int arr[10];
    int smallest;

    cout << "Enter 10 integer values: " ;
    for (int i = 0; i < 10; i++) {
        cin >> arr[i];
    }
    smallest = arr[0];
    for (int i = 1; i < 10; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    cout << "The smallest element in the array is: " << smallest << endl;

    return 0;
}
