<template>
  <ol>
    <li
      v-for="item in items"
      :key="item.id"
      class="timeline-item relative pb-6 pl-6 border-l-2 border-blue-400 last:border-transparent"
    >
      <h5 v-if="item.title">
        {{ item.title }}
      </h5>
      <h6 v-if="item.subtitle" class="text-gray-600 font-medium text-sm">
        {{ item.subtitle }}
      </h6>
      <span v-if="item.info" class="meta-info text-xs">
        {{ [item.info.location, item.info.date].filter(Boolean).join(' \u00B7 ') }}
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          id: 1,
          title: 'Gadjah Mada University',
          subtitle: 'Research Intern',
          info: {
            date: '2019',
            location: 'Yogaykarta, Indonesia'
          }
        },
        {
          id: 2,
          title: 'Sanata Dharma University',
          subtitle: 'Summer Studies Fellow',
          info: {
            date: '2019',
            location: 'Yogyakarta, Indonesia'
          }
        },
        {
          id: 3,
          title: 'University of Illinois at Urbana–Champaign',
          subtitle: 'BA Economics, Mathematics',
          info: {
            date: '2019',
            location: 'Urbana, IL'
          }
        },
        {
          id: 4,
          title: 'Federal Reserve Board',
          subtitle: 'Intern',
          info: {
            date: '2018',
            location: 'Washington, DC'
          }
        },
        {
          id: 5,
          title: 'Pontifical Catholic University of São Paulo',
          subtitle: 'Study Abroad',
          info: {
            date: '2018',
            location: 'São Paulo, Brazil'
          }
        },
        {
          id: 6,
          title: 'Sunnybrook Health Sciences Centre',
          subtitle: 'Student Technologist',
          info: {
            date: '2016–17',
            location: 'Toronto, Canada'
          }
        }
      ]
    }
  }
}
</script>
