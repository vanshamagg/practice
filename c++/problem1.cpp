/*
    Given an unsorted array of size n. Array elements are in the range from 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. Our task is to find these two numbers.
    
    Input
    [2, 3, 2, 1, 5]
    Output
    4 2
*/
#include <iostream>
#include <vector>

using namespace std;

int numbers(std::vector<int> arr, int n)
{
    std::vector<int> aux{0};
    aux.resize(n + 1);

    // populating auxillary array
    for (int i = 0; i < arr.size(); i++)
        aux[arr[i]]++;

    int repeating, missing;

    for (int i = 0; i < aux.size(); i++)
    {
        if (aux[i] == 0)
            missing = i;

        if (aux[i] == 2)
            repeating = i;
    }

    cout << "MISSING : " << missing << endl;
    cout << "REPEATING : " << repeating << endl;

    return 0;
}

int main()
{
    std::vector<int> arr{2, 3, 2, 1, 5};
    numbers(arr, 5);

    return 0;
}
