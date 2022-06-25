import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';

const UserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const { users, searchUserResults, clearSearchResults } = useContext(GithubContext);

  const handleChange = (event) => setSearchInput(event.target.value);

  const handleClearSubmit = () => clearSearchResults();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!searchInput) alert('Please enter something to search');
    else {
      // search for users
      searchUserResults(searchInput);

      setSearchInput('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-8'>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input className='w-full input input-sm xl:input-lg lg:input-lg md:input-lg pr-20 bg-gray-100 text-black' type='text' placeholder='Search' style={{ outline: 'none', border: 'none' }} value={searchInput} onChange={handleChange} />
            <button className='absolute top-0 right-0 rounded-l-none btn btn-primary btn-sm xl:btn-lg lg:btn-lg md:btn-lg' type='submit'>
              Search
            </button>
          </div>
        </div>
      </form>
      {/* Clear Btn */}
      {users.length > 0 && (
        <button className='btn btn-error btn-sm xl:btn-lg lg:btn-lg md:btn-lg w-32' onClick={handleClearSubmit}>
          Clear
        </button>
      )}
    </div>
  );
};

export default UserSearch;
