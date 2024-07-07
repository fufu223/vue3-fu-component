export const toLine = (str: string) => {
  // 匹配到大写字母就在大写字母前面加-
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
