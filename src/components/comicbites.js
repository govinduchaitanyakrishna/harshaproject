import React from 'react';
import "./bite.css"; // Importing CSS styles
import img1 from './imai.jpg';

const ComicBites = () => {
  return (
    <div className="comic-bites">
      <section>
        <div className='ai-image-generator'>
          <div className='header'>
            ComicBites image <span> generator </span>
          </div>
          <div className='img-loading'>
            <div className='img'>
              <img 
                src={img1} 
                alt=''
                
              />
            </div>
          </div>
          <div className='search-box'>
            <input 
              type='text'
              className='search-input'
              placeholder='Describe What you want see'
            />
            <div className='generate-btn'>Generate</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComicBites;
