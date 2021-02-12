import React from 'react'
import { storiesOf } from '@storybook/react'
import './suds.scss'
import facebook from './images/facebook.png'
import google from './images/google.png'
import twitter from './images/twitter.png'

import Header from './components/header'
import Footer from './components/footer'
import {Col, Row} from 'react-bootstrap'

storiesOf('Core', module)
  .add('Header', () => <Header a11y_heading_desc={'Component Example'}/>)
  .add('Footer', () => <Footer/>)
  .add('Footer + Extra Logo', () =>
      <Footer logos={
        <Row>
          <Col>
            <img alt='Google' src={google}/>
          </Col>
        </Row>
      }/>)
  .add('Footer + Multiple Logos', () =>
      <Footer logos={
        <Row>
          <Col>
            <img alt='Facebook' src={facebook}/>
          </Col>
          <Col>
            <img alt='Twitter' src={twitter}/>
          </Col>
          <Col>
            <img alt='Google' src={google}/>
          </Col>
        </Row>
      }/>)