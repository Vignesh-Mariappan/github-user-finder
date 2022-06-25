export const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.userResultsData,
        loading: action.payload.loading,
      };
    case 'CLEAR_USERS':
      return {
        ...state,
        users: action.payload.users,
        loading: action.payload.loading,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
