#include <iostream>
using namespace std;
int main()
{
    // int i = 1;
    // for (;;)
    // {
    //     if (i <= 5)
    //     {
    //         cout << i << endl;
    //     }
    //     else{
    //         break;
    //     }

    //     i++;
    // }

    int sum=0;
    for ( int i = 1; i <= 5; i++)
    {
        sum = sum + i;
    }
    cout << sum <<endl;

    return 0;
}