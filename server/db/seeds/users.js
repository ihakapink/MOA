exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Jane', surname: 'Doe', email: 'janedoe@mail.com', hash: '#', role: 'facilitator'},
        {id: 2, name: 'John', surname: 'Doe', email: 'johndoe@mail.com', hash: '#', role: 'student'}
      ])
    })
}
