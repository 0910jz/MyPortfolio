#include <iostream>
using namespace std;

int main() {
  int arr[3], n;

  cout << "Input the number of elements to be stored in the array: ";
  cin >> n;

  cout << "\nInput " << n << " elements in the array:\n";
  for (int i = 0; i < n; i++) {
    cout << "\nElement - " << i << " : ";
    cin >> arr[i];
  }

  cout << "\nThe elements in the array are: ";
  for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
  }
  cout << endl;

  return 0;
}
