/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 03/24/23, Find.cpp*/

#include <iostream>
using namespace std;

int main() {
   int arr[] = {12, 45, 23, 89, 34, 76, 54, 23, 19, 67};
   int n = sizeof(arr) / sizeof(arr[0]);
   int element = 67;
   int location = -1;

   for(int i = 0; i < n; i++) {
      if(arr[i] == element) {
         location = i;
         break;
      }
   }

   if(location != -1) {
      cout << "Location: Array[" << location << "]" << endl;
   } else {
      cout << "Element not found" << endl;
   }

   return 0;
}

