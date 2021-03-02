const {Router} = require('express');
const router = Router();
const teamModel = require('../controllers/team');

router.get('/', function (req, res) {
	teamModel.get().then((teams) => {
		res.send(teams);
	});
});

router.post('/', function (req, res) {
	const team = req.body;
	teamModel
		.add(team)
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => console.log(error));
});

router.post('/:teamId/hero/:heroId', function (req, res) {
	const teamId = req.params.teamId;
	const heroId = req.params.heroId;
	teamModel
		.addRelationTeamHero(teamId, heroId)
		.then(() => {
			res.sendStatus(201);
		})
		.catch((error) => console.log(error));
});

router.put('/:id', function (req, res) {
	const team = req.body;
	const id = req.params.id;
	teamModel
		.edit(team, id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	teamModel
		.delete(id)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => console.log(error));
});

module.exports = router;
