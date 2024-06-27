---
date: 2024-06-27 13:42:38 +0800
categories: [DSA, Hash Table]
tags: [dsa, hash table]     # TAG names should always be lowercase
---

#### What is HashTable

> Official definition: A hash table is a data structure that allows direct access based on the value of the key.

To put it simply, an array is actually a hash table. In a hash table, the key is the index of the array, and you access the elements in the array directly through the index.

See the following picture:

![062701](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062701.png)

So, what problem can a hash table solve? Generally, **hash tables are used to determine whether an element appears in a set quickly**.

For example, to check if a name is in a school's records. Enumerating would have a time complexity of O(n), but using a hash table, it can be done in O(1).

We just need to initialise the hash table by storing all the students' names from the school, and then during a query, we can directly know whether a student is in the school through the index.

Mapping student names to the hash table involves a **hash function**.

#### Hash function

Using the above example, we put the student's name to an index in the hash table, you can quickly determine whether the student is in the school by querying the index.

![062702](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062702.png)

###### What if the value obtained from hashCode is greater than the size of the hash table? 

In this case, we perform a modulo operation on the value to ensure that the mapped index values fall within the hash table. 

###### What if the number of students exceeds the size of the hash table?

Even if the hash function distributes the values evenly, it cannot prevent some student's names from being mapped to the same index in the hash table.

So, we need to know **hash collisions**.

#### Hash collisions

In the following image, the tim and simon both mapped at the index of 1, this situation, we called "hash collisions."

![062703](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062703.png)

#### Solve hash collisions

Generally, there are two methods to resolve hash collisions: chaining and linear probing.

##### Method 1: Chaining

In the above example, Tim and Simon are both stored in index 1. We can use a linked list to store all the colliding elements, this way ,we can find both Tim and Simon through the index.

![062704](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062704.png)

In fact, chaining requires choosing an appropriate size for the hash table so that it neither wastes a lot of memory due to empty array elements nor wastes too much time searching due to excessively long linked lists.

##### Method 2: Linear Probing

When using the linear probing method, you must ensure that the table size is greater than the data size. We need to rely on empty slots in the hash table to resolve collisions.

For example, if there is a collision at a position where Tim is placed, we then look for the next available slot to place Simon's information.

Therefore, the table size must be greater than the data size; otherwise, there will be no empty slots in the hash table to store the colliding data.

![062705](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062705.png)

#### Summary

To summarise, when we need to quickly determine whether an element appears in a set or other box, we should consider using the hash table

However, hashing trades space for time, as we need to use additional arrays, sets, or maps to store the data in order to achieve fast lookups.
