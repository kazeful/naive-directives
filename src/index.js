// 扩展之后的 clickOutside
import clickOutside from './clickOutside'

// 字体定时颜色
import color from './color'

// 单击/双击 拷贝 依赖 element message
import copy from './copy'

// import draggable from './draggable'

// 限制表单输入 比如不能输入表情和特殊字符 只能输入数字或字母等
import emoji from './emoji'

// 元素点击范围扩展指令
import expandClick from './expandClick'

// 元素长按指令 用户需要按下并按住按钮几秒钟触发相应的事件
import longPress from './longPress'

// 回弹动画
import spring from './spring'

// 元素说明指令 依赖 element el-tooltip
import tooltip from './tooltip'

// 水印
import waterMarker from './waterMarker'

// 涟漪动画
import waves from './waves'

const directives = {
  clickOutside,
  color,
  expandClick,
  emoji,
  longPress,
  spring,
  waterMarker,
  waves,
}

// 全局注册指令 均不依赖 element-ui
export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}

export {
  clickOutside,
  color,
  copy, // extra
  expandClick,
  emoji,
  longPress,
  spring,
  tooltip, // extra
  waterMarker,
  waves,
}
