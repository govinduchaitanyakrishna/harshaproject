import React, { useRef, useState } from 'react';
import "./bite.css"; // Importing CSS styles
import img1 from './imai.jpg';
import Api from './api';

const ComicBites = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const generateImage = async () => {
    try {
        setLoading(true);
        if(prompt === ''){
            console.log('promt is null');
        }else{
            const response = await fetch(
                "https://api-inference.huggingface.co/models/prompthero/openjourney",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${Api}`
                  },
                  body: JSON.stringify({ inputs: prompt }),
                }
              );
        
              if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
              }
            const blob = await response.blob();
            setImage(URL.createObjectURL(blob));
        }
    } catch (error) {
        console.error('Error generating image:', error);
    }finally {
        setLoading(false);
    }
  }

  const handleDownload = () => {
    if(image === null){
        console.log('image is null');
    }else{
        const link = document.createElement('a');
        link.href = image;
        link.download = 'imagepromt-ai.jpg'; 
        link.click();
    }
  };

  const genBtnStyle = {
    opacity: prompt ? 1 : 0.5,
    cursor: prompt ? 'pointer' : 'not-allowed',
  };

  const downBtnStyle = {
    opacity: image ? 1 : 0.5,
    cursor: image ? 'pointer' : 'not-allowed',
  };
  return (
    <div className="comic-bites">
      <section>
      <div className='aiImage'>
      <div className="header">ComicBites<span> Ai Images</span></div>
      <div className='imgArea'>
      <div className="genImage"><img src={image} alt='' /></div>
      </div>
      <div className='search'>
        <div className='downBtn' style={downBtnStyle} onClick={handleDownload}><img src={img1} alt='' /></div>
        <input 
          type='text' 
          className='searchInput' 
          placeholder='Type your prompt...' 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className='genBtn' style={genBtnStyle} onClick={generateImage}>
        {loading ? 'Generating...' : 'Generate'}
        </div>
      </div>

     
    </div>
      </section>
    </div>
  );
}

export default ComicBites;
