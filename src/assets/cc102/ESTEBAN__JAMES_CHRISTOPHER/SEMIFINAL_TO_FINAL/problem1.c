/*ESTEBAN, JAMES CHRISTOPHER, 12 02 2022, Problem1.c*/

#include <stdio.h>

int main()

{
    int w,l;
    printf("Please input package weight: ");
    scanf("%d", &w);
    printf("Please input package length: ");
    scanf("%d", &l);
    {
        if (w >= 28 && l >= 21) 
        printf("Too heavy and too long.");
        else if (w >= 28 && l<=21)
        printf("Too heavy.");
        else if (w <= 28 && l >= 21)
        printf("Too long.");
        else printf("Package ready to be shipped.");
    }   

        
    return 0;
}

