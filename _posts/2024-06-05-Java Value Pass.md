---
categories: [Java, Use]
tags: [java]     # TAG names should always be lowercase
title: "Java Value Pass"
date: 2024-06-05
---

The question is [following](https://leetcode.com/problems/find-all-groups-of-farmland/?envType=daily-question&envId=2024-04-20):


This question can use a simple two-for loop + DFS to solve, it's not the point I summarize today.

 The true thing I want to discuss is the Pass by value in Java.

Here is the question BackGround:
```java
public int[][] findFarmland(int[][] land) {  
        boolean[][] visited = new boolean[land.length][land[0].length];             
        ArrayList<Integer[]> integers = new ArrayList<>();                          
        Integer[] temp = new Integer[4];                                            
        int count=0;                                                                
        for (int i = 0; i < land.length; i++) {                                     
            for (int j = 0; j < land[0].length; j++) {                              
                if (land[i][j] == 1&&!visited [i][j]) {                             
                    temp[0] = i;                                                    
                    temp[1] = j;                                                    
                    temp[2] = i;                                                    
                    temp[3] = j;                                                    
                    integers.add(findEachLandCornerElements(land,i,j,visited,temp));
                    count++;                                                        
                    // System.out.println(Arrays.deepToString(integers.toArray())); 
                }                                                                   
            }                                                                       
        }                                                                           
 }                                                               
```

In this situation, whenever I add a signed temp to integers, once the next temp's value changes, the Integer[] in integers also changes--but I just did an add command.

The reason is Java's characteristic: **Pass by Value.**

In Java, the array and object are both pass-by value, when you pass an array or object to another object, you actually just pass a reference, not a whole replicate of the original object.
Thus, when you change an array or object, it will affect all the places that reference it.

In the above code, I create an array called temp and add temp to integers. then, when I change the temp's value, all stored Integer[] in integers will change their value, since the integers store is the temp's reference.

To solve this problem, you should make a new array before adding the temp into integers, once do this, every Integer[] in integers will have a different reference and will not affect each other.
The optimized code:

```java 
public int[][] findFarmland(int[][] land) {
       boolean[][] visited = new boolean[land.length][land[0].length];
       ArrayList<Integer[]> integers = new ArrayList<>();
       int count=0;
       for (int i = 0; i < land.length; i++) {
         for (int j = 0; j < land[0].length; j++) {
           if (land[i][j] == 1&&!visited [i][j]) {
           Integer[] temp = new Integer[4];//each time when we need add, we make a new array
           temp[0] = i;
           temp[1] = j;
           temp[2] = i;
           temp[3] = j;
           integers.add(findEachLandCornerElements(land,i,j,visited,temp));
           count++;
           // System.out.println(Arrays.deepToString(integers.toArray()));
           }
         }
       }
}      
```

  

