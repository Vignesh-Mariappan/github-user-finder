import React from 'react';
import spinner from './assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='mt-12 w-100'>
      <img src={spinner} alt='Loading...' className='text-center mx-auto' width={`150px`} />
    </div>
  );
};

export default Spinner;
