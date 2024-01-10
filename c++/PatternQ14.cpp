// Expected Output 
// A 
// B C 
// C D E
// D E F G
#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 4;
    while (row<=n)
    {
        int col = 1;
        char ch = row + col - 2 + 'A';
        while (col<=row)
        {
            cout <<ch <<" " ;
            col++;
            ch++;
        }
        cout << endl;
        row++;
    }
    
    return 0;
}