module.exports = {
	name:'footer',
	env:process.env.NODE_ENV,
	showEnv:function(ele) {
		if(!ele)return
		if(this.env=='development')ele.innerHTML="开发环境";
		if(this.env=='production')ele.innerHTML="生产环境";
	}
}