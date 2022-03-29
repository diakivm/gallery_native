import Utility from "../../../utils/Utility";
import { galleryActions, galleryActionsType, galleryState } from "./types"

const initialState: galleryState = {
    photos: [],
    total_pages: 1,
    page: 1,
    isLoading: false,
    error: null,
}


export const galleryReducer = (state = initialState, action: galleryActions): galleryState => {

    switch (action.type) {

        case galleryActionsType.SET_GALLERY:
            return {
                ...state, photos: [
                    ...Utility.getHalfOfArray(state.photos, true),
                    ...Utility.getHalfOfArray(action.payload, true),
                    ...Utility.getHalfOfArray(state.photos, false),
                    ...Utility.getHalfOfArray(action.payload, false)
                ]
            }
            break;

        case galleryActionsType.RESET_GALLERY:
            return { ...state, photos: [], error: null, page: 1, total_pages: 1 }
            break;

        case galleryActionsType.SET_ERROR:
            return { ...state, error: action.payload }
            break;

        case galleryActionsType.SET_PAGE:
            return { ...state, page: action.payload }
            break;

        case galleryActionsType.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
            break;

        case galleryActionsType.SET_TOTAL_PAGES:
            return { ...state, total_pages: action.payload }
            break;

        default:
            return state

    }
}