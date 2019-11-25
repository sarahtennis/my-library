
exports.up = function(knex, Promise) {
  return knex.schema.createTable("friends", tbl => {
    tbl.increments();
    tbl
        .integer("target_user_id")
        .unsigned()
        .notNullable();
    tbl.foreign("target_user_id").references("users.id");
    tbl
        .integer("friend_user_id")
        .unsigned()
        .notNullable();
    tbl.foreign("friend_user_id").references("users.id");
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("friends");
};
  