<template>
  <div class="flex flex-col">
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-row items-center pb-6"
    >
      <div class="w-1/6 text-blue-400">
        <Icon :name="item.icon" height="2em" width="2em" />
      </div>
      <div class="w-5/6">
        <p v-html="item.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          description: 'I excel when I can apply quantitative techniques to open-ended questions.',
          icon: 'chart-bell-curve'
        },
        {
          id: 2,
          description: 'I am proficient with Python and in particular the NumPy/SciPy and Pandas libraries.',
          icon: 'language-python'
        },
        {
          id: 3,
          description: 'Lately, I am leaning toward R and ggplot2 for data visualization.',
          icon: 'language-r'
        },
        {
          id: 4,
          description: 'For frontend development, I am learning Vue. I used to build static sites with Hugo.',
          icon: 'vuejs'
        },
        {
          id: 5,
          description: 'I can work comfortably with C++, Java, and Stata, and I use <span class="latex">L<span id="latex-a">a</span>T<span id="latex-e">e</span>X</span> extensively.',
          icon: 'desktop-classic'
        }
      ]
    }
  }
}
</script>
