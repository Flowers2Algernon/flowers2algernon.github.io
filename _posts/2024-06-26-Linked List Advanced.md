---
date: 2024-06-26 12:42:38 +0800
categories: [DSA, Linked List]
tags: [dsa, linked list]     # TAG names should always be lowercase
---

### Swap Nodes in Pairs

> Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
>
> ![062601](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062601.jpg)

Use normal simulation:

Initially, the temporary pointer 'cur' points to the dummy head node. 

- The first step is to move the temporary pointer 'cur' to point to the second node.
- The second step is making the 'next' pointer of the first node point to cur's next(saved in the first step).
- The third step is to make the pointer of the second node point to the first node.

![062602](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062602.png)

![062603](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062603.png)

![062604](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062604.png)

![062605](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062605.png)

now we have this:

![062606](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062606.png)

And if you need go to next loop, just set cur = cur.next.next;

```java
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode dummy = new ListNode(0,head);//dummy head node
        ListNode cur = dummy;//Initial the cur point to the dummy head node
        while(cur.next != null && cur.next.next != null){
        ListNode first = cur.next;//first node
        ListNode second = cur.next.next;//second node
            //Three steps to go
            //first step
            cur.next = second;
            //second step
            first.next = second.next;
            //third step
            second.next = first;
            //handle the next loop
            cur = cur.next.next;
        }
        return dummy.next;
    }
}
```

### Remove Nth Node From End of List

> Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.
>
> Example Input & Output:
>
> ![062607](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062607.jpg)
>
> ```
> Input: head = [1,2,3,4,5], n = 2
> Output: [1,2,3,5]
> ```

Typical fast and slow pointer problem.

Define two pointers. Let fast move n+1 steps first, then have fast and slow move synchronously until fast reaches Null. At this point, slow's next is the element to be deleted, then delete it."

We can go through the following steps to solve this question:

- Define fast and slow pointers, with initial values set for the dummy head node.

![062608](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062608.png)

- The fast pointer first moves `n+1` steps. Why not n? Since only this way, when moving simultaneously, the slow pointer can point to the node just before the one that needs to be deleted(or simply remember to move the fast point to the one that needs to be deleted).

![062609](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062609.png)

- Fast and slow pointers move simultaneously until the fast pointer points to the end.

![062610](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062610.png)

![062611](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062611.png)

- Finally, delete the node next to the one pointed to by the slow pointer.

![062612](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062612.png)

Here is the code:

```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0,head);
        ListNode fast = dummy;
        ListNode slow = dummy;
        //move fast pointer n+1 steps
        for(int i=0;i<=n;i++){
            fast = fast.next;
        }
        //fast and slow pointers move simultaneously
        while(fast!=null){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
```

### Intersection of Two Linked Lists

> Given the heads of two singly linked-lists `headA` and `headB`, return *the node at which the two lists intersect*. If the two linked lists have no intersection at all, return `null`.
>
> For example, the following two linked lists begin to intersect at node `c1`:
>
> ![062613](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062613.png)
>
> The test cases are generated such that there are no cycles anywhere in the entire linked structure.
>
> **Note** that the linked lists must **retain their original structure** after the function returns.
>
> - `skipA` - The number of nodes to skip ahead in `listA` (starting from the head) to get to the intersected node.
> - `skipB` - The number of nodes to skip ahead in `listB` (starting from the head) to get to the intersected node.
>
> Example:
>
> ![062614](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062614.png)
>
> ```
> Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
> Output: Intersected at '8'
> Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
> From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
> - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
> ```

###### Method one:

In simple terms, it's about finding the pointer to the intersection node of two linked lists. Be note that the intersection is not about equal values, but about equal pointers.

Assume we have two linked list as following, pointer curA point to A's head node, curB point to B's head node.

![062615](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062615.png)

We calculate the lengths of the two linked lists and find the difference between these lengths. Then we move curA to the position where it aligns with the end of curB, as shown in the following fiture:

![062616](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062616.png)

At this point, we can compare whether curA and curB are the same. If they are not the same, move curA and curB backward simultaneously. Is curA==curB is encountered, the intersection is found.

