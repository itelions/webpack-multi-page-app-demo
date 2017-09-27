const setTitle=require('./../../common/setTitle.js');
const footer = require('./../../components/footer/footer.js')
import './index.css'
import './../../components/footer/footer.css'
setTimeout(_=>{
	setTitle('首页')
	console.log(123);
})

window.onload=function(){
	footer.showEnv(document.getElementById('env'))
}