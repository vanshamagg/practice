#include <iostream>

int fact(int val)
{
    static int number_of_calls = 0;
    number_of_calls++;
    std::cout <<"NUMBER OF CALLS TO THIS FUNCTION : " << number_of_calls << std::endl;
    int f = 1;
    for (int i = 2; i <= val; i++)
    {
        f = f * i;
    }
    return f;
}
int main()
{
    auto number = 3;

    std::cout << "FACTORIAL OF " << number << " IS : " << fact(number) << std::endl;
    std::cout << "FACTORIAL OF " << number << " IS : " << fact(number) << std::endl;
    std::cout << "FACTORIAL OF " << number << " IS : " << fact(number) << std::endl;
    std::cout << "FACTORIAL OF " << number << " IS : " << fact(number) << std::endl;
   
    return 0;
}
