export default (file, dir = 'blog') => {
  return require(`~/static/${dir}/images/${file}`)
}
