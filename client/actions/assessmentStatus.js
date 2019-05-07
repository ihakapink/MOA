export const REQUEST_ASSESSMENT_STATUSES = 'REQUEST_ASSESSMENT_STATUSES'
export const RECEIVE_ASSESSMENT_STATUSES = 'RECEIVE_ASSESSMENT_STATUSES'

export const requestAssessmentStatuses = () => {
  return {
    type: REQUEST_ASSESSMENT_STATUSES

  }
}
export const receiveAssessmentStatuses = (status) => {
  return {
    type: RECEIVE_ASSESSMENT_STATUSES,
    status
  }
}

