export default (file, dir = 'blog') => {
  // Should follow directory structure on Cloudinary
  return `website/${dir}/${file}`
}
