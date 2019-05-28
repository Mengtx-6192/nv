import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Brother from '@/components/brother'
import Parent from '@/components/parent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/brother',
      name: 'Brother',
      component: Brother
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
