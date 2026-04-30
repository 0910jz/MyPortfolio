/*ESTEBAN, JAMES CHRSITOPHER, 10 28 2022, ProgrammingExam1.c */

#include <stdio.h>

int main()
{
    int choice,x,y;
    float sum, diff,product,quot;
    
    printf("Simple Calculator Menu\n");
    printf("1 - Addition\n");
    printf("2 - Subtraction\n");
    printf("3 - Multiplication\n");
    printf("4 - Division\n");
    printf("5 - Exit\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    
    printf("Enter two number: ");
    scanf("%d %d", &x,&y);
    
    if(choice==1)
    {
        sum=x+y;
        printf("The sum of %d and %d is equal to %.2f", x,y,sum);
    }
    else if(choice==2)
    {
        diff=x-y;
        printf("The differemce of %d and %d is equal to %.2f", x,y,diff);
    }
    else if(choice==3)
    {
        product=x*y;
        printf("The product of %d and %d is equal to %.2f", x,y,product);
    }
    else if(choice==4)
    {
        quot=x/y;
        printf("The quotient of %d and %d is equal to %.2f", x,y,quot);
    }
    else
    printf("Goodbye!");
    return 0;
    }
    
    
