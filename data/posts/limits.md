---
title: Limits
author: Henry W
date: 08-16-2023
---

I've been doing some reading & review lately in preparation for the school year, and came across the epsilon-delta definition of a limit in James Stewart's infamous Calculus Textbook. Throughout the years, I've come across this definition quite a bit, but have never spent the time to truly understand it. Although, since it's the summer and I have some time on my hands, I decided to spend a couple hours trying to build a deeper understanding of the definition.

----

## Precise Definition of a Limit

$$ 

\lim_{x \to a} f(x) = L \text{ if } \forall \varepsilon \gt 0, \exists \delta \gt 0 : \text { if } 0 \lt \mid x - a \mid \lt \delta \implies \mid f(x) - L \mid \lt \varepsilon

$$

While this definition may look complex, it's rather simple. Let's break it down.

This mathematical definition states that if the limit of $f(x)$ as $x \to a$ is $L$: $ \lim_{x \to a} f(x) = L $, then for every positive value $ \varepsilon \gt 0 $, there exists an interval centered at $a$ such that if $x$ is in that interval and $x \ne a$, then the distance between $f(x)$ and $L$ is less than $\varepsilon$

We state that $x \ne a$ as, for a limit to be defined as $x \to a$, $f(a)$ does not necessarily have to be defined.

Firstly, let's define some variable $\delta \gt 0$ to represent the size of interval containing $x$, centered at $a$. Meaning that when $x \in (a - \delta, a + \delta), x \ne a$, the distance between $f(x)$ and $L$ is less than $\varepsilon$.

To better represent the idea of $x$ being in this interval, we can:

1. First observe that $x \in (a - \delta, a + \delta)$ is centered at $a$. Thus, it can be rewritten into $(x-a) \in (-\delta, \delta)$.
2. If $(x-a)$ \in $(-\delta, \delta)$, that means that $\mid (x-a) \mid \lt \delta$.
3. Finally, since we have the restriction that $x \ne a$, that means that $(x-a) \ne 0$.
4. Therefore, we can simply write $ 0 \lt \mid x - a \mid \lt \delta $, which means that the distance between $x$ and $a$ is less than some arbitrary number $\delta > 0$.

Observe that this is the first section to our precise limit definition.

Similarly, we can write the distance between $f(x)$ and $L$ as an inequality.
1. The distance between $f(x)$ and $L$ is defined to be $\mid f(x) - L \mid$.
2. Thus, if we state that the distance is less than $\varepsilon$, then we write: $\mid f(x) - L \mid \lt \varepsilon$.

Therefore, the statement: $$ \forall \varepsilon \gt 0, \exists \delta \gt 0 : \text { if } 0 < \mid x - a \mid < \delta \implies \mid f(x) - L \mid \lt \varepsilon $$, means that if such limit truly exists, for any distance $\varepsilon$ there exists an interval of values centered around $a$ such that for every $x$ value within the interval, excluding $x=a$, the distance between $f(x)$ and $L$ is less than the arbitrarily chosen distance $\varepsilon$.

----

### Example: Prove $$ \lim_{x \to -1} (4x+1) = -3 $$ using the Precise Definition of a Limit

Basically, what this question is asking is: For any value $\varepsilon \gt 0$, prove that there exists such a $\delta \gt 0$ that satisfies the definition of a limit. 

Often, such proofs will be divided into two parts: Preliminary Analysis & Formal Proof Writing.

In this case, $a = -1, f(x) = 4x+1$, and $L = -3$.

1. **Preliminary Analysis:** For any $\varepsilon \gt 0$

We want $\mid f(x) - L \mid \lt \varepsilon$ if $0 \lt \mid x - a \mid \lt \delta$. 

In other words: $ \mid 4x+4 \mid \lt \varepsilon $ if $0 \lt \mid x+1 \mid \lt \delta$. 

We see that $4 \mid x + 1 \mid \lt \varepsilon$ if $ \mid x+1 \mid \lt \delta$.

Thus, lets set $\delta = \dfrac{\varepsilon}{4}$.

2. **Formal Proof Writing:** 

$$ \forall \varepsilon \gt 0, \text{ choose } \delta = \dfrac{\varepsilon}{4}$$

Assume $0 \lt \mid x - a \mid \lt \delta$ = $0 \lt \mid x + 1 \mid \lt \delta$.

$$
\implies -\delta \lt x + 1 \lt \delta
$$

$$
\implies \dfrac{-\varepsilon}{4} \lt x + 1 \lt \dfrac{\varepsilon}{4}
$$

