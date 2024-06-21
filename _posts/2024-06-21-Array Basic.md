---
date: 2024-06-21 22:42:38 +0800
categories: [Java, Array]
tags: [java, array]     # TAG names should always be lowercase
---

### What is Array?

An array is a collection of the same type of data stored in a contiguous memory space.

note: 

- array's subscripts start at 0.
- the memory space of the array is contiguous.

Since the array's memory space is contiguous, when we need to add or delete some factor in the array, we have to move other factors.

![](C:\Users\Jinhong\Pictures\需用\062101.png)

For example, when we need to delete an element with a subscript of 3, it is inevitable that we need to move the following factors. 

the array's elements cannot be deleted, only overwritten.

##### Two-dimensional array memory space arrangement problem

###### In C++

```c++ 
void test() {
  int array[2][3] = {
    {0,1,2},
    {3,4,5}
  };
   cout << &array[0][0] << " " << &array[0][1] << " " << &array[0][2] << endl;
   cout << &array[1][0] << " " << &array[1][1] << " " << &array[1][2] << endl;
}

int main() {
  test();
}
```

the output is:

```
0x7ffee4065820 0x7ffee4065824 0x7ffee4065828
0x7ffee406582c 0x7ffee4065830 0x7ffee4065834
```

note that the address is hexadecimal, so in C++, the two-dimensional array memory space is a continuous line.

###### In Java

```java
public static void test_arr() {
    int[][] arr = {{1, 2, 3}, {3, 4, 5}, {6, 7, 8}, {9,9,9}};
    System.out.println(arr[0]);
    System.out.println(arr[1]);
    System.out.println(arr[2]);
    System.out.println(arr[3]);
}
```

the output is:

```
[I@7852e922
[I@4e25154f
[I@70dea4e
[I@5c647e05
```

here is not a continuous number, so actually in Java the two-dimensional array memory space is like the following:

 <img src="C:\Users\Jinhong\Pictures\需用\062102.png" style="zoom: 67%;" />

### Binary Search

[Binary Search Problem]: https://leetcode.com/problems/binary-search/

this problem's prerequisites are:

- there are no duplicate elements in the array
- array is sorted

the main reason you can't solve this problem is don't understand the definition of interval.

##### 二分法的两种写法：

###### 第一种写法

定义target在一个左闭右闭的区间里，也就是**[left, right]**

区间的定义决定了二分法的代码应该怎么写：

- While(left<=right)要用<=，因为left==right是有意义的，所以使用<=
- if(nuts[middle]>target) ,则right要赋值为middle-1,因为当前middle位置已经排除了不是target，所以接下来要查找的左区间结束下标位置就是middle-1

```c++
// 版本一
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1; // 定义target在左闭右闭的区间里，[left, right]
        while (left <= right) { // 当left==right，区间[left, right]依然有效，所以用 <=
            int middle = left + ((right - left) / 2);// 防止溢出 等同于(left + right)/2
            if (nums[middle] > target) {
                right = middle - 1; // target 在左区间，所以[left, middle - 1]
            } else if (nums[middle] < target) {
                left = middle + 1; // target 在右区间，所以[middle + 1, right]
            } else { // nums[middle] == target
                return middle; // 数组中找到目标值，直接返回下标
            }
        }
        // 未找到目标值
        return -1;
    }
};
```

- 时间复杂度：O(log n)
- 空间复杂度：O(1)

###### 第二种写法

如果target是在一个左闭右开的区间，也就是[left,right)

- While(left<right) 此时while条件为<, 因为left==right在左闭右开区间中是没有意义的
- if(nuts[middle]>target) 时，right更新为middle, 因为当前nuts[middle]!=target, 去左区间继续寻找，而寻找的左区间时左闭右开区间，所以right更新为middle，因为下一个查询区间不会去比较右端点即nuts[middle]的值

```c++
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size(); // 定义target在左闭右开的区间里，即：[left, right)
        while (left < right) { // 因为left == right的时候，在[left, right)是无效的空间，所以使用 <
            int middle = left + ((right - left) >> 1);
            if (nums[middle] > target) {
                right = middle; // target 在左区间，在[left, middle)中
            } else if (nums[middle] < target) {
                left = middle + 1; // target 在右区间，在[middle + 1, right)中
            } else { // nums[middle] == target
                return middle; // 数组中找到目标值，直接返回下标
            }
        }
        // 未找到目标值
        return -1;
    }
};
```

https://leetcode.com/problems/remove-element/

No 27 remove element

暴力解法是两个for循环

优化解法是使用快慢指针

