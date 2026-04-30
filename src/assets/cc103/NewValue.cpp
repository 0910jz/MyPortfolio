/* ESTEBAN, JAMES CHRISTOPHER C., CS1-1 03/30/23, NewValue.cpp*/

#include <iostream>
using namespace std;
int main()
{
    int arr1[100],i,n,p,x;

    cout<<"Insert New value in the array : \n ";
    cout<<"-----------------------------------------\n";
    cout<<"Input the size of array : ";
    cin>>n;

    cout<<"Input  "<<n <<" elements in the array in ascending order:\n";
    for(i=0;i<n;i++)
            {
    	cout<<"element - "<<i<<" : ";
    	cin>>arr1[i];
    	    }
    	    
        cout<<"Input the value to be inserted : ";
        cin>>x;
        cout<<"Input the Position where the value will be inserted :";
        cin>>p;

    cout<<"The current list of the array: \n";
    for(i=0;i<n;i++)
    cout<<arr1[i];

    for(i=n;i>=p;i--)
    arr1[i]= arr1[i-1];

	arr1[p-1]=x;


    cout<<"\nAfter inserting the element, the new list is :\n";
    for(i=0;i<=n;i++)
    cout<<arr1[i] <<endl;

return 0;
}
