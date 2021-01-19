import {Api} from '~/api'
import Vue from 'vue'

export let api = null

export default ({store, $axios}, inject) => {
  api = new Api(store, $axios)

  inject('api', api)
  inject('bus', new Vue())
}
