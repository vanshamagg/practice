#include <iostream>
#include<cstddef>

using namespace std;

int ptrFunction(nullptr_t ptr) {
    cout << ptr << endl;
    return 0;
} 

int main()
{
    int num{5};
    int *ptr{&num};
    cout << num << '\n';
    cout << sizeof(ptr) << '\n';

    int *ptr2 {NULL};
    cout << ptr2 <<endl;

    int *ptr3{nullptr};
    cout << ptr3 <<endl;

    nullptr_t *ptr4{nullptr};
    cout << ptr4 << endl;

    ptrFunction(nullptr);

    return 0;
}