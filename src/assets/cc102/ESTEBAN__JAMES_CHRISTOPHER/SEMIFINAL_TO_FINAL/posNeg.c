/* ESTEBAN, JAMES CHRISTOPHER C., 10 25 2022, posNeg.c*/

#include <stdio.h>
int main()
{
int n;

    printf("Enter a number, positive or negative: ");
    scanf("%d", &n);
    if (n>=0)
    printf("%d is a positive number", n);
    else
    printf("%d is a negative number", n);
}
