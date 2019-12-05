import Vue from 'vue'
import Router from 'vue-router'
import Aboute from '@/components/About'
import Custmers from '@/components/Custmers'
import add from '@/components/Add'
import Detail from '@/components/Detail'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: '/aboute',
      name: 'Aboute',
      component: Aboute
    },
    {
      path: '/',
      name: 'Custmers',
      component: Custmers
    },
    {
      path: '/nav',
      name: 'Custmers',
      component: Custmers
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
  ]
})
