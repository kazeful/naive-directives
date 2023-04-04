import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

const resize = {
  handleAddListener(el, binding) {
    if (typeof binding.value !== 'function')
      throw new Error('callback must be a function')

    el.$handleResize = binding.value
    addResizeListener(el, el.$handleResize)
  },
  handleRemoveListener(el) {
    if (el.$handleResize)
      removeResizeListener(el, el.$handleResize)
  },
}

export default {
  bind(el, binding) {
    resize.handleAddListener(el, binding)
  },
  unbind(el) {
    resize.handleRemoveListener(el)
  },
}
