/* ESTEBAN, JAMES CHRISTOPHER, 11 11 2022, forProg.c*/

#include<stdio.h>
int main() 
{
int i;

printf("Prints my name three times.\n");
for (i=0; i<3; i++)
printf("I LOVE TURBO C\n");
printf("\nCounts from 1 to ten.\n");
for (i=1; i<=10; i++) printf("%d ", i);
printf("\n\nCounts down from 10 to 0.\n");
for (i=10; i>=0; i--) printf("%d ", i);
printf("\n\nCounts the odd numbers from 1 to 21.\n");
for (i=1; i<=21; i+=2) printf("%d ", i);
printf("\n\nMultiple statements.\n");
for (i=0; i<3; i++)
{
printf("%d ", i);
printf("I LOVE TURBO C\n");
}
return 0;
}
