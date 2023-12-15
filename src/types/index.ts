export interface IContainer {
  children: React.ReactNode
}

export interface ISection {
  children: React.ReactNode
  position: 'start' | 'end' | 'center'
  delay: number
  title: string
  id: string;
}

export interface ISectionText {
  children: string;
}

export interface ISectionImage {
  image: string
}

export interface ICard {
  id: number
  name: string
  image: string
  description: string
  value: string
  category: string
  date: string
}

export interface ISocial {
  name: string
  link: string
}