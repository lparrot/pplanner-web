import {Store} from 'vuex';
import {NuxtAxiosInstance} from '@nuxtjs/axios';

export class Api {
  private _store: Store<any>
  private _axios: NuxtAxiosInstance

  constructor(store, axios, options) {
    this._store = store
    this._axios = axios

    for (let api of options.apis) {
      const apiInstance = require('./services/' + api).default(store, axios)
      this[apiInstance.name] = apiInstance.services
    }
  }
}
