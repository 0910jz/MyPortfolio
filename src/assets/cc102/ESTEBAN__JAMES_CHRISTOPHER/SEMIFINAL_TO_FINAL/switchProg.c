/* ESTEBAN, JAMES CHRISTOPHER C., 10 25 2022, switchProg.c*/

#include <stdio.h>
int main() {
char choice;

    printf("What flavor do you like?");
    printf("\n\ta) Apple");
    printf("\n\tb) Orange");
    printf("\n\tc) Vanilla");
    printf("\n\td) Mint\n: ");
    
choice=getchar();

     switch (choice) {
     case 'a':
     printf("\nI like apple too.");
     break;
     case 'b':
     printf("\nI like orange too.");
     break;
     case 'c':
     printf("\nI like vanilla too.");
     break;
     case 'd':
     printf("\nI like mint too.");
     break;
     default: printf("Huh?");
}

}