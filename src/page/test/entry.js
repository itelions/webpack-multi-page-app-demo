const footer=require('./../../components/footer/footer.js')

import './test.scss'

window.onload=function(){
	var envDisplay=document.getElementById('environment')
	if(DEVELOPMENT){
		envDisplay.innerHTML="开发环境"
	}else{
		envDisplay.innerHTML="生产环境"
	}
}