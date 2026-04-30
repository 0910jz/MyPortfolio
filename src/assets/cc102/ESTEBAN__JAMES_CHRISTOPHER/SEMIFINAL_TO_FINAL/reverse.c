/* ESTEBAN, JAMES CHRISTOHPER, 11 11 2022, reverse.c*/

#include <stdio.h>
int main () 
{
 int number ;
 int reversed_digit;
 printf("Enter a number \n"); 
 scanf("%d", &number);
 while (number != 0)
 {
 reversed_digit = number % 10 ;
 printf("%d", reversed_digit) ;
 number = number / 10 ;
 }
 printf("\n");
}
