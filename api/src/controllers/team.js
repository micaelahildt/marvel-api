const {Team, Hero} = require('../db');
const ModelCrud = require('./index');

class TeamModel extends ModelCrud {
	constructor(model) {
		super(model);
	}
	addRelationToTeamHero(idTeam, idHero) {
		const team = this.model.findByPk(idTeam);
		const hero = Hero.findByPk(idHero);
		return Promise.all([team, hero]).then((results) => {
			const [team, hero] = results;
			return team.addHero(hero);
		});
	}
}

const teamModel = new TeamModel(Team);

module.exports = teamModel;
