---
date: 2024-06-28 10:00:38 +0800
categories: [DSA, Hash Table]
tags: [dsa, hash table]     # TAG names should always be lowercase
---

### 4Sum II

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

### Ransom Note

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

### 3Sum

>Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.
>
>Notice that the solution set must not contain duplicate triplets.
>
>**Example :**
>
>```
>Input: nums = [-1,0,1,2,-1,-4]
>Output: [[-1,-1,2],[-1,0,1]]
>Explanation: 
>nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
>nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
>nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
>The distinct triplets are [-1,0,1] and [-1,-1,2].
>Notice that the order of the output and the order of the triplets does not matter.
>```
