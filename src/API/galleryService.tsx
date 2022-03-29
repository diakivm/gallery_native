import axios from "axios"

export default class galleryService {

    static async getGallery(_page: number) {
        const response = await axios.get(`https://api.unsplash.com/photos?client_id=zmH7yN_wQJvMz-Jbv8LkjLsmo3Z0dFHbKzsQswsaBBY`, {
            params: {
                per_page: 10,
                page: _page
            }
        })
        return response
    }

    static async getPhoto(_id: object | undefined) {
        const response = await axios.get(`https://api.unsplash.com/photos/${_id}?client_id=zmH7yN_wQJvMz-Jbv8LkjLsmo3Z0dFHbKzsQswsaBBY`)
        return response
    }
}