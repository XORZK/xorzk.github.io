---
title: Peano Axioms
description: A set of a couple axioms for natural numbers
date: 04-03-2023
tags: math,logic
---

The Peano axioms define the arithmetical properties of natural numbers ($\in \mathbb{N}$), serving to provide a rigorous foundation for the natural numbers.

## Notion of Equality 

1. Reflexive Equality: $\forall x \in \mathbb{N}, x = x$
2. Symmetric Equality: $\forall x,y \in \mathbb{N} \text{ if } x = y \implies y = x $
3. Transitive Equaliy: $\forall x, y, z \in \mathbb{N} \text { if } x = y \text { and } y = z \implies x = z $
4. $\forall a,b$ if $b \in \mathbb{N}$ and $a=b$, then $a \in \mathbb{N}$ ($\mathbb{N}$ is closed under equality) 

## Peano Axioms

Let $S(n)$ be the successor function for natural numbers, such that $S(n) = n+1$.

1. $0 \in \mathbb{N}$ <br>
2. $\forall x, \text { if } x \in \mathbb{N} \text{ then } S(x) \in \mathbb{N} $
3. $\forall x \in \mathbb{N}, S(x) \ne 0$
4. $\forall x,y \in \mathbb{N} \text{ if } S(x) = S(y) \implies x = y $
5. $\text{If } V \text{ is an inductive set then } \mathbb{N} \subset V$

By axiom #4, $S(x)$ is defined to be an injective function. Therefore, $\mathbb{N}$ must include $\{0, S(0), S(S(0)), S(S(S(0)))...\}$, which includes all the natural numbers that, in hindsight, are known to be in $\mathbb{N}$.

For axiom #5, an inductive set ($V$), is a non-empty set which contains both $x$ and $S(x)$. Therefore, $0 \in V$, and if $x \in V$, then $S(x) \in V$.

Therefore, by the preceding axioms:

$$ 
N \subset \{1,2,3,...\}
$$

$$
\{1,2,3,...\} \subset N 
$$

$$ 
\therefore N = \{1,2,3,4,5,...\}
$$

Using these axioms, we can define mathematical operations such as addition and multiplication.

## Addition

- $\forall a \in \mathbb{N}, a+0 = a$
- $\forall a, b \in \mathbb{N}, a + S(b) = S(a+b)$

For example, when computing $1+1$:

$$ 
1+1 
$$

$$ 
= 1+S(0) 
$$

$$ 
= S(1+0) 
$$

$$ 
= 2 
$$

Much like recursion, $\forall a \in \mathbb{N}, a+0 = a$ is the base case, and everything eventually decomposes to the base case.

$$ f(x, y) = 

\begin{cases}
x, & \text{if $y = 0$} \\ 
y, & \text{if $x = 0$} \\ 
S(x + S(y-1)), & \text{otherwise}
\end{cases}

$$ 

## Multiplication

Multiplication is essentially repeated addition.

## Bibliography

- [The Peano Axioms](http://www2.hawaii.edu/~robertop/Courses/TMP/7_Peano_Axioms.pdf)
