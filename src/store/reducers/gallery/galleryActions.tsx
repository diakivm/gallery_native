import { Dispatch } from "react";
import galleryService from "../../../API/galleryService";
import IPhoto from "../../../models/IPhoto";
import Dalay from "../../../utils/Dalay";
import {
    galleryActions,
    galleryActionsType,
    resetGallery,
    setGallery,
    setGalleryError,
    setGalleryIsLoading,
    setGalleryPage,
    setTotalPages,
} from "./types";


const setGalleryAction = (gallery: IPhoto[]): setGallery => {
    return {
        type: galleryActionsType.SET_GALLERY,
        payload: gallery
    }
}

const resetGalleryAction = (): resetGallery => {
    return {
        type: galleryActionsType.RESET_GALLERY,
    }
}
const setIsLoadingAction = (isLoading: boolean): setGalleryIsLoading => {
    return {
        type: galleryActionsType.SET_IS_LOADING,
        payload: isLoading
    }
}
const setErrorAction = (error: string): setGalleryError => {
    return {
        type: galleryActionsType.SET_ERROR,
        payload: error
    }
}
const setPageAction = (page: number): setGalleryPage => {
    return {
        type: galleryActionsType.SET_PAGE,
        payload: page
    }
}
const setTotalPagesAction = (pages: number): setTotalPages => {
    return {
        type: galleryActionsType.SET_TOTAL_PAGES,
        payload: pages
    }
}



export function fetchGallery(page: number) {
    return async (dispatch: Dispatch<galleryActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await galleryService.getGallery(page)
            await Dalay.wait(2)
            dispatch(setGalleryAction(response.data))
            dispatch(setPageAction(page))
        } catch (e) {
            dispatch(setErrorAction((e as Error).toString()))
        } finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}
