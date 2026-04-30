/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 04/25/23, sample_functions.cpp*/

#include <iostream>
using namespace std;

// Function to swap two elements of an array
void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

// Function to sort an array using the bubble sort algorithm. The bubbleSort() function sorts the array by checking every adjacent pair of elements,
// and if they are in the wrong order, it swaps them. This process is repeated multiple times until all elements are in the correct order.
void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]); // Swap the two elements if they are out of order
            }
        }
    }
}

// Main function
int main() {
    const int SIZE = 20; // Size of the array
    int arr[SIZE]; // Declare the array
    
    // Prompt the user to enter the elements of the array
    cout << "Enter " << SIZE << " integers: ";
    for (int i = 0; i < SIZE; i++) {
        cin >> arr[i]; // Read input from the user
    }
    
    // Sort the array using the bubble sort algorithm
    bubbleSort(arr, SIZE);
    
    // Output the sorted array to the console
    cout << "Sorted array: ";
    for (int i = 0; i < SIZE; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}


