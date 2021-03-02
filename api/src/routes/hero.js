const {Router} = require('express');
const router = Router();
const heroModel = require('../controllers/hero');

router.get('/', function (req, res) {
	heroModel.get().then((teams) => {
		res.send(teams);
	});
});

router.post('/', function (req, res) {
	const hero = req.body;
	heroModel
		.add(hero)
		.then((hero) => {
			res.json(hero);
		})
		.catch((error) => console.log(error));
});

router.put('/:id', function (req, res) {
	const hero = req.body;
	const id = req.params.id;
	heroModel
		.edit(hero, id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	heroModel
		.delete(id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

module.exports = router;
