const {Router} = require('express');
const userModel = require('../controllers/user');
const router = Router();
const {Team} = require('../db');

router.get('/team', function (req, res) {
	userModel
		.get({
			include: {
				model: Team,
			},
		})
		.then((users) => {
			res.send(users);
		})
		.catch((e) => {
			console.log(e);
			res.sendStatus(400);
		});
});

router.get('/', function (req, res) {
	userModel
		.get()
		.then((users) => {
			res.send(users);
		})
		.catch(() => res.sendStatus(400));
});

router.post('/', function (req, res) {
	const user = req.body;
	userModel
		.add(user)
		.then(() => res.sendStatus(201))
		.catch(() => res.sendStatus(400));
});

router.put('/:id', function (req, res) {
	const id = req.params.id;
	const user = req.body;
	userModel
		.edit(user, id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	userModel
		.delete(id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

module.exports = router;
