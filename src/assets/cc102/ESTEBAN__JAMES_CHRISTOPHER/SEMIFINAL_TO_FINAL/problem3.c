/*ESTEBAN, JAMES CHRISTOPHER, 12 02 2022, Problem1.c*/

#include <stdio.h>

int main()
{
    int count=0, num=0;
    printf("Enter a number: ");
    scanf("%d", &num);
    while (num>=0)
    {
        count++;
        printf("Enter a number: ");
        scanf("%d", &num);
    }
    printf("The smallest positive number is %d.", num);
    
}