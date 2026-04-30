/* ESTEBAN, JAMES CHRISTOPHER, 11 04 2022, ProgrammingExam2.c */

#include <stdio.h>
int main()

{
    int choice;
    char name[20];
    int salary, bonus;
    int purchase, amount;
    int num1,num2,num3;
    int x,y;
    printf("Programming Exam 2\n");
    printf("\t[2]\n");
    printf("\t[4]\n");
    printf("\t[5]\n");
    printf("\t[8]\n");
    printf("Enter your choice: ");
    choice=getchar();
    
    switch (choice){
        case '8':
        printf("Please input your name: ");
        scanf("%s", name);
        printf("How much is your salary?: ");
        scanf("%d", &salary);
        
            if (salary>=0 && salary<=9999)
            {
                bonus=(salary*.25);
                printf("Hello %s, your total year end bonus is %d pesos.", name, bonus);
                break;
            }
            
            else
                printf("Hello %s, your total year end bonus is 3000 pesos.", name);
            break;
        case '5':
        printf("Please type your total purchase: ");
        scanf("%d", &purchase);
        
        if (purchase<=2000)
        {
            printf("You're purchase doesn't meet the total amout for the discount.");
            break;
        }
        
        else
            amount=purchase-(purchase*.05);
            printf("Your total amount to be paid is %d.", amount);
            break;
        
        case '4':
        printf("Please type 3 number: ");
        scanf("%d,%d,%d", &num1, &num2, &num3);
        
        if (num1>num2 && num2>num3)
        {
            printf("%d,%d,%d", num3,num2,num1);
            break;
        }
        
        else if (num2>num1 && num1>num3)
        {
            printf("%d,%d,%d", num3,num1,num2);
            break;
        }
        
        else if (num3>num2 && num2>num1)
        {
            printf("%d,%d,%d", num1,num2,num3);
            break;
        }
        
        else if(num2>num3 && num3>num1)
        {
            printf("%d,%d,%d", num2,num3,num1);
            break;
        }
        
        else if(num3>num1 && num1>num2)
        {
            printf("%d,%d,%d", num3,num1,num2);
            break;
        }
        
        else
        printf("%d,%d,%d", num1,num3,num2);
        break;
        
        case '2':
        
        printf("Enter a numer for variable 1: ");
        scanf("%d", &x);
        printf("Enter a number for variable 2:");
        scanf("%d", &y);
        printf("Variable 1 = %d.\n", y);
        printf("Varialbe 2 = %d.", x);
        break;
        
    }
    
    return 0;
}