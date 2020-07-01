// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// 统一导出
// 导入颜色选择器组件
import Button from './Button'
import Checkbox from './Checkbox'
import CheckboxGroup from './CheckboxGroup'
import Dialog from './Dialog'
import Form from './Form'
import FormItem from './FormItem'
import Input from './Input'
import Radio from './Radio'
import RadioGroup from './RadioGroup'
import Switch from './Switch'
import './fonts/iconfont.css'

// 存储组件列表
const compoents = [  CheckboxGroup,
  Checkbox,
  Button,
  Dialog,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Switch]


// 全局注册所有的组件
const install= function(Vue) {
  compoents.forEach(item=>{
    Vue.component(item.name,item)
  })
}
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default{
  install
}