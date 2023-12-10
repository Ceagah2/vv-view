export interface IContainer {
  children: React.ReactNode
}

export interface ISection {
  children: React.ReactNode
  position: 'start' | 'end'
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