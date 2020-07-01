<template>
  <transition name="dialog-fade">
    <!-- @click.self避免冒泡，只有点击自己时才能触发   -->
    <div class="my-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <!-- :style  自定义dialog的宽度和高度 -->
      <div class="my-dialog" :style="{width:width,marginTop:top}">
        <div class="my-dialog_header">
          <slot name="title">
            <span class="my-dialog_title" v-text="title"></span>
          </slot>
          <button class="my-dialog_headerbtn" @click="handleClose">
            <i class="one-icon-close"></i>
          </button>
        </div>
        <div class="my-dialog_body">
          <!-- 默认插槽 -->
          <slot></slot>

        </div>
        <!-- 如果footer不传递内容，则不显示footer -->
        <div class="my-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'myDialog',
  components: {},
  props: {
    title: {
      type: String,
      default: '取消'
    },
    width: { type: String, default: '50%' },
    top: { type: String, default: '15vh' },
    footer: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      //   this.visible = false
      // 父组件使用sync修饰符来获取子组件对于父组件数据的修改方法
      /*这也是为什么我们推荐以 update:myPropName 的模式触发事件取而代之。举个例子，在一个包含 title prop 的 假设的组件中，我们可以用以下方法表达对其赋新值的意图：
        this.$emit('update:title', newTitle)
        然后父组件可以监听那个事件并根据需要更新一个本地的数据 property。例如：
        <text-document
        v-bind:title="doc.title"
        v-on:update:title="doc.title = $event"
        ></text-document>
        为了方便起见，我们为这种模式提供一个缩写，即 .sync 修饰符：
        <text-document v-bind:title.sync="doc.title"></text-document> */
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style scoped lang="less">
.my-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .my-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .my-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .my-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /deep/.my-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  -webkit-animation-duration: calc(1s * 0.75);
  animation-duration: calc(1s * 0.75);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.75);
  animation-duration: calc(var(--animate-duration) * 0.75);
  -webkit-animation: bounceIn;
  animation: bounceIn 1s;
}
.dialog-fade-leave-active {
  -webkit-animation: bounceIn;
  animation: bounceIn 1s reverse;
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
// @keyframes bounceInDown {
//   from,
//   60%,
//   75%,
//   90%,
//   to {
//     -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//     animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//   }

//   0% {
//     opacity: 0;
//     -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
//     transform: translate3d(0, -3000px, 0) scaleY(3);
//   }

//   60% {
//     opacity: 1;
//     -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
//     transform: translate3d(0, 25px, 0) scaleY(0.9);
//   }

//   75% {
//     -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
//     transform: translate3d(0, -10px, 0) scaleY(0.95);
//   }

//   90% {
//     -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
//     transform: translate3d(0, 5px, 0) scaleY(0.985);
//   }

//   to {
//     -webkit-transform: translate3d(0, 0, 0);
//     transform: translate3d(0, 0, 0);
//   }
// }
</style>