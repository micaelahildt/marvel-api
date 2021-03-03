const {Router} = require('express');
const teamModel = require('../controllers/team');
const router = Router();
const {Hero} = require('../db');

router.get('/hero', function (req, res) {
	teamModel
		.get({
			include: {
				model: Hero,
			},
		})
		.then((team) => {
			res.send(team);
		})
		.catch(() => res.sendStatus(400));
});

router.get('/', function (req, res) {
	teamModel
		.get()
		.then((team) => {
			res.send(team);
		})
		.catch(() => res.sendStatus(400));
});

router.post('/', function (req, res) {
	const team = req.body;
	teamModel
		.add(team)
		.then(() => res.sendStatus(201))
		.catch(() => res.sendStatus(400));
});

router.post('/:teamId/hero/:heroId', function (req, res) {
	const {teamId, heroId} = req.params;
	teamModel
		.addRelationToTeamHero(teamId, heroId)
		.then(() => res.sendStatus(201))
		.catch(() => res.sendStatus(400));
});

router.put('/:id', function (req, res) {
	const id = req.params.id;
	const team = req.body;
	teamModel
		.edit(team, id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

router.delete('/:id', function (req, res) {
	const id = req.params.id;
	teamModel
		.delete(id)
		.then(() => res.sendStatus(200))
		.catch(() => res.sendStatus(400));
});

module.exports = router;
