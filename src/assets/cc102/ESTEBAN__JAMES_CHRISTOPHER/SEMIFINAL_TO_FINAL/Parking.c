/* ESTEBAN, JAMES CHRISTOPHER, 10 28 22, Parking.c */

#include <stdio.h>
int main()
{
    char choice;
    int hour,charge;
    printf("What type of vehicle?");
    printf("\n\tc) car");
    printf("\n\tb) bus");
    printf("\n\tt) truck\n");
    choice=getchar();
    printf("\nHow many parking hours? ");
    scanf("%d", &hour);
        switch(choice)
        {
        case 'c':
        charge=hour*20;
        printf("Your total parking fee is %d", charge);
        break;
        case 'b':
        charge=hour*40;
        printf("Your total parking fee is %d", charge);
        break;
        case 't':
        charge=hour*50;
        printf("Your total parking fee is %d", charge);
        break;
        default:
        printf("Invalid input.");
        break;
        }
        
    return 0;
}
