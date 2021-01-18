import mock from '~/mocks/api.json'

export default (store, axios) => {
  return {
    name: 'task',
    services: {
      findById(taskId) {
        return mock.projectItems.find(item => item.id === taskId)
      },

      findFirstWorkspaceByProjectId(projectId) {
        return mock.projectItems.find(item => item.type === 'workspace' && item.project === projectId)
      },

      findAllTaskByProjectId(projectId: number) {
        const allWorkspaceByProjectId = mock.projectItems.filter(item => item.type === 'workspace' && item.project === projectId);

        return allWorkspaceByProjectId.map(item => {
          item = findChildren(item)
          item['children'].map(child => findChildren(child))
          return item
        })
      },
    }
  }
}

function findChildren(item) {
  const children = mock.projectItems.filter(child => child.parent === item.id)
  if (children != null && children.length > 0) {
    item['children'] = children
  }
  return item
}
