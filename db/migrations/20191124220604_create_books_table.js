
exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments();
    tbl
        .integer("user_id")
        .unsigned()
        .notNullable();
    tbl.foreign("user_id").references("users.id").onDelete('CASCADE');
    tbl
    .string("isbn", 13)
    .notNullable();
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("books");
};