Otherwise, exit the loop and return a null pointer.

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode curA = headA;
        ListNode curB = headB;
        int lenA = 0, lenB = 0;
        while(curA != null){
            curA = curA.next;
            lenA++;
        }
        while(curB != null){
            curB = curB.next;
            lenB++;
        }
        curA = headA;
        curB = headB;
        //let curA and lenA is the longer or greater
        if (lenB > lenA){
            //swap curA and curB
            ListNode temp = curA;
            curA = curB;
            curB = temp;
            
            //swap lenA and lenB
            int tmpLen = lenA;
            lenA = lenB;
            lenB = tmpLen;
        }
        //figure the diff between lenA and lenB
        int gap = lenA - lenB;
        //let curA and curB in the same position
        while(gap-- > 0){
            curA = curA.next;
        }
        //traver curA and curB, if equals, return
        while(curA != null){
            if(curA == curB){
                return curA;
            }
            curA = curA.next;
            curB = curB.next;
        }
        return null;
    }
}
```

###### Method two:

We can use two iterations to do that. In the first iteration, we will reset the pointer of one linkedlist to the head of another linkedlist after it reaches the tail node. In the second iteration, we will move two pointers until they points to the same node. Our operations in first iteration will help us counteract the difference. So if two linkedlist intersects, the meeting point in second iteration must be the intersection point. If the two linked lists have no intersection at all, then the meeting pointer in second iteration must be the tail node of both lists, which is null.

```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if(headA == null || headB == null) return null;
        
        ListNode a = headA;
        ListNode b = headB;
        
        while(a != b){
            a = a == null? headB : a.next;
            b = b == null? headA : b.next;
        }
        return a;
    }
}
```

**Visualization of this solution:**
**Case 1 (Have Intersection & Same Len):**

```
       a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
       b
```

```
            a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
            b
```

```
                 a
A:     a1 → a2 → a3
                   ↘
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
                 b
```

```
A:     a1 → a2 → a3
                   ↘ a
                     c1 → c2 → c3 → null
                   ↗ b            
B:     b1 → b2 → b3
```

Since `a == b` is true, end loop `while(a != b)`, return the intersection node `a = c1`.

**Case 2 (Have Intersection & Different Len):**

```
            a
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
       b
```

```
                 a
A:          a1 → a2
                   ↘
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
            b
```

```
A:          a1 → a2
                   ↘ a
                     c1 → c2 → c3 → null
                   ↗            
B:     b1 → b2 → b3
                 b
```

```
A:          a1 → a2
                   ↘      a
                     c1 → c2 → c3 → null
                   ↗ b           
B:     b1 → b2 → b3
```

```
A:          a1 → a2
                   ↘           a
                     c1 → c2 → c3 → null
                   ↗      b           
B:     b1 → b2 → b3
```

```
A:          a1 → a2
                   ↘                a = null, then a = b1
                     c1 → c2 → c3 → null
                   ↗           b           
B:     b1 → b2 → b3
```

```
A:          a1 → a2
                   ↘ 
                     c1 → c2 → c3 → null
                   ↗                b = null, then b = a1 
B:     b1 → b2 → b3
       a
```

```
            b         
A:          a1 → a2
                   ↘ 
                     c1 → c2 → c3 → null
                   ↗
B:     b1 → b2 → b3
            a
```

```
                 b         
A:          a1 → a2
                   ↘ 
                     c1 → c2 → c3 → null
                   ↗ 
B:     b1 → b2 → b3
                 a
```

```
A:          a1 → a2
                   ↘ b
                     c1 → c2 → c3 → null
                   ↗ a
B:     b1 → b2 → b3
```

Since `a == b` is true, end loop `while(a != b)`, return the intersection node `a = c1`.

**Case 3 (Have No Intersection & Same Len):**

```
       a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
       b
```

```
            a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
            b
```

```
                 a
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
                 b
```

```
                      a = null
A:     a1 → a2 → a3 → null
B:     b1 → b2 → b3 → null
                      b = null
```

Since `a == b` is true (both refer to null), end loop `while(a != b)`, return `a = null`.

**Case 4 (Have No Intersection & Different Len):**

```
       a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
       b
```

```
            a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
            b
```

```
                 a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                 b
```

```
                      a
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                      b = null, then b = a1
```

```
       b                   a = null, then a = b1
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
```

```
            b                   
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
       a
```

```
                 b
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
            a
```

```
                      b
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                 a
```

```
                           b = null
A:     a1 → a2 → a3 → a4 → null
B:     b1 → b2 → b3 → null
                      a = null
```

Since `a == b` is true (both refer to null), end loop `while(a != b)`, return `a = null`.



Notice that if `list A` and `list B` have the **same length**, this solution will terminate in **no more than 1 traversal**; if both lists have **different lengths**, this solution will terminate in **no more than 2 traversals** -- in the second traversal, swapping `a` and `b` synchronizes `a` and `b` before the end of the second traversal. By synchronizing `a` and `b` I mean both have the same remaining steps in the second traversal so that it's guaranteed for them to reach the first intersection node, or reach null at the same time (technically speaking, in the same iteration) -- see **Case 2 (Have Intersection & Different Len)** and **Case 4 (Have No Intersection & Different Len)**.
