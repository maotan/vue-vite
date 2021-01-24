import {createRouter, createWebHistory} from "vue-router"
import Home from './pages/Home.vue'
import Foo from './pages/Foo.vue'
import Bar from './pages/Bar.vue'
import HelloWorld from './pages/HelloWorld.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/hello', component: HelloWorld}
  ]

// 创建路由实例
const router = createRouter({
  // 采用 history 模式
  history: createWebHistory(),
  routes, // short for `routes: routes`
});
export default router;