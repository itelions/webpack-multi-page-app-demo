const setTitle=require('./../../common/setTitle.js');
const axios=require('axios');

import './index.css';
import './../../components/footer/footer.css';

setTitle('首页');

function idAnalysis(id){
	if(id.replace(/\s/g,'').length<1)return
		
	var resultContainer=document.getElementById('result');
	resultContainer.classList.remove("move");
	axios.get('/api/id-analysis',{
		params:{
			id:id
		}
	})
	.then(res=>{
		var {code,data}=res.data;
		var hasData=false;

		if(code&&code=="200"){
			if(data){
				var {city,date,district,sex,province}=data
				resultContainer.innerHTML='结果: '+city+' '+date+' '+district+' '+province+' '+sex;
				hasData=true;
			}
		}

		resultContainer.classList.add("move");
		if(hasData)return
		resultContainer.innerHTML='无查询结果'
	},err=>{
		console.log(err)
	})
}

window.onload=function(){

	document.getElementById('analysis').onclick=function(){
		var targetId=document.getElementById('idText').value;
		idAnalysis(targetId);
	}
}