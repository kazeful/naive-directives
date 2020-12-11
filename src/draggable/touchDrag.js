const draggable = {
  inserted: function (el) {
    el.style.position = 'fixed'
    el.ontouchstart = function (e) {
      let disx = e.touches[0].pageX - el.getBoundingClientRect().left
      let disy = e.touches[0].pageY - el.getBoundingClientRect().top
      document.ontouchmove = function (e) {
        el.style.cursor = 'move'
        let x = e.touches[0].pageX - disx
        let y = e.touches[0].pageY - disy
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
      document.ontouchend = function () {
        el.style.cursor = 'auto'
        document.ontouchmove = document.ontouchend = null
      }
    }
  },
}
export default draggable
