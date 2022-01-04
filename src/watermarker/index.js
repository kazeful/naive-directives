function addWaterMarker(parentNode, options = {}) {
  const {
    text = 'naive directives',
    font = '16px Microsoft JhengHei',
    textColor = 'rgba(180, 180, 180, 0.3)',
    width = 200,
    height = 150,
  } = options

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.rotate((-20 * Math.PI) / 180)
  ctx.font = font
  ctx.fillStyle = textColor
  ctx.fillText(text, canvas.width / 10, canvas.height / 2)
  parentNode.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`
}

const waterMarker = {
  bind(el, binding) {
    addWaterMarker(el, binding.value)
  },
}

export default waterMarker
