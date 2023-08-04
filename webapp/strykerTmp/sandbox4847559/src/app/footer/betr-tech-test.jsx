import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { companyName, aboutLogo } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={aboutLogo} alt={companyName} className="w-16 h-18" />
        </div>
      </div>
    </div>
  );
};

export default About;




