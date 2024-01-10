// ExpectedOutput
// *
// **
// ***
// ****
#include <iostream> 
using namespace std;
int main()
{
    int row = 1,n=4;
    while (row<=n)
    {
        int col=1;
        while (col<=row)
        {
            cout <<"*" <<" ";
            col++;
        }
        cout << endl;
        row++;
    }
    
    
    return 0;
}

