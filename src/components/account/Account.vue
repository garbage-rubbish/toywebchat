<template>
  <div class="outer">
    <el-card>
      <header>
        <el-button type="primary" @click="activeCompChange('login')"
          >登陆</el-button
        >
        <el-button type="primary" @click="activeCompChange('regeister')"
          >注册</el-button
        >
      </header>
      <transition name="fold" mode="out-in">
        <component :is="activeComp"></component>
      </transition>
    </el-card>
  </div>
</template>
<script>
import Login from './Login'
import Regeister from './Regeister'
export default {
  data: function () {
    return {
      activeComp: Login,
      tabs: [Login, Regeister]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab);
      console.log(event);
    },
    activeCompChange (str) {
      if (str === 'login') {
        this.activeComp = Login;
      } else {
        this.activeComp = Regeister
      }
    }
  },
  components: {
    Login,
    Regeister
  }

}
</script>
<style scoped>
.outer > div {
  text-align: center;
  padding: 25px;
  background-color: #000000; /* IE6和部分IE7内核的浏览器(如QQ浏览器)下颜色被覆盖 */
  background-color: rgba(0, 0, 0, 0.2);
}
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: 0.5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: 0.5s;
}
@keyframes fold-in {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fold-out {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 100%, 0);
  }
}
</style>