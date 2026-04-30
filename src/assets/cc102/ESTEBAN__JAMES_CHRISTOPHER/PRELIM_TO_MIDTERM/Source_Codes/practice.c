/* ESTEBAN, JAMES CHRISTOPHER, 10 14 2022, practice.c*/

#include <stdio.h>

int main()
{
    int x, y, sum;
    char name[20];
    printf ("Enter your name: ");
    scanf ("%s", &name);
    printf("Enter the first number: ");
    scanf ("%d", &x);
    printf("Enter the second number: ");
    scanf("%d", &y); sum = x+y;
    printf("Hi % \n", name);
    printf("The sum of %d and %d is %d", x, y, sum);
    return 0;
   
}