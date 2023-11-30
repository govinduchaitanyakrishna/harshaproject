import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ok from "../components/ok.jpg";



const ContactBannerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px;
  height: 40vh; /* Adjust the height as needed */
  background-color: #f3c8b8;
  margin-top: 20px; /* Add margin-top to create space between Navbar and ContactBanner */
  
  .contactBanner__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Center vertically */
    border-radius: 12px 12px;
    padding: 5rem 2rem;
    text-align: center;
  }

  .contactBanner__header {
    font-size: 2rem; /* Adjust the font size as needed */
    margin-bottom: 2rem;
  }

  .custom-button {
    background-color: #ff8c00; /* Change this color to your desired button color */
    color: #fff; /* Text color */
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    .contactBanner__header {
      font-size: 2.8rem;
    }
  }
`;

export default function MyPage() {
  return (
    <>
      
      <ContactBannerStyles>
        <div className="container">
          <div className="contactBanner__wrapper">
            <p>Have any doubt in mind about WaterMap</p>
            <h3 className="contactBanner__header">Let me help you</h3>
            <Button className="custom-button" href="/contact">
              Contact Now
            </Button>
          </div>
        </div>
      </ContactBannerStyles>
    </>
  );
}
