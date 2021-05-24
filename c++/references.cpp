#include <iostream>
using namespace std;

int main()
{
    int value{5};
    int &ref{value};
    cout << ref << endl;

    return 0;
}
