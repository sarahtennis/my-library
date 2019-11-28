
exports.up = function(knex, Promise) {
  return knex.schema.createTable("messages", tbl => {
    tbl.increments();
    tbl
        .integer("to_user_id")
        .unsigned()
        .notNullable();
    tbl.foreign("to_user_id").references("users.id").onDelete('CASCADE');
    tbl
      .integer("from_user_id")
      .unsigned()
      .notNullable();
    tbl.foreign("from_user_id").references("users.id").onDelete('CASCADE');
    tbl
      .string("content", 500)
      .notNullable();
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("messages");
};
