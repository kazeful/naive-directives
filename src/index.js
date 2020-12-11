// 扩展之后的 clickOutSide
import clickOutSide from './clickOutSide'

// 字体定时颜色
import color from './color'

// 单击/双击 拷贝 依赖 element message
import copy from './copy'

// 拖拽 touch/mouse 还不稳定
// import draggable from './draggable'

// 显示省略号
// import ellipsis from './ellipsis'

// 限制表单输入 比如不能输入表情和特殊字符 只能输入数字或字母等
// import emoji from './emoji'

// 元素点击范围扩展指令
import expandClick from './expandClick'

// 元素长按指令 用户需要按下并按住按钮几秒钟触发相应的事件
import longPress from './longPress'

import spring from './spring'

// 元素说明指令 依赖 element el-tooltip
import tooltip from './tooltip'

// 水印
import waterMarker from './waterMarker'

import waves from './waves'

const directives = {
  clickOutSide,
  color,
  expandClick,
  longPress,
  spring,
  waterMarker,
  waves,
}

// 全局注册指令 均不依赖 element-ui
export default {
  install(Vue) {
    Object.keys(directives).forEach(key => {
      Vue.directive(key, directives[key])
    })
  },
}

export {
  clickOutSide,
  color,
  copy, // extra
  expandClick,
  longPress,
  spring,
  tooltip, // extra
  waterMarker,
  waves,
}
