#include<iostream>

using namespace std;

int main() {
    int* ptr{new int(9)};
    cout << *ptr << endl;
    delete ptr;
    ptr =  nullptr;
    cout << *ptr << endl;
    return 0;
}