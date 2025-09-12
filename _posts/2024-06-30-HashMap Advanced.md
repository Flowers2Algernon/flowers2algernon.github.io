---
date: 2024-06-28 10:00:38 +0800
categories: [DSA, Hash Table]
tags: [dsa, hash table]     # TAG names should always be lowercase
series: "HashMaps"
---

## 4Sum II

> Given four integer arrays `nums1`, `nums2`, `nums3`, and `nums4` all of length `n`, return the number of tuples `(i, j, k, l)` such that:
>
> - `0 <= i, j, k, l < n`
> - `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`
>
> Example:
>
> ```
> Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
> Output: 2
> Explanation:
> The two tuples are:
> 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
> 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
> ```

This problem involves four independent arrays. You just need to find A[i]+B[j]+C[k]+D[I] = 0, without considering cases where four duplicate elements add up to zero.

The problem-solving steps for this question are:

First, define an unordered_map, with the key storing the sum of two numbers a and b, and the value storing the frequency of this sum.

Iterate through arrays A and B, calculate the sum of elements from these two arrays, count the occurrences, and store them in the map.

Define an int varaiable count to keep track of how many times a+b+c+d = 0.

Then iterate through arrays C and D. If 0-(c+d) has appeared in the map, use count to record the value (frequency) corresponding to that key in the map.

Finally, return the count statistic.

```java
public class Solution454 {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        HashMap<Integer, Integer> map1 = new HashMap<>();
        for (int k : nums1) {
            for (int m : nums2) {
                int sum = k + m;
                if (map1.containsKey(sum)) {
                    map1.put(sum, map1.get(sum) + 1);
                } else {
                    map1.put(sum, 1);
                }
            }
        }
        int count = 0;
        for (int i : nums3) {
            for (int j : nums4) {
                if (map1.containsKey(-(i+j))){
                    count = count+map1.get(-(i+j));
                }
            }
        }
        return count;
    }
}
```

## Ransom Note

> Given two strings `ransomNote` and `magazine`, return `true` *if* `ransomNote` *can be constructed by using the letters from* `magazine` *and* `false` *otherwise*.
>
> Each letter in `magazine` can only be used once in `ransomNote`.
>
> Example:
>
> ```
> Input: ransomNote = "a", magazine = "b"
> Output: false
> ```

Use HashMap:

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        HashMap<Character, Integer> map = new HashMap<>();
        for (char c : magazine.toCharArray()) {
            map.put(c,map.getOrDefault(c,0) + 1);
        }
        for (char c : ransomNote.toCharArray()) {
            if (!map.containsKey(c)){
                return false;
            }
            map.put(c, map.get(c) - 1);
            if (map.get(c) < 0){
                return false;
            }
        }
        return true;
    }
}
```

Since `ransomNote` and `magazine` only consist of lowercase English letters. We can use an array to solve this rather than a hash map, reducing time and space complexity.

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        int[] arr = new int[26];
        for (char c : magazine.toCharArray()) {
            arr[c-'a']++;
        }
        for (char c : ransomNote.toCharArray()) {
            arr[c-'a']--;
            if (arr[c-'a'] < 0){
                return false;
            }
        }
        return true;
    }
}
```

## 3Sum

> Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
>
> Notice that the solution set must not contain duplicate triplets.
>
> Example:
>
> ```
> Input: nums = [-1,0,1,2,-1,-4]
> Output: [[-1,-1,2],[-1,0,1]]
> Explanation: 
> nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
> nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
> nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
> The distinct triplets are [-1,0,1] and [-1,-1,2].
> Notice that the order of the output and the order of the triplets does not matter.
> ```

Approach:

First, we fix `i`.

```
Input: nums = [-1,0,1,2,-1,-4]
```

```
[-1,0,1,2,-1,-4]
  i
```

We fix `i` at index `0` at first. Then we have the other two indices, `j` and `k`.

`j` starts from `i+1` and `k` starts from the last index.

```
[-1,0,1,2,-1,-4]
  i j         k
```

We calculate a total of 3 numbers then if the total is 0, that is one of the target triplets.

### How can we decide and move `j` or `k` to the next index?

My strategy is to sort the input array so we can decide which index we should move.

