/*ESTEBAN, JAMES CHRISTOPHER, 12 02 2022, Problem2.c*/

#include <stdio.h>

int main()
{
    int gallons, quarts, pints, cups, tbsp;
    printf("Enter the number of gallons to be converted: ");
    scanf("%d",&gallons);
    if(gallons>0)
    {
        quarts=gallons*4;
        pints=quarts*2;
        cups=pints*2;
        tbsp=cups*16;
        printf("There are %d quarts in %d gallon/s.\n", quarts,gallons);
        printf("There are %d pints in %d gallon/s.\n", pints,gallons);
        printf("There are %d cups in %d gallon/s.\n", cups, gallons);
        printf("There are %d tablespoons in %d gallon/s.\n", tbsp, gallons);
    }
    else printf("\nInvalid input. Number of gallons cannot be lower than 0.");
    return 0;
}
