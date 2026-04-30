/* ESTEBAN, JAMES CHRISTOPHER, 11 21 22, score.c */

#include <stdio.h>
int main ()
{
  int score, sum = 0, average;
  for (int i = 0; i < 10; i = i + 1)
    {
      printf ("Input score: ");
      scanf ("%d", &score);
      if (score < 0 || score > 20)
	{
	  printf ("Invalid input. Please try again.");
	  return 0;
	}
      sum = sum + score;
    }
  average = sum / 10;
  printf ("\nYour average is %d\n", average);
  if (average > 16 && average < 21)
    {
      printf ("Your grade is A.");
    }
  else if (average > 12 && average < 17)
    {
      printf ("Your grade is B.");
    }
  else if (average > 8 && average < 13)
    {
      printf ("Your grade is C.");
    }
  else if (average > 4 && average < 9)
    {
      printf ("Your grade is D.");
    }
  else if (average > 0 && average < 5)
    {
      printf ("Your grade is E.");
    }
  else
    {
      printf ("Your grade is F.");
    }
  return 0;
}






