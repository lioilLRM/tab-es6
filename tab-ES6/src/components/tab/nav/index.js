import tpl from './index.tpl'
import './index.scss'

export default () => {
  return {
    name: 'nav',
    tpl (data) {
      const oNav = document.createElement('div')
      oNav.className = 'nav'
      oNav.innerHTML = this.renderNav(data)

      return oNav
    },

    renderNav(data) {
      let list = ''
      data.forEach((item, index) => {
        list += tpl().replace(/{{(.*?)}}/g, (match, key) => {
          return {
            navStyleClass: !index? 'nav-item active' : 'nav-item',
            navItemTitle: item.city_name
          }[key]
        })
      })
      return list
    },

    bindEvent(onNavItemClick) {
      const oNav = document.getElementsByClassName('nav')[0]
      // oNav.addEventListener('click', this.onNavItemClick.bind(this), false)
      console.log(`this：`,this);
      
      // oNav.addEventListener('click', onNavItemClick.bind(this), false)

      oNav.addEventListener('click', onNavItemClick, false)

    },

    // onNavItemClick(event) {
    //   console.log(`event：`,event);
    //   const ev = event || window.event,
    //     tar = ev.target || ev.srcElement,
    //     className = tar.className;

    //     console.log(`className：`,className);
    //     if(className === 'nav-item') {
          
    //     }
      
    // }
  }
}