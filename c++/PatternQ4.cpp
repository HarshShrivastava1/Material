// Expected Output
// 1
// 22
// 333
// 4444
#include <iostream> 
using namespace std;
int main()
{
    int n = 4, row = 1;
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
        {
            cout << row <<" ";
            col++;
        }
        cout << endl;
        row++;
    }
    
    return 0;
}