
import tpl from './index.tpl'
import './index.scss'

export default ()=> {
  return {
    name: 'page',
    tpl(dataItem) {
      const oPage = document.createElement('div')
      oPage.className = 'page'

      // let list = ''
      // data.forEach((item, index) => {
      //   list += tpl().replace(/{{(.*?)}}/g, (match, key) => {
      //     return {
      //       pageStyleClass: !index? 'page-item active' : 'page-item', 
      //       cityName: item.city_name,
      //       intro: item.intro,
      //       img: item.img,
      //     }[key]
      //   })
      // })
      // oPage.innerHTML = list

      oPage.innerHTML = this.renderPage(dataItem)

      return oPage

    },
    // 渲染页面提取到函数
    renderPage(dataItem) {
      return  tpl().replace(/{{(.*?)}}/g, (match, key) => {
        return {
          cityName: dataItem.city_name,
          intro: dataItem.intro,
          img: dataItem.img,
        }[key]
      })
    }
  }
}