const Test=require('./test.ejs');
const Header=require('./../../components/header/header.ejs')
const Footer=require('./../../components/footer/footer.ejs')
module.exports =Test({
	Header:Header({
		Nav:[]
	}),
	Footer:Footer()
}) 