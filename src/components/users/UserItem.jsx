import React from 'react';
// import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card shadow-md bg-info-content text-primary'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-16 h-16'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          {/* <Link className='text-base-content text-opacity-90' to={`/user/${login}`}>
            Visit Profile
          </Link> */}
          <a href={html_url} rel='noreferrer' target='_blank'>
            Visit Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
