---
date: 2024-06-22 22:42:38 +0800
categories: [DSA, Linked List]
tags: [dsa, linked list]     # TAG names should always be lowercase
---

### Linked List 

#### What is Linked List?

Linked List is a linear data structure in which elements are not stored at a contiguous location, rather they are linked using pointers.

Linked List forms a series of connected nodes, where each node stores the data and the address of the next node.

![062503](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062503.png)

Node Structure: A node is a linked list typically consisting of two two components:

- Data: It holds the actual value or data associated with the node.
- Next Pointer: It stores the memory address(reference) of the next node in the sequence.

Head and Tail:

- Head: The linked list is accessed through the head node, which points to the first node in the list.
- Tail: The last node in the list points to null, indicating the end of the list.

#### Types of linked list?

- Single linked list

Define: In a single linked list, each node contains a reference to the next node in the sequence. Traversing a singly linked list is done in a forward direction.

- Double linked list

Define: In a doubly linked list, each node references the next and previous nodes.

This allows for traversal in both forward and backward directions but requires additional memory for the backward reference.

![062504](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062504.png)

- Circular linked list

Define: In a circular linked list, the last node points back to the head node, creating a circular structure. 

It can be either singly or doubly linked.

![062505](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062505.png)

#### How Linked List Storage in memory?

Linked List stored in memory is not continuous. It uses points to connect each node in memory.

Therefore, the nodes in a linked list are not contiguously distributed in memory but are scattered at various addresses in memory. The allocation mechanism depends on the operating system's memory management.

![062506](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062506.png)

This linked list has a starting node with the value 2 and an ending node with the value 7. The individual nodes are distributed across different memory address spaces and are linked together through pointers.

#### How to define a linked list by youself?

```java
class ListNode{
  int val;
  ListNode next;
  ListNode() {};
  ListNode(int val){this.val=val;}
  ListNode(int val, ListNode next){this.val = val;this.next= next;}
}
```

#### Linked List operation?

##### Delete nodes

To delete a node from the linked list, we need to do the following steps:

- Find the previous node of the node to be deleted.
- Change the next of the previous node.
- Free memory for the node to be deleted.

![062507](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062507.png)

```java
//head is a linked list head nodes, cur is a temporary point used to operate linked list
ListNode cur = head;
//delete node
cur.next = cur.next.next;
```

##### Insert nodes

To insert a node after a given node in a linked list, we need to:

- Check if the given node exists or not.
  - If it does not exist, terminate the process.
  - If the given node exists:
    - Make the element to be inserted as a new node.
    - Change the next pointer of the given node to the new node.
    - Now shift the original next pointer of the given node to the next pointer of the new node.

![062508](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062508.png)

#### Linked List compare to Array?

|             | Insert/delete (Time complex) | Insert/delete (Space complex) | Situation                                                    |
| ----------- | ---------------------------- | ----------------------------- | ------------------------------------------------------------ |
| Array       | O(n)                         | O(1)                          | Data is fixed, frequent searching, infrequent insertions and deletions. |
| Linked List | O(1)                         | O(n)                          | Data is not fixed, infrequent searching, frequent insertions and deletions. |



### Remove Linked List Elements

> Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return *the new head*.

Method 1: Directly use the original linked table for node removal operations:

![062501](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062501.png)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
      //需要对头节点额外做处理
        while(head!=null&&head.val==val){
            head = head.next;
        }
        if(head==null){
            return null;
        }
        ListNode cur = head;
        while(cur!=null&&cur.next!=null){
            if(cur.next.val==val){
                cur.next = cur.next.next;
            }else{
                cur = cur.next;
            }
        }
        return head;
    }
}
```

Method 2 : Setting up a virtual head node in a remove node operation:

![062502](https://raw.githubusercontent.com/Flowers2Algernon/flowers2algernon.github.io/main/assets/images/062502.png)

```java
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        //新增虚拟头节点
        ListNode newNode = new ListNode(0,head);
        ListNode cur = newNode;//cur为临时指针
        while(cur.next!=null){
            if(cur.next.val==val){
                cur.next=cur.next.next;
            }else{
                cur = cur.next;
            }
        }
        return newNode.next;  
    }
}
```

注意：while中循环的条件是cur.next!=null, 因为当前位的cur已经被处理过了



### Design Linked List

> Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
> A node in a singly linked list should have two attributes: `val` and `next`. `val` is the value of the current node, and `next` is a pointer/reference to the next node.
> If you want to use the doubly linked list, you will need one more attribute `prev` to indicate the previous node in the linked list. Assume all nodes in the linked list are **0-indexed**.
>
> Implement the `MyLinkedList` class:
>
> - `MyLinkedList()` Initializes the `MyLinkedList` object.
> - `int get(int index)` Get the value of the `indexth` node in the linked list. If the index is invalid, return `-1`.
> - `void addAtHead(int val)` Add a node of value `val` before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
> - `void addAtTail(int val)` Append a node of value `val` as the last element of the linked list.
> - `void addAtIndex(int index, int val)` Add a node of value `val` before the `indexth` node in the linked list. If `index` equals the length of the linked list, the node will be appended to the end of the linked list. If `index` is greater than the length, the node **will not be inserted**.
> - `void deleteAtIndex(int index)` Delete the `indexth` node in the linked list, if the index is valid.

