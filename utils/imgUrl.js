export default (file) => {
  try {
    return require(`~/assets/images/${file}`)
  } catch (error) {
    return null
  }
}
