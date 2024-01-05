var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const items = [
    {
        heading: 'MERN STACK',
        date: '3 days ago',
        content: 'Some placeholder content in a paragraph.',
        smallPrint: 'And some small print.',
        
    },
    {
        heading: 'MEAN STACK',
        date: '3 days ago',
        content: 'mongoDB express angular node js.',
        smallPrint: 'And some muted small print.',
       
    },
    {
        heading: 'PYTHON DJANGO',
        date: '3 days ago',
        content: 'Python is one of the best language of the coding life .',
        smallPrint: 'And some muted small print.',
        
    },
    {
      heading: 'MEAN STACK',
      date: '3 days ago',
      content: 'mongoDB express angular node js.',
      smallPrint: 'And some muted small print.',
     
  },
  {
      heading: 'PYTHON DJANGO',
      date: '3 days ago',
      content: 'Python is one of the best language of the coding life .',
      smallPrint: 'And some muted small print.',
     
  },    {
    heading: 'MEAN STACK',
    date: '3 days ago',
    content: 'mongoDB express angular node js.',
    smallPrint: 'And some muted small print.',
    
},
{
    heading: 'PYTHON DJANGO',
    date: '3 days ago',
    content: 'Python is one of the best language of the coding life .',
    smallPrint: 'And some muted small print.',
   
}
];
  res.render('users',{items});
});

module.exports = router;
