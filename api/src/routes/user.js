const {Router} = require('express');
const router = Router();
const userModel = require('../controllers/user');

router.get('/', function (req, res) {
	userModel.get().then((users) => {
		res.send(users);
	});
});

router.post('/', function (req, res) {
	const user = req.body;
	userModel
		.add(user)
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => console.log(error));
});

router.put('/:id', function (req, res) {
	const user = req.body;
	const id = req.params.id;
	userModel
		.edit(user, id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	userModel
		.delete(id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

module.exports = router;
