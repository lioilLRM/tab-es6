(function(doc){

  function Tab(options) {
    this.oTab = doc.querySelector(options.el)

    // this.oNav = tab.querySelector('.nav')
    // this.oNavItems = this.oNav.querySelectorAll('.nav-item')
    // this.oPage = tab.querySelector('.page')
    // this.oPageItems = this.oPage.querySelectorAll('.page-item')

    this.oNav = doc.createElement('div')
    this.oPage = doc.createElement('div')
    this.oNav.className = 'nav'
    this.oPage.className = 'page'

    this.navItemTpl = doc.getElementById('J_navItemTpl').innerHTML
    this.pageItemTpl = doc.getElementById('J_pageItemTpl').innerHTML

    this.cityData = JSON.parse(doc.getElementById('J_cityData').innerHTML)

    console.log(`this.cityData：`,this.navItemTpl);
    

    this.activeIndex = 0
  }

  Tab.prototype.init = function() {
    console.log(`init：`,);
    this.render()
    this.bindEvent()
  }

  Tab.prototype.render = function() {
    var oFrag = doc.createDocumentFragment()
  this.oNav.innerHTML=  this.renderNav(this.cityData)
    oFrag.appendChild(this.oNav)
    oFrag.appendChild(this.oPage)

    this.oTab.appendChild(oFrag)
  }

  Tab.prototype.renderNav = function(data) {
    var navList = ''
    data.forEach((item, index) => {
      navList+= this.navItemTpl.replace(/{{(.*?)}}/g, function(node, key){
        console.log(`node, key：`,node, key);
        // let obj = {
        //   navStyleClass: !index? 'nav-item active' : 'nav-item', 
        //   navItemTitle: item.city_name
        // }
        // return obj[key]
        return{
            navStyleClass: !index? 'nav-item active' : 'nav-item', 
            navItemTitle: item.city_name
          }[key]
      })
    })
    console.log(`navList：`,navList);
    return navList
  }

  // Tab.prototype.renderList = function(data) {

  //   data&&data.forEach(item => {

  //   })

  // }

  // 事件监听函数应该绑定到什么对象上？
  Tab.prototype.bindEvent = function() {
    this.oNav.addEventListener('click', this.onNavItemClick.bind(this), false)
  }

  Tab.prototype.onNavItemClick = function (event) {
    // 为了兼容IE
    event = event || window.event
    const target = event.target || event.srcElement
    console.log(`event：`,this.oNavItems, target);

    const className = target.className
    if(className === 'nav-item') {
      // this.oNavItems[this.activeIndex].className = 'nav-item'
      // this.oPageItems[this.activeIndex].className = 'page-item'
      this.setActiveTab(this.activeIndex, 'hide')
      
      this.activeIndex = [].indexOf.call(this.oNavItems, target)
      console.log(`this.activeIndex：`,this.activeIndex);

      // this.oNavItems[this.activeIndex].className += ' active'
      // this.oPageItems[this.activeIndex].className += ' active'
      this.setActiveTab(this.activeIndex, 'show')
      
    }

  }

  Tab.prototype.setActiveTab = function(activeIndex, action) {
    switch(action) {
      case 'hide':
        this.oNavItems[activeIndex].className = 'nav-item'
        this.oPageItems[activeIndex].className = 'page-item'
        break;
      case 'show':
        this.oNavItems[activeIndex].className += ' active'
        this.oPageItems[activeIndex].className += ' active'
        break;
    }
  }

  function getTarget(event) {
    event = event || window.event
    const target = event.target || event.srcElement
    return target
  }



  window.Tab = Tab

}(document))