/* ESTEBAN, JAMES CHRISTOPHER, 10 14 2022, Age.c*/

#include <stdio.h>
#define YEARNOW 2022

int main()
{
    char firstname[20], middleinitial, lastname[20]; int month, day, year, age; 
    printf("Enter your whole name: ");
    scanf("%s %s %s", &firstname, &middleinitial, &lastname);
    printf("Enter the month, day, and year of your birthday: ");
    scanf("%d %d %d", &month, &day ,&year);
    age =YEARNOW-year;
    printf("\n Hi %s\n", lastname);
    printf("Age: %d ", age);
    return 0;
   
}