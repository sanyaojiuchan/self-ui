<template>
  <div class="my-input" :class="{'my-input_suffix':showSuffix}" :style="{width:width}">
      <input  class="my-input_inner" 
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="showPassword?(passwordVisible ? 'text':'password') :type"
      :disabled = 'disabled'
      :name='name'
      :value="value"
      @input="handleInput"
      >
      <span class="my-input_suffix">
          <i class="my-input_icon one-icon-cancelwhite" v-if="clearable && value" @click="cleanVal"></i>
           <i class="my-input_icon " v-if="showPassword && type=='password'" @click="handlePassword"
           :class="{'one-icon-eye_protection':passwordVisible,'one-icon-visible':!passwordVisible}"></i>
      </span>
  </div>
</template>

<script> 
export default {
  name: 'myInput',
  
  props:{
      placeholder:{
          type:String,
          default:''
      },
      type:{
          type:String,
          default:'text'
      },
      disabled:{
          type:Boolean,
          default:false
      },
      name:{
          type:String,
          default:''
      },
      value:{
          type:String,
          default:''
      },
      clearable:{
          type:Boolean,
          default:false
      },
        showPassword:{
            type:Boolean,
            default:false
        },width:{
            type:String,
            default:'10vw'
        }
  },
  data() {
      return {
        //   显示是否显示密码框
          passwordVisible:false
      }
  },
  methods:{
      handleInput(e){
          this.$emit('input',e.target.value)
      },
      cleanVal(){
          this.$emit('input','')
        
      },
      handlePassword(){
          this.passwordVisible = !this.passwordVisible
      }
  },
  computed:{
      showSuffix(){
          return this.clearable|| this.showPassword
      }
  }
};
</script>

<style scoped lang="less">
.my-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .my-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.my-input_suffix {
  .my-input_inner {
    padding-right: 30px;
  }
  .my-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>