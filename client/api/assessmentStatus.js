import request from 'superagent'

export function getAssessmentStatus () {
  return request.get('/assessments')
    .then(res => {
      const statuses = res.body.status
      return statuses
    })
    .catch(err => {
      console.error(err)
    })
}
