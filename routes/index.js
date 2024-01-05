var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const users = [
    { sl: '01', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp', name: 'Donex Fiecne', phone: '9072082624', address: 'calicut thamarassery' },
    { sl: '02', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/webp-to-png.png.webp', name: 'Mary Fience', phone: '+880 017xx-xxxxxx', address: 'calicut thamarassery' },
    { sl: '03', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp', name: 'Ashkar ', phone: '+880 017xx-xxxxxx', address: 'calicut thamarassery' },
    {sl: '04', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp', name: 'muhammad nisab', phone: '+880 017xx-xxxxxx', address: 'calicut thamarassery' },
    { sl: '05', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/webp-to-png.png.webp', name: 'Nevil jak', phone: '+880 017xx-xxxxxx', address: 'calicut thamarasseryr' },
    {sl: '06', image: 'https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp', name: 'Ruzana', phone: '+880 017xx-xxxxxx', address: 'calicut thamarassery' },
];


  res.render('index', {users });
});

module.exports = router;
