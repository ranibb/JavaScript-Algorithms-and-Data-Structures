The Missing Computer Science and Coding Interview Bootcamp

## Objectives
* Define what recursion is and how it can be used.
* Understand the two essential components of a recursive functions.
  * Base Case
  * Different Input
* Visualize the call stack to better debug and understand recursive functions.
* Use helper method recursion and pure recursion to solve more difficult problems.

## What is recursion?

A process (a function in our case) that calls itself.

## The call stack
* it's a stack data structure - we'l talk about that later!
* Any time a function is invoked it is placed (pushed) on the top of the call stack.
* Wen JavaScript sees the return keyword or when the function ends, the compliler remove(pop) the top item from the stack.

## How recursive functions work

Invoke the same function with a different input until you reach your base case!

## Helper method recursion

Helper method recursion is a pattern where we have an outer function that;s not recursive which calls an inner function which is recursive