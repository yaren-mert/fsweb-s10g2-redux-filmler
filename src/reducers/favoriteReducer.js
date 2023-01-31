import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return { ...state, displayFavorites: !state.displayFavorites };

    case ADD_FAVORITE: {
      let favoriteMovie = {
        id: action.payload.id,
        title: action.payload.title,
      };

      if (
        state.favorites.find((item) => item.id === action.payload.id) ||
        !state.displayFavorites
      )
        return state;
      else return { ...state, favorites: [...state.favorites, favoriteMovie] };
    }

    case REMOVE_FAVORITE: {
      console.log(action.payload);
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;
