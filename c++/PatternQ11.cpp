// ExpectedOutput
// A B C 
// B C E
// C E F 

#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 3;
    while (row<=n)
    {
        int col = 1;
        char value = row + col - 2 + 'A' ;
        while (col<=n)
        {
            cout << value;
            col++;
            value++;
                }
        cout << endl;
        row++;
    }
    
    return 0;
}