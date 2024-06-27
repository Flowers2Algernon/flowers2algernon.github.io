---
date: 2024-06-26 12:42:38 +0800
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

