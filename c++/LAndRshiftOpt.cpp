#include <iostream> 
using namespace std;
int main()
{
   int i = 12;
   cout <<(17>>1) << endl;
   cout <<(17>>2) << endl;
   cout <<(19<<1) << endl;
   cout <<(21<<2) << endl;

   cout <<(i++) << endl;// 12 , i=13
   cout <<(++i) << endl;//14 
   cout <<(i--) << endl;//14 ,i=13
   cout <<(--i) << endl;//12
   return 0;
}