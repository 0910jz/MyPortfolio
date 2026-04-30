/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 03/24/23, Value.cpp*/

#include <iostream>

using namespace std;

int main() {
  int arr[15] = {12, 45, 36, 98, 65, 73, 24, 56, 87, 34, 21, 90, 80, 69, 77};
  int index;

  cout << "Array elements size is " << sizeof(arr)/sizeof(arr[0]) << endl;
  cout << "Enter index number: ";
  cin >> index;

  if (index >= 0 && index < sizeof(arr)/sizeof(arr[0])) {
    cout << "Array[" << index << "] = " << arr[index] << endl;
  } else {
    cout << "Index out of bounds." << endl;
  }

  return 0;
}
