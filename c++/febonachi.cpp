#include <iostream> 
using namespace std;
int main()
{
    int a = 0;
    int b = 1;
    cout << a << " " << b << " ";
    for (int i = 1; i <= 12; i++)
    {
        int fab = a + b;
        cout << fab<<" ";
        a = b;
        b = fab;
  }
  
    
    return 0;
}