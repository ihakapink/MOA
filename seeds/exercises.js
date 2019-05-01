exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, assessment_id: 1, title: 'https://github.com/dev-academy-challenges/taxonomic-routing'},
        {id: 2, assessment_id: 2, title: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 3, assessment_id: 3, title: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 4, assessment_id: 4, title: 'https://github.com/dev-academy-challenges/knex-relationships-stories'},
        {id: 5, assessment_id: 5, title: 'https://github.com/dev-academy-challenges/pupparazzi'},
        {id: 6, assessment_id: 6, title: 'https://github.com/dev-academy-challenges/ascii-art-reader'},
        {id: 7, assessment_id: 7, title: 'https://github.com/dev-academy-challenges/sweet-as-beers'},
        {id: 8, assessment_id: 8, title: 'https://github.com/dev-academy-challenges/react-to-web-api'},
        {id: 9, assessment_id: 9, title: 'external api'},
        {id: 10, assessment_id: 10, title: 'whole cohort project'},
        {id: 11, assessment_id: 11, title: 'whole cohort project'},
        {id: 12, assessment_id: 12, title: 'https://github.com/dev-academy-challenges/async-redux-stories'},
        {id: 13, assessment_id: 13, title: 'https://github.com/dev-academy-challenges/jwt-auth'},
        {id: 14, assessment_id: 14, title: 'group projects'},
        {id: 15, assessment_id: 15, title: 'group projects'},
        {id: 16, assessment_id: 16, title: 'final project presentations'},
        {id: 17, assessment_id: 17, title: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 18, assessment_id: 18, title: 'final projects'},
        {id: 19, assessment_id: 19, title: 'https://github.com/dev-academy-challenges/lightning-talks'},
        {id: 20, assessment_id: 20, title: 'observation'},
        {id: 21, assessment_id: 21, title: 'observation'},
        {id: 22, assessment_id: 22, title: 'observation'},
        {id: 23, assessment_id: 23, title: 'deep dive with human skills facilitator'},
        {id: 24, assessment_id: 24, title: 'observation'},
      ])
    })
}