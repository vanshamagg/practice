#include <iostream>
#include <vector>

using namespace std;

int countOccurence(std::vector<int> arr, int query)
{
    int low = 0, high = arr.size() - 1;

    while ( (arr[low] != query || arr[high] != query) && low < high)
    {

        if (arr[low] != query)
            low++;

        if (arr[high] != query)
            high--;

    }

    const int occurences = high - low + 1;
    cout << "OCCURENCES :- " << occurences << endl;

    return occurences;
}

int main()
{
    std::vector<int> arr{1, 1, 1, 1, 9, 9, 9};
    countOccurence(arr, 10);

    return 0;
}