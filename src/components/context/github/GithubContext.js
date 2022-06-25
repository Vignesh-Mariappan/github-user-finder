import { createContext, useReducer } from 'react';
import { githubReducer } from './GithubReducer';

// @ts-ignore
// create the github context
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
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
      const response = await fetch(`${process.env.REACT_APP_GITHUB_API_URL}/search/users?${params}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      });

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
