The Missing Computer Science and Coding Interview Bootcamp

## Objectives

* Describe ehat a searching algorithm is
* Implement linear search on arrays
* Implement binary search on sorted arrays
* Implement a naive string searching algorithm
* Implement the KMP string searching algorithm


## Explaining Time Complexity O(log n)
 
*Suppose we are searching for 13:*

* [**2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63**]
* [**2,4,5,9,11,14,15**,~~19,21,25,28,30,50,52,60,63~~]
* [~~2,4,5,9~~,**11,14,15**,~~19,21,25,28,30,50,52,60,63~~]
* [~~2,4,5,9~~,**11**,~~14,15,19,21,25,28,30,50,52,60,63~~]

16 elemnts = 4 "steps" it taks to know that 13 is not there
so, log(16) = 4 | 2^4 = 16


*Suppose we are searching for 32:*

* [**1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35**]
* [~~1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17~~,**18,19,20,21,22,23,24,25,26,27,28,29,30,32,35**]
* [~~1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24~~,**25,26,27,28,29,30,32,35**]
* [~~1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28~~,**29,30,32,35**]
* [~~1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30~~,**32,35**]

32 elements = 5 "steps" it taks to find 32
so, log(32) = 5 | 2^5 = 32


Big-O Cheat Sheet: http://bigocheatsheet.com/