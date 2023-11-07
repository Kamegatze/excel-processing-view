export interface Page<T> {
  content: T[],
  currentPage: number,
  countPage: number,
  countElementsInPage: number,
  countElements: number
}
