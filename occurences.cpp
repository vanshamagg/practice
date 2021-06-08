/*
    COUNT THE OCCURENCES OF EACH ELEMENTS IN AN ARRAY
*/

#include <iostream>
#include <vector>
using namespace std;

int countOccurences(std::vector<int> arr)
{

    std::vector<int> hash(arr.size());

    for (int i = 0; i < arr.size(); i++)
    {
        hash[arr[i]]++;
    }

    for (int i = 0; i < hash.size(); i++)
    {
        cout << i << " HAS " << hash[i] << " OCCURENCES !" << endl;
    }
    return 0;
}
int main()
{
    std::vector<int> arr{1, 1, 2, 2, 2, 2, 3};

    countOccurences(arr);
    return 0;
}