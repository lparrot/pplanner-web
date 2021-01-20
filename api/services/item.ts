import {Repository} from '~/api/Repository';


export class ItemsApi extends Repository {
  findAllByProjectId(projectId) {
    return this.axios.$get(`/projects/${projectId}/workspaces`)
  }
}

