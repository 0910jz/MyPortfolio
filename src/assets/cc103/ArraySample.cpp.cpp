/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 03/14/23, ArraySample.cpp*/

#include <iostream>
using namespace std;

int main() {
    int grades[20];

    for (int i = 0; i < 20; i++) {
        grades[i] = 0;
    }

    cout << "Exercise 1" << endl;
    cout << "The value of the first component of grades is " << grades[0] << endl;
    grades[0] = 34;
    grades[19] = 2;
    grades[9] = 2 * grades[19];
    int input1, input2;
    cout << "Enter two values: ";
    cin >> input1 >> input2;
    grades[12] = input1;
    grades[15] = input2;
    cout << "The contents of grades are:" << endl;
    for (int i = 0; i < 20; i++) {
        cout << "grades[" << i << "] = " << grades[i] << endl;
    }
    cout << "The contents of grades at even indices are:" << endl;
    int i = 0;
    while (i < 20) {
        cout << "grades[" << i << "] = " << grades[i] << endl;
        i += 2;
    }
    cout << endl;

    cout << "Exercise 2" << endl;
    int scores[5];
    for (int i = 0; i < 5; i++) {
        cout << "Enter a score: ";
        cin >> scores[i];
    }
    cout << "Scores: ";
    int sum = 0;
    for (int i = 0; i < 5; i++) {
        cout << scores[i] << " ";
        sum += scores[i];
    }
    cout << endl;
    double avg = static_cast<double>(sum) / 5.0;
    cout << "Sum: " << sum << endl;
    cout << "Average: " << avg << endl;
    if (avg > 74) {
        cout << "PASSED" << endl;
    } else {
        cout << "FAILED" << endl;
    }
    return 0;
}

