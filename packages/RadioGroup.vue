<template>
 <div class="one-radio-group">
    <slot></slot>
  </div>
</template>



<script>
export default {
    name:'myRadioGroup',
    //向下级组件传递
    // provide 与 inject  用来做祖孙之间得组件通讯
    provide(){
        return {
            RadioGroup:this
        }
    },
    props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    
    value: null
  }
}
</script>

<style scoped>

</style>