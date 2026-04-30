/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, MaxMin.cpp*/

#include <iostream>
using namespace std;

int main() {
    int arr[100];
    int n, max, min;

    cout << "Enter the number of elements to be stored in the array: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "\nEnter element - " << i << " : ";
        cin >> arr[i];
    }

    max = arr[0];
    min = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    cout << "\nMaximum element is: " << max << endl;
    cout << "Minimum element is: " << min << endl;

    return 0;
}
