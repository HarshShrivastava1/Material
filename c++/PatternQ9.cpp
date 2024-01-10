// Expected Output
// A B C
// A B C
// A B C
#include <iostream>
using namespace std;
int main()
{
    int row = 1, n = 3;
    while (row <= n)
    {
        int col = 1;
        char ch = 'A' + col - 1;
        while (col<=n)
        {
            cout << ch;
            col++;
            ch++;
        }
    cout << endl;
    row++;
        
    }
    return 0;
}