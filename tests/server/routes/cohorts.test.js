const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../routes')

test('GET / returns cohorts', () => {
  request(server)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
    })
})
