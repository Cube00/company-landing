export function pageypos(){
  const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

  const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

  const scrolled = winScroll / height

  return scrolled
}
