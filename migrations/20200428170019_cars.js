exports.up = async function(knex) {
	await knex.schema.createTable("cars", (table) => {
		// table.integer("id").notNull().primary()
		table.increments("id")
		table.text("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
        table.text("tranType")
		table.text("titleStatus")
		
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("cars")
}