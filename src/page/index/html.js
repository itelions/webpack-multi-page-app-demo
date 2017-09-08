const Index=require('./index.ejs');
const Header=require('./../../components/header/header.ejs')
const Footer=require('./../../components/footer/footer.ejs')
module.exports =Index({Header:Header(),Footer:Footer()}) 