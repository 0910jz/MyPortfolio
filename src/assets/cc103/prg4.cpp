/*ESTEBAN, JAMES CHRISTOPHER C., CS1-1, 02/19/23, PRG4.cpp*/

#include <iostream>
using namespace std;

int main() {

    const double burgerPrice = 55.0;
    const double friesPrice = 22.0;
    const double sodaPrice = 7.75;
    const double taxPercentage = 0.065;

    int num_burgers, num_fries, num_sodas;
    cout << "How many burger/s would you like to order? ";
    cin >> num_burgers;
    cout << "How many fries would you like to order? ";
    cin >> num_fries;
    cout << "How many soda/s would you like to order? ";
    cin >> num_sodas;

    double subtotal = num_burgers * burgerPrice +
                      num_fries * friesPrice +
                      num_sodas * sodaPrice;
    double totalTax = subtotal * taxPercentage;

    double total = subtotal + totalTax;
    cout << "Subtotal: Php" << subtotal << endl;
    cout << "Tax (6.5%): Php" << totalTax << endl;
    cout << "Total: Php" << total << endl;

    return 0;
}
