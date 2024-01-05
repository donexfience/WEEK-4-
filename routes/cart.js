var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let fooditems=[
  {
    title:"DHOSHA",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"15$",
    imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oLzbYXWnLIb9FsE3FVtuN6mw4XpzdeVWn08joeu468_ucOHxyGS5L5-PczO02YWxND8&usqp=CAU",
  },
  {
    title:"POROTTA",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"16$",
    imge:"https://static.toiimg.com/photo/76179976.cms",
  },
  {
    title:"FISH CURRY",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"17$",
    imge:"https://fxmed.co.nz/wp-content/uploads/2022/09/4-food-that-weaken-your-immune-system.jpg"
  },
  {
    title:"BIRIYANNI",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"18$",
    imge:"https://www.eatthis.com/wp-content/uploads/sites/4/2022/08/junk-food.jpg?quality=82&strip=1"
  },
  {
    title:"NOODLES",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"19$",
    imge:"https://cdn.shopify.com/s/files/1/0168/5789/0916/t/5/assets/istock596372500-1639427746937.jpeg?v=1639427760",
  },
  {
    title:"PIZZA",
    description:" dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar. Dosas are popular in South Asia as well as around the world.",
    price:"20$",
    imge:"https://cdn.shopify.com/s/files/1/0168/5789/0916/t/5/assets/istock596372500-1639427746937.jpeg?v=1639427760"
  }
];
  res.render('cart', {fooditems});
});

module.exports = router;
