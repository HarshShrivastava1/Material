// ExpectedOutput
// A B C 
// D E F 
// G H I

// 1 2 3
// 4 5 6
// 7 8 9
#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 3;
    char count = 'A';
    while (row<=n)
    {
    int col = 1;
    while (col<=n)
    {
        cout << count <<" ";
        col++;
        count++;
    }
    cout << endl;
    row++;
    }
    
    return 0;
}