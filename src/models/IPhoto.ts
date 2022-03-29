export default interface IPhoto {
   id: string
   width: number
   height: number
   user: {
      id: string
      username: string
      name: string,
      profile_image: {
         small: string
         medium: string
         large: string
      },
   },
   urls: {
      raw: string,
      full: string
      regular: string
      small: string
      thumb: string
   },
   views: number
   downloads: number
}