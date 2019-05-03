exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, user_id: 2, cohort_id: 1},
        {id: 1, user_id: 1, cohort_id: 1}
      ])
    })
}
