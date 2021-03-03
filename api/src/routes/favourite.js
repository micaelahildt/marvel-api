const {Router} = require('express');
const favouriteModel = require('../controllers/favourite');
const router = Router();

router.get('/', function (req, res) {
	favouriteModel
		.get()
		.then((favourite) => {
			res.send(favourite);
		})
		.catch(() => res.sendStatus(400));
});

router.post('/', function (req, res) {
	const favourite = req.body;
	favouriteModel
		.add(favourite)
		.then(() => res.sendStatus(201))
		.catch(() => res.sendStatus(400));
});

router.put('/:id', function (req, res) {
	const id = req.params.id;
	const favourite = req.body;
	favouriteModel
		.edit(favourite, id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	favouriteModel
		.delete(id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

module.exports = router;
