import {Api} from '~/api'

export let api = null

export default ({store, $axios}, inject) => {
  api = new Api(store, $axios, {
    apis: [
      'project.api.ts',
      'favorite.api.ts',
    ],
  })

  inject('api', api)
}
