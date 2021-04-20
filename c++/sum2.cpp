#include <iostream>

int main()
{
    int sum = 0, val = 0;

    std::cout << "Enter some numbers \n";

    while (std::cin >> val)
    {
        sum += val;
    }

    std::cout << "\n The sum of input numbers is --> " << sum << std::endl;

    return 0;
}