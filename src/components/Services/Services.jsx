import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-card">
            <div className="services-number">{service.s_no}</div>
            <h2 className="services-name">{service.s_name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
