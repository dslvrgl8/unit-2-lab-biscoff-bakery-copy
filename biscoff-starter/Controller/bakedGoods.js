const bakedGoods = require("../models/bakedgoods");

router.get('/new', (req, res) => {
    res.render("bakedGoods/new.ejs")
})

router.get('/bakedGoods/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const baked = bakedGoods[req.params.id];
    console.log(baked);
    res.render("baked/show.ejs", {baked: baked});
})

// POST
router.post('/', (req, res) => {
	console.log(req.body);
    //  ternary operator...short hand for an if/else statement
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    console.log(req.body)
	bakedGoods.unshift(req.body);
	// redirect to the INDEX route for fruits
	res.redirect('/bakedgoods');
});