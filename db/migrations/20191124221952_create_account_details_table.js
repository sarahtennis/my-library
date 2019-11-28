
exports.up = function(knex, Promise) {
  return knex.schema.createTable("account_details", tbl => {
    tbl.increments();
    tbl
        .integer("user_id")
        .unsigned()
        .notNullable();
    tbl.foreign("user_id").references("users.id").onDelete('CASCADE');
    tbl
    .string("latitude", 118);
    tbl
    .string("longitude", 118);
    tbl
    .string("avatar", 118);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("account_details");
};
