import {Repository} from '~/api/Repository';


export class ProjectsApi extends Repository {
  findAll() {
    return this.axios.$get('/projects')
  }
}

