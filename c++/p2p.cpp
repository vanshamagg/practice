#include <iostream>

int main()
{
    int val = 10;
    int *p = &val;
    int **pp = &p;

    std::cout << "val direct : " << val << std::endl;
    std::cout << "val via pointer  : " << p << std::endl;
    std::cout << "val via pointer to pointer : " << *pp << std::endl;

    return 0;

}