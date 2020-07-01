<template>
 <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'myCheckboxGroup',
    provide(){
        return {CheckboxGroup:this}
    },
    props:{
       value: {
      type: Array
    }
    }
}
</script>

<style scoped lang="less">
  
</style>