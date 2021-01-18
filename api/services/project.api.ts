import mock from '~/mocks/api.json'

export default (store, axios) => {
  return {
    name: 'project',
    services: {
      findAllWorkspaceByProjectId(projectId: number) {
        return mock.projectItems.filter(item => item.type === 'workspace' && item.project === projectId)
      },

      findAllWorkspaceWithChildrenByProjectId(projectId: number) {
        const allWorkspaceByProjectId = this.findAllWorkspaceByProjectId(projectId);
        allWorkspaceByProjectId.map(item => {
          item = findChildren(item)
          item['children'].map(child => findChildren(child))
          return item
        })
        return allWorkspaceByProjectId
      }
    },
  }
}

function findChildren(item) {
  const children = mock.projectItems.filter(child => child.parent === item.id)
  if (children != null && children.length > 0) {
    item['children'] = children
  }
  return item
}
