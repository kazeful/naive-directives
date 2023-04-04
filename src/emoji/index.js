function findEle(parent, type) {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

function trigger(el, type) {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const emoji = {
  bind(el, binding) {
    const regRule = binding.value || /[^\u4E00-\u9FA5|\d|a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
    const inpEl = findEle(el, 'input')

    inpEl.$handleReplace = function () {
      const val = inpEl.value
      inpEl.value = val.replace(regRule, '')
      trigger(inpEl, 'input')
    }
    inpEl.addEventListener('keyup', inpEl.$handleReplace)

    el.$inpEl = inpEl
  },
  unbind(el) {
    el.$inpEl.removeEventListener('keyup', el.$inpEl.$handleReplace)
  },
}

export default emoji
