import cityData from '../data/cityData'
import '../scss/tab.scss'
import nav from '../components/tab/nav/index'
import page from '../components/tab/page/index'
export default class Tab {
  constructor(app) {
    this.app = app;

    this.oTab = document.createElement('div')
    this.oTab.className = 'tab J_tab'

    this.navComponent = nav()
    this.pageComponent = page()
    this.activeIndex = 0

    this.pageHTMLCache = {}

  }

  init() {
    console.log(`init：`, cityData);
    this.render()
    this.getElements()
    this.navComponent.bindEvent(this.onNavItemClick.bind(this))

  }

  render() {
    console.log(`nav：`,nav().tpl(cityData));
    let oNav =  this.navComponent.tpl(cityData);
    // let oPage = this.pageComponent.tpl(cityData);
    let pageTpl = this.pageComponent.tpl(cityData[this.activeIndex])
    this.pageHTMLCache[this.activeIndex] = pageTpl.pageHTML
    console.log(`oPage：`,pageTpl);
    
    let oFrag = document.createDocumentFragment()
    oFrag.appendChild(oNav)
    oFrag.appendChild(pageTpl.oPage);

    this.oTab.appendChild(oFrag)
    this.app.appendChild(this.oTab)
  }

  getElements() {
    this.oNavItems = document.getElementsByClassName('nav-item')
    this.oPage = document.getElementsByClassName('page')[0]
  }

    onNavItemClick(event) {
      console.log(`event：`,event);
      const ev = event || window.event,
        tar = ev.target || ev.srcElement,
        className = tar.className;

        console.log(`className：`,className);
        if(className === 'nav-item') {
          console.log(`this：`,this.oNavItems);
          this.pageChange(tar)
        }
      
    }

    pageChange(tar) {
      this.oNavItems[this.activeIndex].className = 'nav-item'
      this.activeIndex = [].indexOf.call(this.oNavItems,tar)
      this.oNavItems[this.activeIndex].className+= ' active'

      // this.oPage.innerHTML = this.pageComponent.renderPage(cityData[this.activeIndex])
      this.oPage.innerHTML = this.renderPageHTML(cityData, this.activeIndex)

    }

    renderPageHTML(data, index) {
      if(!this.pageHTMLCache[index]) {
        this.pageHTMLCache[index] = this.pageComponent.renderPage(data[index])
        console.log(`new page：`);

      } else {
        console.log(`from cache：`);
        
      }
      return this.pageHTMLCache[index]
    }

}