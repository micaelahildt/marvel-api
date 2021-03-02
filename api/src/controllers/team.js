const {Team, Hero} = require('../db');
const ModelCRUD = require('./index');

class TeamModel extends ModelCRUD {
	constructor(model) {
		super(model);
	}
	addRelationTeamHero(idTeam, idHero) {
		const team = this.model.findByPk(idTeam);
		const hero = Hero.findByPk(idHero);
		return Promise.all([team, hero])
			.then((results) => {
				const [team, hero] = results;
				console.log(team, hero);
				return team.addHero(hero);
			})
			.catch((error) => console.log(error));
	}
}

const teamModel = new TeamModel(Team);

module.exports = teamModel;
