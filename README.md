The Missing Computer Science and Coding Interview Bootcamp

## Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

What Dynamic Programming actually refers to is coming up with an optimal solution both: *Outside of the code world just in math in general and planning and making decisions* & *Applying into the world of code and programming as we know it*.

We can use dynamic programming if we have an **optimal substructure** present and **overlapping subproblems**.

1. **Overlapping Subproblems**

A problem is said to have overlapping subproblems if it can be broken down into subproblems which are reused several times.

2. **Optimal Substructure**

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

### Taking Fibonacci Sequence as case study

The Fibonacci Sequence problem exhibits those two properties (Overlapping Subproblems & Optimal Substructure). We will solve it first without dynamic programming and then refactor it using dynamic programming.

#### Solution #1

let's write a simple solution using recursion to calculate the nth number to the nth digit in the Fibonacci sequence. Here's what we need to know in order to implement it recursively:

* Fib(n) = Fib(n-1) + Fib(n-2)
* Fib(2) is 1
* Fib(1) is 1

So, for any number let's say the fifth Fibonacci number, all we do is take the fourth Fibonacci number and add it to the third Fibonacci number. So then, we need to calculate the fourth number which is the third plus the second and we keep going. But we have these two base cases, we know that the first digit is 1 and the second digit is 1.

Time Complexity of this solution using recursion is O(2^N), also called exponential.

#### Solution #2

The problem with solution #1 is that we are repeating things over and over. For example, when we do fib(5) we're calculating fib(4) + fib(3) but then to calculate fib(4) we're doing fib(3) again. **What if we could remember old values?**: The whole point of dynamic programming is using past knowledge to make solving a future problem easier.

**Enter Memoization**

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

**Tabulation: A Bottom Up Approach**

It means we should start with fib(1) and fib(2), add them together then go to fib(3) and add that until we get to fib(n).

Time Complexity for both strategies Memoization & Tabulation is roughly grows linearly in line with N - O(N). However, the space complexity of the memorized version is worse.