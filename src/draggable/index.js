const draggable = {
  bind(el) {
    el.style.position = 'fixed'
    el.style.cursor = 'pointer'
    let disx = el.getBoundingClientRect().left
    let disy = el.getBoundingClientRect().top
    let x = 0
    let y = 0
    const maxX = document.body.clientWidth - el.offsetWidth
    const maxY = document.body.clientHeight - el.offsetHeight

    el.$handleMousedown = (e) => {
      disx = e.pageX - x
      disy = e.pageY - y
      document.addEventListener('mousemove', handleMousemove)
      document.addEventListener('mouseup', handleMouseup)
    }

    function handleMousemove(e) {
      el.style.cursor = 'move'
      x = e.pageX - disx
      y = e.pageY - disy
      if (x < 0)
        x = 0

      else if (x > maxX)
        x = maxX

      if (y < 0)
        y = 0

      else if (y > maxY)
        y = maxY

      requestAnimationFrame(() => {
        el.style.left = `${x}px`
        el.style.top = `${y}px`
      })
    }

    function handleMouseup() {
      el.style.cursor = 'pointer'
      document.removeEventListener('mousemove', handleMousemove)
      document.removeEventListener('mouseup', handleMouseup)
    }

    el.addEventListener('mousedown', el.$handleMousedown)
  },
  unbind(el) {
    el.removeEventListener('mousedown', el.$handleMousedown)
  },
}

export default draggable
