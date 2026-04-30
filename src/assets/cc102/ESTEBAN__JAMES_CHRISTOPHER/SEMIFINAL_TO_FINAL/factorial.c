/* ESTEBAN, JAMES CHRISTOPHER, 11 21 2022, factorial.c*/

#include<stdio.h>

int main(){

    int i,n;
    float factor=1;

    printf("Enter a number to find factorial: ");

    scanf("%d",&n); 

    for(i=1;i<=n;i++)

        factor=factor*i; 

    printf("Factorial of %d is: %.2f",n,factor);

    return 0;

}

