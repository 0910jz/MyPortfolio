/* ESTEBAN, JAMES CHRISTOPHER, 10 14 2022, Name.c*/

#include <stdio.h>

int main()
{
    char name[8];
    int a,b,sum;
    printf("What is your name: ");
    scanf("%s",&name);
    printf("Please enter two numbers:");
    scanf("%d %d", &a,&b);
    sum=a+b;
    printf("\nYour name is %s.\n", name);
    printf("%d + %d = %d", a, b, sum);
    return 0;
   
}