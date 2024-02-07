export type PackageInfo = {
  name: string
  version: string
  description: string
  module: string
  repository: string
  author?: string
  homepage: string
}

export type PackageItem = {
  name: string
  version: string
}

export type NPM = {
  package: Package
}

export type Package = {
  name: string
  scope: string
  version: string
  description: string
  keywords: string[]
  date: Date
  links: Links
  author: Author
  publisher: Publisher
  maintainers: Publisher[]
}

export type Author = {
  name: string
}

export type Links = {
  npm: string
  homepage: string
  repository: string
  bugs: string
}

export type Publisher = {
  username: string
  email: string
}

export type Detail = {
  quality: number
  popularity: number
  maintenance: number
}
