import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GithubFinderNavbar = ({ appTitle }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral-focus text-gray-100'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <Link to='/' className='text-lg font-bold align-middle'>
            <FaGithub className='text-3xl inline pr-2' />
            <span className='hidden xl:inline lg:inline md:inline'>{appTitle}</span>
          </Link>
        </div>
      </div>

      <div className='flex-1 px-2 mx-2'>
        <div className='flex justify-end'>
          <Link to='/' className='btn btn-ghost btn-small'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost btn-small'>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

GithubFinderNavbar.defaultProps = {
  appTitle: 'Github Finder',
};

GithubFinderNavbar.propTypes = {
  appTitle: PropTypes.string,
};

export default GithubFinderNavbar;
