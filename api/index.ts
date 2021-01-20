import {Store} from 'vuex';
import {NuxtAxiosInstance} from '@nuxtjs/axios';
import {FavoritesApi} from '~/api/services/favorites.api';
import {ProjectsApi} from '~/api/services/projects.api';
import {TasksApi} from '~/api/services/tasks.api';
import {ItemsApi} from '~/api/services/item';

export interface Repositories {
  favorites: FavoritesApi
  items: ItemsApi
  projects: ProjectsApi
  tasks: TasksApi
}

export class Api {
  private readonly _store: Store<any>
  private readonly _axios: NuxtAxiosInstance

  constructor(store, axios) {
    this._store = store
    this._axios = axios

    this._createRepository('favorites', FavoritesApi)
    this._createRepository('items', ItemsApi)
    this._createRepository('projects', ProjectsApi)
    this._createRepository('tasks', TasksApi)
  }

  _createRepository(name, type) {
    this[name] = Reflect.construct(type, [this._store, this._axios])
  }
}