$$
\implies -\varepsilon \lt 4(x+1) \lt \varepsilon
$$

$$
\implies \mid 4x+4 \mid \lt \varepsilon
$$

$$
\implies \mid 4x+1 - (-3) \mid \lt \varepsilon
$$

$$
\implies \mid f(x) - L \mid \lt \varepsilon
$$

As required.

Thus, $\forall \varepsilon \gt 0, \text{ when } \delta = \dfrac{\varepsilon}{4} \text{ if } 0 \lt \mid x - a \mid \lt \delta \implies \mid f(x) - L \mid \lt \varepsilon. $

$$ 
\therefore \lim_{x \to -1} 4x + 1 = -3 \text{ exists }
$$

----

## Smaller $$\delta$$

Notice that for any valid $\delta$ value found relative to $\varepsilon$ that proves that such a limit exists, any such value $\delta_p \lt \delta$ is also valid as a component to prove the limit.


This is due to the fact that if $\delta_p \lt \delta$, then the interval $(a-\delta, a+\delta)$ already contains the interval $(a-\delta_p, a+\delta_p)$, and we understand that to prove a limit, all values of $x$ in the interval $(a-\delta, a+\delta)$, except for $x=a$, must satisfy the conditions of the limit.

---- 

## Precise Definition of an Infinite Limit

Sometimes, you may encouter infinite limits. For example, $$ \lim_{x \to 0} \dfrac{1}{x^2} = \infty $$. Even though these limits may not exist, there exists a precise definition for infinite limits.

1. 
$$ 

\lim_{x \to a} f(x) = \infty \text{ if } \forall M \gt 0, \exists \delta \gt 0 : \text { if } 0 \lt \mid x - a \mid \lt \delta \implies f(x) \gt M 

$$

2. 
$$ 

\lim_{x \to a} f(x) = -\infty \text{ if } \forall N \lt 0, \exists \delta \gt 0 : \text { if } 0 \lt \mid x - a \mid \lt \delta \implies f(x) \lt N

$$

Once again, these definitions may seem complex, but it's rather simple. Let's break it down.

Precise Definition 1) states that if the limit of $f(x)$ as $x \to a$ is $\infty: \lim_{x \to a} f(x) = \infty$, then for every positive number $M \gt 0$, there exists an interval centered at $a$ such that if $x$ is in that interval and $x \ne a$, then $f(x) \gt M$.

Precise Definition 2) states that if the limit of $f(x)$ as $x \to a$ is $-\infty: \lim_{x \to a} f(x) = -\infty$, then for every negative number $N \lt 0$, there exists an interval centered at $a$ such that if $x$ is in that interval and $x \ne a$, then $f(x) \lt N$.

The precise definition of an infinite limit is similar to the precise definition of a regular limit, except at this point, we're trying to prove that $f(x)$ increases/decreases unboundedly within a certain interval.

---- 

### Example: Prove $\lim_{x \to 0} \dfrac{1}{x^2} = \infty$ using the Precise Definition of an Infinite Limit

Once again, the proof will be split into 2 parts: Preliminary Analysis & Formal Proof Writing.

In this case, $a = 0$, and $f(x) = x^2$.

1. **Preliminary Analysis:** For any $M \gt 0$

We want $f(x) \gt M$ if $0 \lt \mid x - a \mid \lt \delta $.

In other words, $\dfrac{1}{x^2} \gt M$ if $0 \lt \mid x \mid \lt \delta$.

We see that: $\dfrac{1}{x^2} \gt M \implies \sqrt{\dfrac{1}{M}} \gt x \implies \mid x \mid \lt \dfrac{1}{\sqrt{M}}$ 

Thus, lets set $\delta = \dfrac{1}{\sqrt{M}}$

2. **Formal Proof Writing:**

$\forall M \gt 0, \text{ choose } \delta = \dfrac{1}{\sqrt{M}} $

Assume $0 \lt \mid x - a \mid \lt \delta = 0 \lt \mid x \mid \lt \delta $

$$
\implies 0 \lt x \lt \dfrac{1}{\sqrt{M}}
$$

$$ 
\implies 0 \lt x^2 \lt \dfrac{1}{M}
$$

$$
\implies M \lt \dfrac{1}{x^2}
$$

$$
\implies M \lt f(x)
$$

As required.

Thus, $\forall M \gt 0, \text{ when } \delta = \dfrac{1}{\sqrt{M}} \text{ if } 0 \lt \mid x - a \mid \lt \delta \implies f(x) \gt M.$

$$
\therefore, \lim_{x \to 0} \dfrac{1}{x^2} = \infty
$$

