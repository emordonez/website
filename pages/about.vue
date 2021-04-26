<template>
  <main>
    <div class="grid grid-cols-1 gap-16 py-6 md:grid-cols-2">
      <!-- About me -->
      <div class="col-span-1 md:col-span-2">
        <h2 class="mb-6 text-2xl">
          A bit about me
        </h2>
        <ul class="list-disc list-outside pl-4">
          <li>I graduated with majors in econ/math and a minor in chemistry. I previously studied medical radiation science.</li>
          <li>I'm Chicago born and based but have also lived in Manila, Toronto, and Yogyakarta.</li>
          <li>In addition to English I can speak Tagalog, Spanish, and Indonesian. I'm currently learning French.</li>
        </ul>
      </div>
      <!-- Skills -->
      <div class="col-span-1">
        <h2 class="mb-6 text-2xl">
          Skills
        </h2>
        <AboutSkills />
      </div>
      <!-- Experience -->
      <div class="col-span-1">
        <h2 class="mb-6 text-2xl">
          Experience
        </h2>
        <AboutTimeline class="pl-3" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'About'
    }
  }
}
</script>
