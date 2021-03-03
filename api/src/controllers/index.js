class ModelCRUD {
	constructor(model) {
		this.model = model;
	}
	get(config) {
		return this.model.findAll(config);
	}
	add(model) {
		return this.model.create(model);
	}
	edit(model, id) {
		return this.model.update(model, {
			where: {
				id,
			},
		});
	}
	delete(id) {
		return this.model.destroy({
			where: {
				id,
			},
		});
	}
}

module.exports = ModelCRUD;
