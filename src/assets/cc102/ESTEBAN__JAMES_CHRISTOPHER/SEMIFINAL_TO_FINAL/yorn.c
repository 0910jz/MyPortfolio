/*ESTEBAN, JAMES CHRISTOPHER, 11 11 2022, yorn.c*/
#include <stdio.h>

int main()

{
char yorn;

do
 {
 printf("\nDo you want to go through the loop? (y or n):");
 yorn=getchar();
 printf("%c", yorn);
 } while (yorn =='y');
return 0;
}
