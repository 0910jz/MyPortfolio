/* ESTEBAN, JAMES CHRISTOPHER, 10 28 2022, Assignment.c */

#include <stdio.h>
int main ()
{
    int grade1,grade2,grade3,ave,sum;
    printf("Enter three exam grades: ");
    scanf("%d %d %d", &grade1, &grade2, &grade3);
    sum=grade1+grade2+grade3;
    ave=sum/3;
    if (ave>=60)
    printf("%d :)", ave);
    else
    printf("%d :(", ave);
    return 0;
}