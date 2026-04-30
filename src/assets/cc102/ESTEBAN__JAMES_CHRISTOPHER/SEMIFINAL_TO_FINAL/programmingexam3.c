/*ESTEBAN, JAMES CHRISTOPHER, 12 9 2022, ProgrammingExam3.c

a. Write a program that prompts the user to enter two positive integers.
The program outputs how many numbers are odd and how many numbers are multiples of 8 between the two integers.*/

#include <stdio.h>

int main()
{
  int num1, num2, odd=0, mul8=0;
  printf("Enter two postive integer: ");
  scanf("%d %d", &num1, &num2);
  printf("\n**************************************\n");
  for (int i = num1; i <= num2; i++) {
  if (i % 2 == 1)
    {
      ++odd;
    }
    if (i % 8 == 0) 
    {
      ++mul8;
    }
  }
    printf("\nNumbers of odd numbers between the two integers: %d\n", odd);
    printf("Numbers of multiples of 8 between the two integers: %d", mul8);
    

    return 0;
}
