#include <iostream>

int main()
{
    std::cout << "Enter 2 numbers: " << std::endl;
    int v1 = 0, v2 = 0;
    std::cin >> v1 >> v2;

    int sum = v1 + v2;
    std::cout << "sum of " << v1 << " and " << v2 << " is : " << sum << std::endl;

    return 0;
}