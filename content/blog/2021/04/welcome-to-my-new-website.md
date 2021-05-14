---
title: 'Welcome to my new website!'
description: "I started learning Vue and found a great project to put it into practice: Rebuilding my website. Here, I'll outline my intentions for this new site and talk a bit about what I've learned so far."
date: 2021-04-10
image: ''
tags: []
katex: true
---

I recently dove into [Vue](https://vuejs.org/) for frontend development, and its speed and easy learning curve have motivated me to touch up anything I can with it.
One such thing is this website: I've neglected it for nearly a year, so what better way to rejuvenate it than to build a new one from scratch?

I'm very satisfied with the progress so far, and Vue with Tailwind CSS is quickly becoming my preferred frontend.
In this post, I'll go over what I'd like to do with this new site and what I've been able to do with Vue so far.

## What to expect

I've never blogged nor written about myself with any consistency, so this site is as good a way as any to start.
I'd like to keep track of what I'm learning and what I'm working on, so most posts will likely fall under these topics:

- **Math and economics.** What I studied in undergrad and what I plan to continue studying in grad school.
- **Language learning.** I have an amateur interest in linguistics and enjoy the challenges of learning new languages.
- **Southeast Asia.** My passion outside the classroom has always been for Philippine culture and history, but ever since living in Indonesia and visiting Singapore I have a wider eye for the whole region.

<v-img src="2021/04/san-isidro.jpg" caption="Hiking in San Isidro, Rizal, 2017. One thing I'd like to finally write about are my thoughts from living in the Philippines and Indonesia."></v-img>

Other things I would like to collect and publish here are my lecture notes, code, past presentations, and more.
All of this and more can be easily done with Vue.

## What I've used so far

This is my first experience with the Vue ecosystem, and my first impression is very favorable.

Think of Vue and other component-oriented frameworks like Legos.
You combine individual bricks with their own form and function into larger and more sophisticated creations.
You can buy Lego sets and follow instructions, but the most fun and productive thinking happens when you build something of your own.

This is my preferred approach.
I grew up playing with Legos every day and loved pushing my creative boundaries with what I could create from the limited set of pieces I had.
It can feel more personal and more rewarding to build something out of your own necessity and invention rather than use something that someone else made and that everyone else is using.

Let's look at a minimal example of Vue in action to see what kind of Lego bricks we can work with:

```html
<div id='app'>
  <h1 @click='toggleText'>
    {{ greeting }}
  </h1>
  <p v-if='showText'>
    {{ message }}
  </p>
</div>
```

```js
var app = new Vue({
  el: '#app',
  data: {
    greeting: 'Hello world!',
    message: 'Now you see me, thanks to Vue!',
    showText: false
  },
  methods: {
    toggleText () {
      this.showText = !this.showText
    }
  }
})
```

`app` is a Vue instance that we mount on the element with id `#app`, and from here Vue can manipulate the DOM on the client side.
For example, we can use

- _directives_, like the `v-if` conditional or `@click` event handler, to make HTML react to data changes and user input; and
- _data binding_, like `{{ greeting }}`, to inject and modify HTML and serve these changes instantly.

<v-img src="2021/04/vue-example.gif" caption="Clicking on the header text fires toggleText, which flips the value of showText to create or destroy the message text."></v-img>

Of course there are plenty of other directives, handlers, and manipulations that Vue provides, but this illustrates its power.
We can use Vue to inject whole components, like the table of contents you see in the margin, and template and route entire sites, like this one.

This is all made even easier by the enormous ecosystem of plugins and frameworks available for Vue, like Nuxt.

<horizontal-rule></horizontal-rule>

This is a static site built with [Nuxt.js](https://nuxtjs.org/), a Vue framework that makes developing server-side rendered applications a breeze.
It's essentially what Next.js is for React, and I found no difficulties in migrating from Hugo.

The Nuxt content module is a git-based headless CMS.
All the site content, like what you're reading right now, exists independent of the frontend as Markdown.
So if I ever want to go back to Hugo or build a new site from scratch, I can do so without ever touching the content.
This reinforces the idea that [content should stay separate from presentation](https://en.wikipedia.org/wiki/Separation_of_content_and_presentation).

In keeping with this principle, I decided to try [Tailwind CSS](https://tailwindcss.com/).
Unlike other frameworks such as Bootstrap or Bulma that come with styled components ready out of the box, Tailwind provides CSS utilities that you can compose to build and style your own components (again much like Lego).

Take for example this simple card:

```vue
<template>
  <div
    class="flex flex-col
    border shadow-md bg-white
    transition-all duration-100 hover:shadow-2xl"
    :class="{ 'md:flex-row md:h-auto': !featured }"
  >
    <!-- rest of template -->
  </div>
<template>
```

<v-img src="2021/04/card-example.png"></v-img>

Each token in the class attribute is a separate CSS declaration:

- `flex flex-col` is equivalent to declaring `display: flex;` then `flex-direction: column;`
- `bg-white` is the same as writing `background-color: white;`
- `hover:` indicates a rule for the element on hover, and so on.

Tailwind utilities are named closely to what they do as a declaration, so I'd recommend this framework only if you have a solid grasp of CSS.
Moreover, this way of writing inline, "atomic" CSS may not seem an immediate improvement if you're used to something like Bootstrap with concise and easy-to-understand class names.

Although this is more verbose and unwieldy to write again and again, the advantage of using it with Vue is that you _don't_ have to repeat yourself.
A reusable component need only be styled once in its definition, then it can be inserted anywhere it's needed.

This is the core of what I'm enjoying about Vue: There is a strict separation of markup, scripts, and styles with an emphasis on modularity and reusability.
From my experience, other UI frameworks tend to either

- provide too many tools and components in an attempt to cover all use cases; or
- stunt creativity, because using the same ready-made components again and again [tends to make things look the same.](https://www.dagusa.com/)

With Vue, I can take a more modular and minimalist approach in line with how I like to design.

<horizontal-rule></horizontal-rule>

Syntax highlighting is done by [Prism.js](https://prismjs.com/), which is already bundled with Nuxt.

```cpp
int fibonacci(int n) {
    if (n <= 0) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;

    std::cout << "The 10th Fibonacci number is ";
    std::cout << fibonacci(n) << std::endl;

    return 0;
}
```

```text
The 10th Fibonacci number is 34
```

It's lightweight (only 2KB minified and gzipped!), supports every language I imagine I'll need, and is easily extended with useful plugins (for example, hover over any of the code blocks above to show what language it is).

I implemented math typesetting with [KaTeX](https://katex.org/), which I have been very satisfied with before.
It's self-contained, so it can be served only on pages that have math expressions, and all expressions are rendered server-side and sent as plain HTML, so the output is consistent across browsers and environments:

> Let $U \subseteq \mathbb{C}$ be an open set and $D$ be a closed disk contained in $U$, with $\gamma$ the boundary of $D$ oriented counterclockwise.
> If $f: U \rightarrow \mathbb{C}$ is analytic, then
> $$
> f(a) = \frac{1}{2\pi i} \oint_\gamma \frac{f(z)}{z - a} \, dz
> $$
> for all $a$ in the interior of $D$.

Although KaTeX can't handle as many LaTeX commands as MathJax can, I favor its speed and the fact that it's sufficient for what I do.

## Future features

Some things I plan to implement next include:

- Breadcrumbs
- Dark mode
- Page transitions
- Categories and taxonomies
- Sitewide search

In the future, I'll write a full-length tutorial on how to make a basic Nuxt blog like this one.
I learned the most just by doing, but I was guided by [Debbie O'Brien's](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/) and [Gilbert Tanner's tutorials](https://gilberttanner.com/blog/creating-a-blog-with-nuxt-content) in particular.
Hopefully, I can distill what I learned from them and from my experience into a guide that can help others in the same way.

<horizontal-rule></horizontal-rule>

A simple personal site like this one is a great way to get started with Vue.
I highly recommend it to anyone looking to learn their first JavaScript framework or for anyone in need of a quick and great-looking frontend!
