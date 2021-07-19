const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {favoriteJob} = action.payload;
      const newFavoritesList = state.favoriteJobList.includes(favoriteJob)
        ? [...state.favoriteJobList]
        : [...state.favoriteJobList, favoriteJob];
      return {
        ...state,
        favoriteJobList: newFavoritesList,
      };
    default:
      return state;
  }
};
export default reducer;
