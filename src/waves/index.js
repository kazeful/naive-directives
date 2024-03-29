import CssRender from 'css-render'

const { c } = CssRender()

const style = c([
  c('.waves-ripple', {
    position: 'absolute',
    borderRadius: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    backgroundClip: 'padding-box',
    pointerEvents: 'none',
    userSelect: 'none',
    transform: 'scale(0)',
    opacity: 1,
  }),

  c('.waves-ripple.active', {
    opacity: 0,
    transform: 'scale(2)',
    transition: 'opacity 1.2s ease-out, transform 0.6s ease-out',
  }),
])

const waves = {
  bind(el, binding) {
    style.mount()
    const eventType = binding.modifiers.dblclick ? 'dblclick' : 'click'
    el.addEventListener(eventType, handler)
    function handler(e) {
      const opts = Object.assign(
        {
          el, // 波纹作用元素
          type: 'hit', // hit 点击位置扩散 center中心点扩展
          color: 'rgba(0, 0, 0, 0.15)', // 波纹颜色
        },
        binding.value,
      )
      const target = opts.el
      if (target) {
        target.style.position = 'relative'
        target.style.overflow = 'hidden'
        const rect = target.getBoundingClientRect()
        let ripple = target.querySelector('.waves-ripple')
        if (!ripple) {
          ripple = document.createElement('span')
          ripple.className = 'waves-ripple'
          ripple.style.height = ripple.style.width = `${Math.max(rect.width, rect.height)}px`
          target.appendChild(ripple)
        }
        else {
          ripple.className = 'waves-ripple'
        }
        switch (opts.type) {
          case 'center':
            ripple.style.top = `${rect.height / 2 - ripple.offsetHeight / 2}px`
            ripple.style.left = `${rect.width / 2 - ripple.offsetWidth / 2}px`
            break
          default:
            ripple.style.top = `${
              e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop
              || document.body.scrollTop
            }px`
            ripple.style.left = `${
              e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft
              || document.body.scrollLeft
            }px`
        }
        ripple.style.backgroundColor = opts.color
        ripple.className = 'waves-ripple active'
        return false
      }
    }
  },
  unbind() {
    style.unmount()
  },
}

export default waves
