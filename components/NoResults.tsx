import React from 'react';

const NoResults = () => {
  return (
    <div className='home__error-container'>
      <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
      <p>We don't have any cars matching these filters</p>
    </div>
  );
};

export default NoResults;
