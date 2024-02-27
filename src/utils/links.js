import { kebabCase } from "./kebabCase"

export const book = (title) => `/#/book-notes/${kebabCase(title)}/`
export const bookImg = (title) => `/images/books/${kebabCase(title)}.jpg`

export const projectImg = (title) => `/images/projects/${kebabCase(title)}.jpg`
export const projectImgSmall = (title) =>
  `/images/projects/${kebabCase(title)}-small.jpg`

export const handleNavPage = (title) => `/${kebabCase(title)}`
export const handleNavSection = (title) => `/#${kebabCase(title)}`
