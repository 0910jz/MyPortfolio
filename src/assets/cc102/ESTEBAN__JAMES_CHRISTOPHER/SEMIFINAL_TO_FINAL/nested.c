/*ESTEBAN, JAMES CHRISTOPHER, 11 11 2022, nested.c*/

#include<stdio.h>
#define max 5

int main()
{

    printf("Prints the value of i and j as it goes through the loop.\n");
    for (int i=0; i<max; i++)
    for (int j=0; j<max; j++) 
    printf("(%d,%d)\n",i,j);
    return 0;
}
