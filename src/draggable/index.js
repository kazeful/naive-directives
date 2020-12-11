const draggable = {
  inserted: function (el) {
    el.style.position = 'fixed'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.getBoundingClientRect().left
      let disy = e.pageY - el.getBoundingClientRect().top
      document.onmousemove = function (e) {
        el.style.cursor = 'move'
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - el.offsetWidth
        let maxY = document.body.clientHeight - el.offsetHeight
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        el.style.cursor = 'auto'
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}
export default draggable
