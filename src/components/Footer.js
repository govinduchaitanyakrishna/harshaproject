import React from 'react';
import FooterCol from './FooterCol';
import styled from 'styled-components';

const FooterStyles = styled.div`
  background-color: #040720;
  color: white;
  width: 100%;
  padding: 2rem 0;

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .footer__col1,
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }

  .footer__col1__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .copyright {
    
    text-align: center;
    padding: 1rem 0;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 768px) {
    .footer__col1,
    .footer__col2,
    .footer__col3,
    .footer__col4 {
      flex-basis: 45%;
      margin-bottom: 0;
    }

    .footer__col1__title {
      font-size: 3.5rem;
    }

    .copyright {
      .container {
        justify-content: flex-start;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Harshavardhan Govindu</h1>
          <p>
            A web developer and designer from Andhra Pradesh. I always create
            websites with unique designs and ensure good performance.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/home',
                type: 'link',
              },
              {
                type: 'links',
                title: 'About',
                path: '/about',
              },
              {
                type: 'links',
                title: 'Contact',
                path: '/contact',
              },
              {
                type: 'links',
                title: 'Services',
                path: '/services',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Information"
            links={[
              {
                title: '+91 9390046976',
                path: 'tel:+91 9390046976',
              },
              {
                title: 'ghv061101@gmail.com',
                path: 'mailto:ghv061101@gmail.com',
              },
              {
                title: 'Palamaner, Chittor, Andhra Pradesh',
                path: 'https://maps.app.goo.gl/gKzdV5YAtmSNStPB6',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/ghv061101',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/govindu-harshavardhan-611152193/',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/_harsha9106_/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright &copy; 2023 Harshavardhan Govindu</p>
        </div>
      </div>
    </FooterStyles>
  );
}
