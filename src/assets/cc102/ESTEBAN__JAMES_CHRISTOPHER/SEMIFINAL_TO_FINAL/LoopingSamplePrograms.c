/*ESTEBAN, JAMES CHRISTOPHER, 11 21 22, LoopingSamplePrograms.c */
#include <stdio.h>

int main()
{
   int x=1, pass,a,b=1,c,d=20,number=1,sum=0,i;
   char choice;
   while (x<4)
   {
       printf("Enter your password: ");
       scanf("%d", &pass);
       
       if (pass==10)
       {
       goto label_1;
       break;
       }
       else printf("Mali ka tubol ka!\n");
       x++;
       continue;
   }
   
    {
        label_1:
           printf("\nLOOPING Sample Programs\n\n[A] Even Numbers\n[B] Odd Numbers\n[C] Increasing\n[D] Decreasing\n[E] Sum of Five Numbers\n[F] Exit\nEnter your choice: ");
           scanf("%c", &choice);
           choice=getchar();
           switch(choice)
           {
           case 'A' :
            for (a=0;a<21;a+=2)
            printf("%d,", a);
            goto label_1;
            
           case 'B' :
            while(b<=20)
            {
            printf("%d ", b);
            b+=2;
            }
            goto label_1;
            
            case 'C' :
            for (c=0;c<=20;c++)
            printf("%d ", c);
            goto label_1;
            
            case 'D' :
             while(d>=0)
           {
             printf("%d ", d);
             d--;
           }
             goto label_1;
             
             case 'E' :
             while (number<=5)
             {
                 printf("Enter a number: ");
                 scanf("%d", &i);
                 number++;
                 sum+=i;
                 continue;
             }
                printf("The sum of the five number is: %d", sum);
                goto label_1;
                
                case 'F' :
                printf("You've chosen to exit the program. Thank you!");
                break;
                default: printf("Invalid input! Please try again.");
            {
                return 0;
            }
             
        
             
            
            
           }
           
           
        
       
    }

    return 0;
}
