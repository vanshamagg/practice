#include <iostream>
#include <array>

int main()
{

    std::array<int, 5> numbers{1, 2, 3, 4, 5};

    std::cout << numbers.at(4) << std::endl;

    return 0;
}
