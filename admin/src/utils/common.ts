/**
 * 将通过的百分比与十六进制颜色的R、G或B相加
 * @param {string} color 要更改的颜色
 * @param {number} amount 改变颜色的量
 * @returns {string} 颜色的处理部分
 */
 function addLight(color: string, amount: number) {
    const cc = parseInt(color, 16) + amount
    const c = cc > 255 ? 255 : cc
    return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`
  }
   
  /**
   * 根据通过的百分比点亮6个字符的十六进制颜色
   * @param {string} color 要更改的颜色
   * @param {number} amount 改变颜色的量
   * @returns {string} 已处理的颜色，表示为十六进制
   */
  export function lighten(color: string, amount: number) {
    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color
    amount = Math.trunc((255 * amount) / 100)
    return `#${addLight(color.substring(0, 2), amount)}${addLight(
      color.substring(2, 4),
      amount
    )}${addLight(color.substring(4, 6), amount)}`
  }
   
  /**
   * 判断是否 url
   */
  export function isUrl(url: string) {
    return /^(http|https):\/\//g.test(url)
  }