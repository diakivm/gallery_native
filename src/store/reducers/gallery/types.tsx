import IPhoto from "../../../models/IPhoto"



export interface galleryState {
    photos: IPhoto[],
    total_pages: number
    page: number,
    isLoading: boolean,
    error: string | null
}


export enum galleryActionsType {
    SET_GALLERY = 'GALLERY/SET_GALLERY',
    SET_IS_LOADING = 'GALLERY/SET_IS_LOADING',
    RESET_GALLERY = 'GALLERY/RESET_GALLERY',
    SET_ERROR = 'GALLERY/SET_ERROR',
    SET_PAGE = 'GALLERY/SET_PAGE',
    SET_TOTAL_PAGES = 'GALLERY/SET_TOTAL_PAGES',
}

export interface setGallery {
    type: galleryActionsType.SET_GALLERY,
    payload: IPhoto[]
}

export interface resetGallery {
    type: galleryActionsType.RESET_GALLERY,
}

export interface setGalleryError {
    type: galleryActionsType.SET_ERROR,
    payload: string | null
}

export interface setGalleryPage {
    type: galleryActionsType.SET_PAGE,
    payload: number
}

export interface setGalleryIsLoading {
    type: galleryActionsType.SET_IS_LOADING,
    payload: boolean
}

export interface setTotalPages {
    type: galleryActionsType.SET_TOTAL_PAGES,
    payload: number
}

export type galleryActions = setGallery
    | setGalleryError
    | setGalleryPage
    | setGalleryIsLoading
    | setTotalPages
    | resetGallery
