//Expected Output 
// A B C 
// B C D 
// C D E 

#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 3;
    while (row <= n)
    {
        int col = 1;
        char ch = ('A' + row - col);
        while (col<=n)
        {
            cout << ch <<" ";
            ch++;
            col++;
        }
        cout << endl;
        row++;
    }
    
    return 0;
}