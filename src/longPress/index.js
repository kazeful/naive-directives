const longpress = {
  bind(el, binding) {
    if (typeof binding.value !== 'function')
      throw new Error('callback must be a function')

    const delay = binding.arg ? +binding.arg : 500

    let pressTimer

    el.$start = () => {
      pressTimer = setTimeout(() => {
        binding.value()
      }, delay)
    }

    el.$cancel = () => {
      clearTimeout(pressTimer)
    }

    // 添加触摸事件的监听器
    el.addEventListener('touchstart', el.$start)
    el.addEventListener('touchend', el.$cancel)

    // 添加鼠标事件的监听器
    el.addEventListener('mousedown', el.$start)
    el.addEventListener('mouseup', el.$cancel)
  },
  unbind(el) {
    // 解绑所有事件监听器
    el.removeEventListener('touchstart', el.$start)
    el.removeEventListener('touchend', el.$cancel)
    el.removeEventListener('mousedown', el.$start)
    el.removeEventListener('mouseup', el.$cancel)
  },
}

export default longpress
