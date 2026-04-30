/* ESTEBAN, JAMES CHRISTOPHER C, 10 14 2022,  Mod2Sk2*/

#include <stdio.h>

int main()
{
    int f, c;
    printf("Enter Fahrenheit: ");
    scanf("%d", &f);
    c=(f-32)*5/9;
    printf("%d°F is equal to %d°C", f, c);
    return 0;
   
}