#include <iostream>

int main()
{
    int start, end;

    std::cout << "Enter the start and the end " << std::endl;
    std::cin >> start >> end;
    while (start <= end)
    {
        std::cout << start << std::endl;
        start++;
    }
    return 0;
}