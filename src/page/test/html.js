const Test=require('./test.ejs');
const Layout=require('./../../layout/layout.js');
const IndexNav=require('./../index/index_nav.js');
module.exports =Layout(Test(),IndexNav);