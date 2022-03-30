import Tab from '../modules/Tab.js'
((doc)=> {
  console.log(`111：`,111);
  const app = doc.getElementById('app');
  let tab = new Tab(app)
  tab.init()



})(document)