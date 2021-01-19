declare namespace Models {
  interface PVerticalNavbarItem {
    name: string
    to: string | object
    icon: string
  }

  interface ProjectMenuItem {
    id: number | string
    type: 'workspace' | 'folder' | 'list' | string
    name: string
    opened?: boolean
    children?: ProjectMenuItem[]
  }

}
