/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 2/17/23, SampleProgram1.cpp*/

#include <iostream>
const double CONVERSION = 2.54;
const int NO_OF_STUDENTS = 20;
const char BLANK = '_';

using namespace std;

int main()
{
    // basics
    double length;
    double width;
    double area;
    double perimeter;
    
    cout << "Program to compute and output the perimeter and"
         << "area of a rectagle." << endl;
    
    length = 6.0;
    width = 4.0;
    perimeter = 2 * (length + width);
    area = length * width;
    
    cout << "Length = " << length << endl;
    cout << "Width = " << width << endl;
    cout << "Perimeter = " << perimeter << endl;
    cout << "Area = " << area << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //precedence
    cout << 25 + 4 - 7 << endl;
    cout << 3.0 + 5 % 6 << endl;
    cout << 13.5 + 2.0 * 4.0 / 4.0 << endl;
    cout << 13/3*6-10 << endl;
    cout << 20-13%2+18/9 << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //mixed
    cout << 2 + 3.5 << endl;
    cout << 6 / 4 + 3.9 << endl;
    cout << 5.4 * 2 - 13.6 + 18 / 2 << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //declaration
    cout << CONVERSION << endl;
    cout << NO_OF_STUDENTS << endl;
    cout << BLANK << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //assigning statements
    
    int num1 = 4, num2 = 4 * 5 - 11;
    double sale = 0.02 * 1000;
    char first = 'D';
    string str = "It is a sunny day.";
    
    cout << num1 << endl;
    cout << num2 << endl;
    cout << sale << endl;
    cout << first << endl;
    cout << str << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //Use of cin
    
    cout << "Hello World!" << endl;
    cout << "I am learning C++" << endl;
    
    string firstName;
    cout << "Type your first name: ";
    cin >> firstName;
    cout << "Your name is: " << firstName << endl;
    
    int x;
    cout << "Type a number: ";
    cin >> x;
    cout << "Your number is: " << x << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
     
    // if statements
     
    int a,b,c;
     
    cout << "Enter 3 numbers: ";
    cin >> a >> b >> c;
     
    if ((a > b) && (b > c)){
       cout << "The lowest number is " << c << endl;
    }
     
     else if ((b > c) && (c > a)){
        cout << "The lowest number is " << a << endl;
    }
    else cout << "The lowest number is " << b << endl;
    
    cout << "----------------------------------------------------------------------------------------------------------------" << endl;
    
    //switch case
    
    int day = 4;
    switch (day){
        case 1:
        cout << "Monday";
        break;
        
        case 2:
        cout << "Tuesday";
        break;
        
        case 3:
        cout << "Wednesday";
        break;
        
        case 4:
        cout << "Thursday";
        break;
        
        case 5:
        cout << "Friday";
        break;
        
        case 6:
        cout << "Saturday";
        break;
        
        case 7:
        cout << "Sunday";
        break;
    }
        

    return 0;
}

