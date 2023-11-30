// Contact.js

import React from 'react';
import { useForm } from 'react-hook-form';
// Make sure the path is correct
import './contact.css'; // Import your CSS file for additional styling

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);

    // Optionally, you can reset the form after submission
    reset();
  };

  return (
    <div className="contact-page">
    
      <div className="contact-form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="error-message">{errors.message.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
