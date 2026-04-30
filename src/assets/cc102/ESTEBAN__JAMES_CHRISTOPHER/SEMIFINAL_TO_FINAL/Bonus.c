/* ESTEBAN, JAMES CHRISTOPHER, 10 28 22, Bonus.c */

#include<stdio.h>
int
main ()
{
  int yearsofservice, salary, bonus;
  printf ("Brahman Year-End Bonus\n");
  printf ("Enter years of Service: ");
  scanf ("%d",&yearsofservice);
  printf ("Enter current salary: ");
  scanf ("%d",&salary);

    if (yearsofservice == 1)
        {
            bonus=(salary*.125);
            printf("Your year-end bonus is %d", bonus);
        }
    else if
        (yearsofservice>=2 && yearsofservice<=3)
        {
            bonus=(salary*.18);
            printf("Your year-end bonus is %d", bonus);
        }
    else if 
        (yearsofservice>=4 && yearsofservice<=10)
        {
            bonus=(salary*.5);
            printf("Your year-end bonus is %d", bonus);
        }
    else
        {
            bonus=salary*1;
        }

  return 0;
}