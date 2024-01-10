// Expected Output
// A A A 
// B B B 
// C C C 
#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 3;
    while (row<=n)
    {
        char ch = 'A' + row - 1;
        int col = 1;
        while (col<=n)
        {
            cout << ch <<" ";
            col++;
        }
        cout << endl;
        row++;
    }
    
    return 0;
}