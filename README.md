
# tab ES5 通过JS 动态渲染页面
在tabs-ES5目录下

# ES6 模块化开发 tab

## 动态渲染 page 页面组件并实现缓存功能实现思路
思路：
1. 渲染 page 的时候，同时把 page 缓存起来。
2. 点击切换 page 的时候，通过 index, 先查缓存，如果缓存存在，直接返回，否则通过数据和 index 渲染页面，并存到缓存里面。




## tab ES6项目运行
npm i  
npm run dev