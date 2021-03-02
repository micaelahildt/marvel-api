const {Router} = require('express');
const router = Router();
const favouriteModel = require('../controllers/favourite');

router.get('/', function (req, res) {
	favouriteModel.get().then((favourite) => {
		res.send(favourite);
	});
});

router.post('/', function (req, res) {
	const favourite = req.body;
	favouriteModel
		.add(favourite)
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => console.log(error));
});

router.put('/:id', function (req, res) {
	const favourite = req.body;
	const id = req.params.id;
	favouriteModel
		.edit(favourite, id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	favouriteModel
		.delete(id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

module.exports = router;
