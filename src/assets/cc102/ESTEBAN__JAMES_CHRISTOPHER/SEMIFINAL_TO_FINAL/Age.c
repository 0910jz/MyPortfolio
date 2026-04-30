/* ESTEBAN, JAMES CHRISTOPHER C., 10 25 2022, Age.c*/

#include <stdio.h>
int main()
{
int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    if (age>0 && age<=2)
    printf("Still a baby");
    else if (age>=3 && age<=12)
    printf("Children");
    else if (age>=13 && age<=17)
    printf("Teenager");
    else if (age>=18 && age<=26)
    printf("Young Adult");
    else if (age>=27 && age<=39)
    printf("Middle Age");
    else if (age>=40 && age<=79)
    printf("Grand Parents");
    else printf("Wow");
    }
