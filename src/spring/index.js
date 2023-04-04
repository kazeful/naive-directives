import CssRender from 'css-render'

const { c } = CssRender()

const style = c([
  c('.scale-down-center', {
    animation: 'scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
  }),

  c('@keyframes scale-down-center', {
    '0%': {
      transform: 'scale(0.5)',
    },
    '80%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  }),
])

export default {
  inserted: (el, binding) => {
    style.mount()
    const eventType = binding.modifiers.dblclick ? 'dblclick' : 'click'
    el.addEventListener(eventType, handler)
    function handler() {
      if (el.$springTimer)
        return
      el.classList.add('scale-down-center')
      el.$springTimer = setTimeout(() => {
        const className = Array.prototype.at.call(el.classList, -1)
        el.classList.remove(className)
        el.$springTimer = null
      }, 400)
    }
  },
  unbind() {
    style.unmount()
  },
}
