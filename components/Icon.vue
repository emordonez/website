<template>
  <component
    :is="iconComponent"
    role="img"
    class="inline-block fill-current"
    :style="{ height: height, width: width }"
  />
</template>

<script>
const icons = {}
const requireComponents = require.context('~/assets/icons?inline', false, /\.svg$/)

requireComponents.keys().forEach((fileName) => {
  const iconName = fileName.replace(/^\.\/(.+)\.svg$/, '$1')
  const componentConfig = requireComponents(fileName)
  icons[iconName] = componentConfig.default || componentConfig
})

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
