---
title: Cauchy's integral formula
description: "Cauchy's formula is a central statement in complex analysis."
date: 2021-03-26
image: 
tags: ['math', 'complex analysis']
---

Let $U \subseteq \mathbb{C}$ be an open set and let the closed disk $D = \left\{ z : |z - z_0| \leq r \right\}$ be contained in $U$.
Let $f: U \rightarrow \mathbb{C}$ be analytic and $\gamma$ the boundary of $D$, oriented counterclockwise.
Then for every $a$ in the interior of $D$,

$$f(a) = \displaystyle\frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - a} \, dz.$$

```cpp
#include <iostream>
int main() {
    std::cout << "hello world!" <<  std::endl;
    return 0;
}
```

```python
def main():
    print("hello world!")
```

<v-img src="blog/_smug.png" alt="hi!"></v-img>
