export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  const findEl = async (hash, x) => {
    return document.querySelector(hash) ||
      await new Promise((resolve, reject) => {
        if (x > 50) {
          return resolve()
        }
        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
      })
  }

  if (to.hash) {
    const el = await findEl(to.hash)
    if ('scrollBehavior' in document.documentElement.style) {
      // 80 px = 20 rem that TOC is also offset by
      return window.scrollTo(
        { top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }
      )
    } else {
      return window.scrollTo(0, el.offsetTop)
    }
  }

  return { x: 0, y: 0 }
}
