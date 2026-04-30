/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/24/23, AveArray.cpp*/

#include <iostream>
using namespace std;

#include <iostream>
using namespace std;

int main() {
   double arr[10];
   double sum = 0;

   cout << "Enter 10 numbers: ";
   for(int i = 0; i < 10; i++) {
      cin >> arr[i];
      sum += arr[i];
   }

   cout << "The sum is " << sum << endl;

   double avg = sum / 10;
   cout << "The average is " << avg << endl;

   return 0;
}


