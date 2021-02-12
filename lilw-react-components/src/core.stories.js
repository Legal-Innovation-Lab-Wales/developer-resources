import React from 'react';
import { storiesOf } from '@storybook/react';
import './suds.scss'

import Header from './components/header';
import Footer from './components/footer';

storiesOf('Core', module)
  .add('Header', () => <Header a11y_heading_desc={'Component Example'}/>)
  .add('Footer', () => <Footer/>)
  .add('Footer + Additional Logo', () =>
      <Footer additional_logo={ <img alt='Read Contract Logo' src='https://www.readcontract.com/img/readcontract-logo.png'/> }/>);