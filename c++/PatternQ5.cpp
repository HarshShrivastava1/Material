// Expected Output
// 1
// 2 3
// 4 5 6
// 7 8 9 10
#include <iostream> 
using namespace std;
int main()
{
    int row = 1, count = 1 , n=4 ;
    while (row<=n)
    {
        int col = 1;
        while (col<=row)
        {
            cout << count<< " ";
            count++;
            col++;

        }
        cout << endl;
        row++;
    }
    
    return 0;
}