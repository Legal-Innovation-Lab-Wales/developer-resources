import React from 'react';
import './footer.scss';
import {Col, Container, Row} from 'react-bootstrap';
import swansea_university_logo from './images/su-logo-blue-2x.png';
import lilw_logo_blue from './images/lilw-logo-blue.png';
import erdf_logo from './images/erdf.png';

function FooterLink({ path, text }) {
  return (
    <li className='footer-links-list-item'><a href={`https://www.swansea.ac.uk/${path}`}>{text}</a></li>
  )
}

export default function Footer({ additional_logo }) {
  return (
    <footer>
      <div className='main'>
        <Container>
          <Row>
            <Col md={8}>
              <div className='footer-links-info'>
                <ul className='footer-links-list'>
                  <FooterLink path={'contact-us'} text={'Contact Us'} />
                  <FooterLink path={'jobs-at-swansea'} text={'Jobs'} />
                  <FooterLink path={'the-university/colleges'} text={'Colleges'} />
                  <FooterLink path={'press-office'} text={'Press'} />
                  <FooterLink path={'about-us/safety-and-security/health-and-safety'} text={'Health & Safety'} />
                  <FooterLink path={'disclaimer-and-copyright'} text={'Disclaimer & Copyright'} />
                  <FooterLink path={'privacyandcookies'} text={'Privacy & Cookies'} />
                  <FooterLink path={'media/Modern-Slavery-Statement.pdf'} text={'Modern Slavery Statement'} />
                  <FooterLink path={'the-university/accessibility/swansea-ac-uk'} text={'Accessibility Statement'} />
                </ul>
                <ul className='footer-info-list'>
                  <li className='footer-info-list-item'>Swansea University is a registered charity, No. 1138342</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='logos'>
        <Row>
          <Col>
            <img alt='Swansea University' src={swansea_university_logo}/>
            <img alt='Legal Innovation Lab Wales' src={lilw_logo_blue}/>
            <img className='erdf' alt='European Regional Development Fund' src={erdf_logo}/>
          </Col>
        </Row>
        <Row>
          <Col>
            { additional_logo }
          </Col>
        </Row>
      </Container>
    </footer>
  )
}