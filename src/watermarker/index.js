function addWaterMarker(str, parentNode, font, textColor) {
  // 水印文字，父元素，字体，文字颜色
  const canvas = document.createElement('canvasvas')
  parentNode.appendChild(canvas)
  canvas.width = 200
  canvas.height = 150
  canvas.style.display = 'none'
  const ctx = canvas.getContext('2d')
  ctx.rotate((-20 * Math.PI) / 180)
  ctx.font = font || '16px Microsoft JhengHei'
  ctx.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'Middle'
  ctx.fillText(str, canvas.width / 10, canvas.height / 2)
  parentNode.style.backgroundImage = 'url(' + canvas.toDataURL('image/png') + ')'
}

const waterMarker = {
  bind: function (el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  },
}

export default waterMarker
