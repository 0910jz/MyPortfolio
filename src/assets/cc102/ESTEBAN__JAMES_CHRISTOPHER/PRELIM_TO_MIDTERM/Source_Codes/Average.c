/* ESTEBAN, JAMES CHRISTOPHER, 10 14 2022, Average.c*/

#include <stdio.h>

int main()
{
    char name[20];
    int x,y,z,sum;
    float avg;
    printf("Enter your name: ");
    scanf("%s", &name);
    printf("Enter three numbers: ");
    scanf("%d %d %d", &x, &y, &z);
    sum=x+y+z;
    avg =(float)(x+y+z)/3;
    printf("\nHi %s\n", name);
    printf("The sum of %d %d, and %d is equal to %d\n",x,y,z, sum);
    printf("The average of %d %d, and %d is equal to %.2f\n",x,y,z, avg);
    return 0;
   
}