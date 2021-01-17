declare namespace Models {
  interface PVerticalNavbarItem {
    name: string
    to: string | object
    icon: string
  }

  interface ListItem {
    id: number | string
    type: 'workspace' | 'folder' | 'list'
    name: string
    opened?: boolean
    children?: ListItem[]
  }

}
