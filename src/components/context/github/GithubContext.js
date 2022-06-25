import { createContext, useReducer } from 'react';
import { githubReducer } from './GithubReducer';
import { useNavigate } from 'react-router-dom';

// @ts-ignore
// create the github context
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  let navigate = useNavigate();

  // set the initial state
  let initialState = {
    users: [],
    loading: false,
  };

  // use useReducer react hook and pass the githubReducer, initialState as arguments to get state object and dispatch method
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // @ts-ignore
  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  // searchUserResults - API call to fetch the users
  const searchUserResults = (searchInput) => {
    setLoading();

    const params = new URLSearchParams({
      q: searchInput,
    });

    setTimeout(async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_API_URL}/search/users?${params}`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });

        if (Math.trunc(response.status / 100) > 3) {
          throw new Error('Github API call failed');
        }

        const userResultsData = await response.json();

        // @ts-ignore
        // dispatch function is called and action object is passed, it will inturn call the github reducer function and pass the state and action object to it
        dispatch({
          type: 'GET_USERS',
          payload: {
            userResultsData: userResultsData.items,
            loading: false,
          },
        });
      } catch (error) {
        navigate('/notfound');
        // @ts-ignore
        dispatch({
          type: 'CLEAR_USERS',
          payload: initialState,
        });
      }
    }, 2000);
  };

  // clear search results
  const clearSearchResults = () =>
    // @ts-ignore
    dispatch({
      type: 'CLEAR_USERS',
      payload: initialState,
    });

  return <GithubContext.Provider value={{ users: state.users, loading: state.loading, searchUserResults, clearSearchResults }}>{children}</GithubContext.Provider>;
};

export default GithubContext;
