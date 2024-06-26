---
date: 2024-06-26 22:42:38 +0800
categories: [DSA, Linked List]
tags: [dsa, linked list]     # TAG names should always be lowercase
---

### Swap Nodes in Pairs

> Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
>
> ![062601](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062601.jpg)

Use normal simulation:

Initially, the temporary pointer 'cur' points  to the dummy head node. 

- The first step is to move the temporary pointer 'cur' to point to the second node.
- The second step is to make the 'next' pointer of the first node point to cur's next(which was saved in the first step).
- The third step is to make the pointer of the second node point to the first node.

![062602](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062602.png)

![062603](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062603.png)

![062604](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062604.png)

![062605](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062605.png)

![062606](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062606.png)

now we got this:

![062607](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062607.png)

and if you need go to next loop, just set cur = cur.next.next;

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
        //fast and slow pointers move simulatiously
        while(fast!=null){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}
```

simultaneously
