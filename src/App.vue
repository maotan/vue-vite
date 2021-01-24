<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App11',
  components: {
    HelloWorld
  }
}
</script>
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
    <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/foo">Foo</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/bar">Bar</router-link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/hello">HelloWorld</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>   
  </div>
</template>

<script>
export default {
  
}
</script>
