import { combineReducers } from "redux";
import { galleryReducer } from "./reducers/gallery/galleryReducer";

export const rootReducers = combineReducers({
    gallery: galleryReducer,
})

export type rootState = ReturnType<typeof rootReducers>