#include <iostream>

#define NAME "Vansham"
using namespace std;

int main()
{
    cout << NAME << endl;
    
    #ifdef NAME 
        cout << "THIS IS EXECUTING BECAUSE NAME IS DEFINED" <<endl;
    #endif
    
    return 0;
}