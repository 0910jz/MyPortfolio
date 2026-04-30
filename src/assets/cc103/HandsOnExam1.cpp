/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 4/17/2023, HandsOnExam1.cpp*/

#include <iostream>
using namespace std;

int main()
{
    const int NUM_DIRECTORS = 12;
    string names[NUM_DIRECTORS];
    int votes[NUM_DIRECTORS];
    
    cout << "ELECTION FOR THE BOARD OF DIRECTORS\n" << endl;
    
     for (int i = 0; i < NUM_DIRECTORS; i++) {
        cout << "Enter the last name of director #" << i + 1 << ": ";
        cin >> names[i];

        cout << "Enter the number of votes received: ";
        cin >> votes[i];
    }
    cout << endl << "Results:" << endl;
    for (int i = 0; i < NUM_DIRECTORS; i++) {
        cout << names[i] << ": " << votes[i] << " votes" << endl;
    }

    int maxVotes = 0;
    int maxIndex = 0;
    for (int i = 0; i < NUM_DIRECTORS; i++) {
        if (votes[i] > maxVotes) {
            maxVotes = votes[i];
            maxIndex = i;
        }
    }
    cout << endl << "The new chairman of the board is: " << names[maxIndex] << endl;

    return 0;
    
    
}