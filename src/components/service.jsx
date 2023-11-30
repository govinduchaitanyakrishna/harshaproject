import React, { useState } from 'react';
import './service.css';

function Service() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const dummyData = [
    {
      id: 1,
      state: 'Andhra Pradesh',
      district: 'Anantapur',
      rainfallMonsoon: 100000.0,
    },
    {
      id:2,
      state:'Hyderabad',
      district:'Telengana',
      rainfallMonsoon:30000.0,
    }
  ];

  const handleSearchInputChange = (event) => {
    const { value } = event.target;
    setSearchInput(value);
    if (value === "")return setFilteredData([]);
    const filteredData = dummyData.filter(
      (item) =>{ 
        if(item.state.toLowerCase().includes(value.toLowerCase()) || item.district.toLowerCase().includes(value.toLowerCase())){
          return item
        }
        return 
      }
    );
    setFilteredData(filteredData);
  };

  return (
    <>
      <div className="serviceContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31122.617875407865!2d80.2291712!3d12.822118399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701320908942!5m2!1sen!2sin"
          style={{ width: '100%', height: '500px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <input
        className="input"
        type="text"
        placeholder="Search for Service..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      {filteredData.map((item) => (
        <div key={item.id} className="service-card">
          <h3>{item.state}</h3>
          <h3>{item.district}</h3>
          <p>{`Recharge from rainfall During Monsoon Season: ${item.rainfallMonsoon}`}</p>
          {/* Add other fields as needed */}
        </div>
      ))}
    </>
  );
}

export default Service;
