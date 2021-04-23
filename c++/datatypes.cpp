#include <iostream>

int main()
{

    int num1 = 10;
    int num2(20);
    int num3 = {30};
    int num4{40};
    int num5;
    std::cout << num1 << num2 << num3 << num4 << std::endl;
    std::cout << num5 << std::endl;
    return 0;
}