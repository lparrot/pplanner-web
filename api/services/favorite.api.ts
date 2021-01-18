import mock from '~/mocks/api.json'

export default (store, axios) => {
  return {
    name: 'favorite',
    services: {
      findAllByProjectId(projectId) {
        return mock.projectItems.filter(item => item.id === 3 || item.id === 6 || item.id === 8)
      }
    }
  }
}
