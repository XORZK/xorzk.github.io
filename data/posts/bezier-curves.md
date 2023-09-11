---
title: Bezier Curves
date: 09-03-2023
author: Henry Wang
tags: cs,graphics
---

## Recursive Definition

Let us denote $B_{P_0, P_1, ..., P_k}$ as the Bezier Curve determined by the selection of distinct points $P_0$, $P_1$,...,$P_k$. Every recursive definition must have a base case, and a recursive case. Thus:

$$
B_{P_0}(t) = P_0 \text{ for } 0 \le t \le 1
$$

$$
B_{P_0, P_1,...,P_{n}}(t) = (1-t) B_{P_0, P_1,...,P_{n-1}}(t) + (t) B_{P_1, P_2,...,P_n}(t)
$$

The recursive case is simply a linear interpolation between two points on Bezier Curves of order $n-1$.

## Explicit Definition

There exists also an explicit formula for a Bezier Curve of order $n$:

$$
B_n(t) = \sum_{i=0}^n \binom{n}{i} (1-t)^{n-i} (t)^{i} P_i
$$

This definition is, in a way, related to the Binomial Theorem.
