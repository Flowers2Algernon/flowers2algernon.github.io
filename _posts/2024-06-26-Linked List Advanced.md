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
        while(cur.next!=null&&cur.next.next!=null){
        ListNode first= cur.next;//first node
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

