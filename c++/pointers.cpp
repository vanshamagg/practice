#include <iostream>

int main()
{
    int num = 10;
    int *ptr = &num;
    std::cout << *ptr << std::endl;


    int &number = num;
    std::cout << number << std:: endl;

    int *Nptr = NULL;
    std::cout << Nptr << std::endl;

    void* vptr = &num; 
    std::cout << vptr << std::endl;
    return 0;
}