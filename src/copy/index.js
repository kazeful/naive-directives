import { Message } from 'element-ui'

const copy = {
  bind(el, { modifiers, value }) {
    if (modifiers.dblclick)
      el.$eventName = 'dblclick'
    else
      el.$eventName = 'click'

    el.$copyValue = value

    el.handler = () => {
      if (!el.$copyValue)
        return Message.warning('复制内容为空')

      const textarea = document.createElement('textarea')
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.$copyValue
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand('Copy')
      if (result)
        return Message.success('复制成功')

      document.body.removeChild(textarea)
    }
    el.addEventListener(el.$eventName, el.handler)
  },
  componentUpdated(el, { value }) {
    el.$copyValue = value
  },
  unbind(el) {
    el.removeEventListener(el.$eventName, el.handler)
  },
}

export default copy
