import {Repository} from '~/api/Repository';
import mocks from "~/mocks/api.json";


export class ProjectsApi extends Repository {
  findMenuItemById(menuItemId) {
    return mocks.projectItems.find(item => item.id === menuItemId)
  }
}

