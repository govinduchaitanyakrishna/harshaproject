import React from 'react';

export default function SectionTitle({ heading, subheading }) {
  return (
    <div className="section-title">
      <h2>{heading}</h2>
      <p>{subheading}</p>
    </div>
  );
}
