export class Repository {
  private store;
  private axios;

  constructor(store, axios) {
    this.store = store;
    this.axios = axios;
  }
}
