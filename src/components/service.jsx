import React,{useState} from 'react';
import "./service.css";
import styled from 'styled-components';


function Service() {

const [searchInput, setSearchInput] = useState('');
const [filteredData, setFilteredData] = useState([]);
const dummyData = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is a description of Product 1.',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is a description of Product 2.',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is a description of Product 3.',
  },
];
const handleSearchInputChange = (event) => {
  const { value } = event.target;
  setSearchInput(value);
  const filteredData = dummyData.filter((item) => {
    return item.title.toLowerCase().includes(value.toLowerCase());
  });
  setFilteredData(filteredData);
};
  return (
    <>
      <div className="serviceContainer">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31122.617875407865!2d80.2291712!3d12.822118399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701320908942!5m2!1sen!2sin" style={{width:"100%",height:"500px"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <input
        className='input'
        type="text"
        placeholder="Search for Service..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      {filteredData.map((item) => (
        <div key={item.id} className='service-card'>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default Service;
