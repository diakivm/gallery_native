
export default class Utility {
   static getHeigtht(imgH: number, scrH: number, num: number): number {
      return imgH / scrH * num
   }

   static getHalfOfArray(array: any[], lessHalf: boolean): any[] {
      if (lessHalf) {
         return array.filter((item, index, arr) => index < arr.length / 2)
      } else {
         return array.filter((item, index, arr) => index > arr.length / 2)
      }
   }
}