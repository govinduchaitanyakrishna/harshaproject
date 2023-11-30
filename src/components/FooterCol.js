import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterColStyles = styled.div`
  /* Your existing styles */

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none; /* Add this line to remove underlines */
    color: white; /* Optional: Set the color for the links */
  }
`;

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'links',
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
  ],
}) {
  return (
    <FooterColStyles>
      <div>
        <h1 className='heading'>{heading}</h1>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              {link.type === 'links' ? (
                <Link to={link.path}>{link.title}</Link>
              ) : (
                <a href={link.path} target='_blank' rel='noreferrer'>
                  {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </FooterColStyles>
  );
}
