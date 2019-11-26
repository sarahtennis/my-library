
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user1', email: 'user1@email.com'},
        {id: 2, username: 'user2', email: 'user2@email.com'}
      ]);
    });
};
