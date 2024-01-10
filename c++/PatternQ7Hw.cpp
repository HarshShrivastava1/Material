// Expected Output 
// 1
// 2  1
// 3  2  1 
// 4  3  2  1
#include <iostream> 
using namespace std;
int main()
{
    int row = 1, n = 4;
    while (row<=n)
    {
       int col = 1, value = row;
       while (col<=row)
       {
           cout << value <<" ";
           value--;
           col++;
       }
       cout << endl;
       row++;
    }
    
    return 0;
}