```
[-1,0,1,2,-1,-4]
↓
[-4,-1,-1,0,1,2]
  i  j        k
```

### Why do we need to sort the input array?

We want a small total next time if the total is greater than 0. In that case, we should move `k` to the next because input array is sorted. When `k` moves to the left index, we will get a small total compared with the current total.

Otherwise, if the total is smaller than `0`, we want a big total next time, so we need to move j to the right index to get a big total.

### Simulation

```
[-4,-1,-1,0,1,2]
  i  j        k

nums[i] + nums[j] + nums[k] = -3
```

The sum is less than 0, we should move j to the next.

```
[-4,-1,-1,0,1,2]
  i     j     k

nums[i] + nums[j] + nums[k] = -3

j moves to the next

[-4,-1,-1,0,1,2]
  i       j   k
nums[i] + nums[j] + nums[k] = -2

j moves to the next

[-4,-1,-1,0,1,2]
  i         j k
nums[i] + nums[j] + nums[k] = -1

j moves to the next

[-4,-1,-1,0,1,2]
  i           k
              j
```

Now j and k are the same index, so we stop iteration. For this question, we have to find all triples.

Next, we fix i at index 1. j starts from `i+1,` and k starts from the last index.

```
[-4,-1,-1,0,1,2]
     i  j     k
```

We do the same thing.

```
[-4,-1,-1,0,1,2]
     i  j     k

nums[i] + nums[j] + nums[k] = 0
```

Here, we found that the total 0 and 3 indices are different, so the current combination meets the condition the description says. That is one answer.

```
res = [[-1,-1,2]]
```

When we found the target triplet, there were several ways to move pointers. The easiest way is to move j once.

But there is a problem. What if the next number is the same as the current number like this:

```
[-4,-1,-1,-1,1,2]
     i    j   k

j changed to -1 at index 3.
```

We found [-1, -1, 2] again in this case. It's duplicated.

To avoid this, when we find one of the target triplets, we move j once, but we check the number after we move j. If the number is the same previous number, we continue to move j until we find a different number to avoid duplicate combinations.

Continue move:

```
[-4,-1,-1,0,1,2]
     i    j   k

nums[i] + nums[j] + nums[k] = 1
```

Now the total is greater than 0, we should move k to the right index to get small total.

```
[-4,-1,-1,0,1,2]
     i    j k

nums[i] + nums[j] + nums[k] = 0
```

We found a new triplets that meets the conditions.

```
res = [[-1,-1,2], [-1,0,1]]
```

After that, we do the same thing. `j` and `k` are the same index, so we fix `i` at index `2`. `j` starts from `i + 1` and `k` starts from the last index.

```
[-4,-1,-1,0,1,2]
        i j   k
```

In the end,

```
return [[-1,-1,2], [-1,0,1]]
```

Here is the code:

```java
public class Solution15 {
    public List<List<Integer>> threeSum(int[] nums) {
        ArrayList<List<Integer>> list = new ArrayList<>();
        Arrays.sort(nums);
        for (int i = 0; i < nums.length; i++) {
            //Ignore duplicate i
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            int j = i + 1;
            int k = nums.length - 1;
            while (j < k) {
                int total = nums[i] + nums[j] + nums[k];
                if (total > 0) {
                    k--;
                } else if (total < 0) {
                    j++;
                } else {
                    List<Integer> list1 = new ArrayList<>();
                    list1.add(nums[i]);
                    list1.add(nums[j]);
                    list1.add(nums[k]);
                    list.add(list1);
                    int m = j;
                    j++;
                    while (nums[m] == nums[j] && j < k) {
                        j++;
                    }
                }
            }
        }
        return list;
    }
}
```

## 4Sum

> Given an array `nums` of `n` integers, return *an array of all the **unique** quadruplets* `[nums[a], nums[b], nums[c], nums[d]]` such that:
>
> - `0 <= a, b, c, d < n`
> - `a`, `b`, `c`, and `d` are **distinct**.
> - `nums[a] + nums[b] + nums[c] + nums[d] == target`
>
> You may return the answer in **any order**.
>
> Example:
>
> ```
> Input: nums = [1,0,-1,0,-2,2], target = 0
> Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
> ```
>
