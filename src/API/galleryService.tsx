import axios from "axios"

export default class galleryService {

    static async getGallery(_page: number = 1) {
        const response = await axios.get(`https://api.unsplash.com/photos?page=${_page}&client_id=zmH7yN_wQJvMz-Jbv8LkjLsmo3Z0dFHbKzsQswsaBBY`)
        return response
    }
}