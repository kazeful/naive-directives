import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

const resize = {
  handleAddListener(el, binding) {
    if (typeof binding.value !== 'function')
      throw new Error('callback must be a function')

    el.__handleResize__ = binding.value
    addResizeListener(el, el.__handleResize__)
  },
  handleRemoveListener(el) {
    if (el.__handleResize__)
      removeResizeListener(el, el.__handleResize__)
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
