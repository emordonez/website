<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    :style="{ height: height, width: width }"
  />
</template>

<script>
// Can construct icons object with require context instead, but would need to
//  to figure out ?inline query string
const icons = {
  chart: require('~/assets/icons/chart-bell-curve.svg?inline'),
  close: require('~/assets/icons/close.svg?inline'),
  email: require('~/assets/icons/email.svg?inline'),
  github: require('~/assets/icons/github.svg?inline'),
  information: require('~/assets/icons/information.svg?inline'),
  laptop: require('~/assets/icons/laptop.svg?inline'),
  linkedin: require('~/assets/icons/linkedin.svg?inline'),
  menu: require('~/assets/icons/menu.svg?inline'),
  post: require('~/assets/icons/post.svg?inline'),
  python: require('~/assets/icons/language-python.svg?inline'),
  r: require('~/assets/icons/language-r.svg?inline'),
  vue: require('~/assets/icons/vuejs.svg?inline')
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    },
    height: {
      type: String,
      default: '1em'
    },
    width: {
      type: String,
      default: '1em'
    }
  },
  computed: {
    iconComponent () {
      return icons[this.name]
    }
  }
}
</script>
