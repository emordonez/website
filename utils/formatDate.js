export default (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  options.timeZone = 'UTC'

  return new Date(date).toLocaleDateString('en', options)
}
