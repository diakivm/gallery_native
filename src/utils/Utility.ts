
export default class Utility {
   static getHeigtht(imgH: number, scrH: number, num: number): number {
      return imgH / scrH * num
   }

   static getHalfOfArray(array: any[], lessHalf: boolean): any[] {
      let length = (array.length) / 2;
      if (lessHalf) {
         return array.filter((item, index) => index < length)
      } else {
         return array.filter((item, index) => index >= length)
      }
   }
}