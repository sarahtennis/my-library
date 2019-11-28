
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('account_settings').del()
    .then(function () {
      // Inserts seed entries
      return knex('account_settings').insert([
        {id: 1, user_id: 1}
      ]);
    });
};
