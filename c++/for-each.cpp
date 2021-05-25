#include <iostream>

using namespace std;

int main()
{

    int arr[]{1, 2, 3, 4, 5, 6};

    // normal range based for loop
    for (int val : arr)
    {
        cout << val << endl;
    }

    // range based loop with 'auto' keyword
    for (auto val : arr)
    {
        cout << " " << val << endl;
    }

    //  range based for loop with reference
    for (auto &val : arr)
    {
        cout << " " << val << endl;
    }

    return 0;
}