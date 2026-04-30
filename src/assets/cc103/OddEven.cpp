/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, OddEven.cpp*/

#include <iostream>
using namespace std;

int main() {
    int arr[100];
    int n;

    cout << "Enter the number of elements to be stored in the array: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "Enter element - " << i << " : ";
        cin >> arr[i];
    }

    cout << "Even elements : ";
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            cout << arr[i] << " ";
        }
    }
    cout << endl;

    cout << "Odd elements : ";
    for (int i = 0; i < n; i++) {
        if (arr[i] % 2 != 0) {
            cout << arr[i] << " ";
        }
    }
    cout << endl;

    return 0;
}
