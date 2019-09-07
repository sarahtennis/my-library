exports.up = function(knex, Promise) {
  return knex.schema.createTable("account_settings", tbl => {
    tbl.increments();
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable();
    tbl.foreign("user_id").references("users.id");
    tbl
      .boolean("account_visible")
      .notNullable()
      .defaultTo(true);
    tbl
      .boolean("view_library_friend_only")
      .notNullable()
      .defaultTo(true);
    tbl
      .boolean("message_friend_only")
      .notNullable()
      .defaultTo(true);
    tbl
      .boolean("location_visible")
      .notNullable()
      .defaultTo(true);
    tbl
      .boolean("lending_friend_only")
      .notNullable()
      .defaultTo(true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("account_settings");
};
