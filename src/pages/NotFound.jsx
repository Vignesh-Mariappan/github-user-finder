import React from 'react';
import { FaSadTear, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='card w-96 bg-white text-primary-content mx-auto'>
      <div className='card-body'>
        <FaSadTear fontSize={`5rem`} style={{ margin: '0 auto', marginBottom: '5px' }} />
        <h2 className='card-title text-6xl  mx-auto mb-5'>Oops!!!</h2>
        <p className='text-3xl  text-center  mb-5'>404 - Page Not Found</p>
        <div className='card-actions justify-center'>
          <Link to='/' className='btn btn-primary'>
            <FaHome className='mr-3' fontSize={`1.5rem`} />
            Back to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
