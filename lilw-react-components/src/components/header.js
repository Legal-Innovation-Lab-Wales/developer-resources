import React from 'react';
import './header.scss';
import lilw_logo_white from './images/lilw-logo-white.png';

export default function Header({ a11y_heading_desc }) {
  return (
    <header>
      <h1 className='a11y-hidden'>{`Legal Innovation Lab Wales - ${ a11y_heading_desc }`}</h1>

      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container'>
          <a className='navbar-logo university-logo' href='https://swansea.ac.uk'>
            <picture>
              <source srcSet='https://intranet.swan.ac.uk/cdn/suds/images/logo/application-custom/logo-white-en.svg' type='image/svg+xml'/>
                <img alt='Swansea University'
                     src='https://intranet.swan.ac.uk/cdn/suds/images/logo/application-custom/logo-white-en.png'
                     srcSet='https://intranet.swan.ac.uk/cdn/suds/images/logo/application-custom/logo-white-en@2x.png'/>
            </picture>
          </a>
          <a className='navbar-logo lilw-logo' href='https://legaltech.wales'>
            <picture>
              <img alt='Legal Innovation Lab Wales' src={lilw_logo_white}/>
            </picture>
          </a>
        </div>
      </nav>
    </header>
  )
}