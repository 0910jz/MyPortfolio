/*ESTEBAN, JAMES CHRSITOPHER, 10 28 2022, dayWeek.c*/
#include <stdio.h>

int main()
{
    int weekday;
    printf("Please Enter the Day Nuber 1 to 7 (Consider 1=Monday, and 7=Sunday): ");
    scanf("%d", &weekday);
    
    if (weekday == 1)
    {
        printf("\nMonday");
    }
    else if ( weekday == 2 )
    {
        printf("\nTuesday");
    }
    else if ( weekday == 3 )
    {
        printf("\nWednesday");
    }
    else if ( weekday == 4 )
    {
        printf("\nThursday");
    }
    else if ( weekday == 5 )
    {
        printf("\nFriday");
    }
    else if ( weekday == 6 )
    {
        printf("\nSaturday");
    }
    else if ( weekday == 7 )
    {
        printf("\nSunday");
    }
    else
        printf("\nPlease enter Valid Number between 1 to 7");
        
    return 0;
}
