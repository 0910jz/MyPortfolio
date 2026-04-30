/* ESTEBAN, JAMES CHRISTOPHER, 10 14 2022, practice.c*/

#include<stdio.h> 
int main()
{
#define SECS_PER_MIN 60
#define SECS_PER_HOUR 3600

    int seconds, minutes, hours, secs_left, mins_left;
    //prompting user to imput the number of seconds print("Enter number of seconds: scanf("%d", &seconds);
    printf("Enter number of seconds: ");
    scanf("%d", &seconds);
    
    hours =seconds / SECS_PER_HOUR;
    minutes =seconds / SECS_PER_MIN;
    mins_left =minutes % SECS_PER_MIN;
    secs_left =minutes % SECS_PER_MIN;
    printf("%d seconds is equal to %d hours, %d minutes, %d seconds", seconds, hours, mins_left, secs_left);
    return 0;
   
}