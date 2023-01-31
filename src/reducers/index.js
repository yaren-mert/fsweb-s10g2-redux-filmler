import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

console.log(favoriteReducer);
console.log(movieReducer);
const rootReducer = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});
export default rootReducer;
