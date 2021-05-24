#include <iostream>

using namespace std;

int main()
{

    const int value{7};
    const int *ptr{&value};
    cout << *ptr << endl;

    int value2{2};
    int *const ptr2{&value2};
    ptr2 = &value;

    const int value3{3};
    const int *const ptr[&value3];
    return 0;
}