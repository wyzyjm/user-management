# userpeoject

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 经验总结
### 组件间传值
    子组件: 
        props:[参数名]
        {{参数名}}
    父组件: 
        使用 参数名 = '值'
### 路由传值
    传值组件
        this.$router.push({path:"./",query:{info:"信息"}})
    接收组件:
        this.$route.query.info
