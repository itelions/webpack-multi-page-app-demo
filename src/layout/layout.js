const Header=require('./../components/header/header.ejs');
const Footer=require('./../components/footer/footer.ejs');
const Full=require('./layout.ejs')

module.exports=function(Page,nav){
	return Full({
		Header:Header({
			Nav:nav||[]
		}),
		Page:Page,
		Footer:Footer()
	})
}