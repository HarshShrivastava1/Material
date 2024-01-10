#include <iostream>
using namespace std;
int main()
{
    int n;
    cout << "Enter a num to check wether it is PrimeNum or Not";
    cin >> n;

    bool isPrime = 1;
    for (int i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            isPrime = 0;
            break;
        }
    }
    if (isPrime == 0)
    {
        cout <<n <<" not a Prime Number";
    }
    else
    {
        cout <<n << " Prime Number";
    }

    return 0;
}