import Vue from 'vue'

export default function (el, binding) {
  if (el.hasIcon)
    return
  const iconElement = structureIcon(binding.value)
  el.appendChild(iconElement)
  el.hasIcon = true
}

function structureIcon(attrs) {
  const { className, effect, content, placement } = attrs
  const Tooltip = Vue.extend({
    render(h) {
      return h(
        'el-tooltip',
        {
          props: {
            effect,
            content,
            placement,
          },
        },
        [
          h('i', {
            class: ['el-icon-question', ...(className || [])],
          }),
        ],
      )
    },
  })
  // 创建一个 tooltip 实例并返回 dom 节点
  const component = new Tooltip().$mount()
  return component.$el
}
