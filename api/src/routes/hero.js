const {Router} = require('express');
const heroModel = require('../controllers/hero');
const router = Router();

router.get('/', function (req, res) {
	heroModel
		.get()
		.then((hero) => {
			res.send(hero);
		})
		.catch(() => res.sendStatus(400));
});

router.post('/', function (req, res) {
	const hero = req.body;
	heroModel
		.add(hero)
		.then(() => res.sendStatus(201))
		.catch(() => res.sendStatus(400));
});

router.put('/:id', function (req, res) {
	const id = req.params.id;
	const hero = req.body;
	heroModel
		.edit(hero, id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	heroModel
		.delete(id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

module.exports = router;
