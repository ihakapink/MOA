import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Container style={{ textAlign: 'center' }}>

          <Col xs={6} md={4} >
            <Header />
            <hr />
            <CohortProgress />
            <hr />
            <Row>
              <Col xs={6} md={6}>
                <ProgressModule />
              </Col>
              <Col xs={6} md={6}>
                <ProgressModule />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <ProgressModule />
              </Col>
              <Col xs={6} md={6}>
                <ProgressModule />
              </Col>
            </Row>
            <DropDownModule />
          </Col>
          <Link to ='/' style={{ color: 'white' }}><Button variant="info" >Logout</Button></Link>
        </Container>
      </React.Fragment>
    )
  }
}
