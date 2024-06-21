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

