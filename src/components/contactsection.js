import React from 'react';
import SectionTitle from './SectionTitle';
import Contact from './contact';

export default function ContactSection() {
  return (
    <div>
      <div className='container'>
        <SectionTitle heading='Contact' subheading='Get in touch' />
        <Contact />
      </div>
    </div>
  );
}
