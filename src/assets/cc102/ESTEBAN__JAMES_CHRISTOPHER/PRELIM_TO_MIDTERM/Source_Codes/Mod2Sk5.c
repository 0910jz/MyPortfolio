/* ESTEBAN, JAMES CHRISTOPHER C, 10 14 2022,  Mod2Sk2*/

#include <stdio.h>

int main()
{
    int minorexam, majorexam;
    float midterm;
    printf("Enter your minor exam score: ");
    scanf("%d", &minorexam);
    printf("Enter your major exam score: ");
    scanf("%d", &majorexam);
    midterm =.33*minorexam+.66*majorexam;
    
    printf("Your midterm grade is %.2f", midterm);
    
    return 0;
   
}