<template>
  <section class="grid grid-cols-1 gap-8 items-center md:grid-cols-3">
    <!-- Avatar -->
    <div class="flex justify-center md:col-span-1">
      <img
        src="~/assets/images/avatar.jpg"
        alt="avatar"
        class="rounded-full h-48 w-48 shadow-md"
      >
    </div>

    <!-- Summary and social links -->
    <div class="text-center md:col-span-2 md:text-left">
      <h1 class="mb-4 text-3xl sm:text-4xl">
        Hi, my name is Eric.
      </h1>
      <p class="mb-8">
        I'm a programmer and developer based in Chicago.
        I'm interested in math, economics, languages, and design.
        Outside work I play the violin and a lot of Football Manager.
      </p>
      <Socials class="justify-center md:justify-start" />
    </div>
  </section>
</template>
