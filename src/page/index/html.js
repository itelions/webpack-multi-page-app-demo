const Index=require('./index.ejs');
const Header=require('./../../components/header/header.ejs')
const Footer=require('./../../components/footer/footer.ejs')
const IndexNav=require('./index_nav.js');
module.exports =Index({
	Header:Header({
		Nav:IndexNav
	}),
	Footer:Footer()
}) 