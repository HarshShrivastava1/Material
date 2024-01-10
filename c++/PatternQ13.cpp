// Expected Output
// A
// B C
// D E F
// G H I J

#include <iostream>
using namespace std;
int main()
{
    int row = 1, n = 4;
    char ch = 'A';
    while (row <= n)
    {
        int col = 1;
        while (col <= row)
        {
            cout << ch<<" ";
            col++;
            ch++;
        }
        cout << endl;
        row++;
    }

    return 0;
}