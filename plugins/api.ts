import {Api} from '~/api'
import Vue from 'vue'
import {Context} from '@nuxt/types';

export let api = null

export default async (ctx: Context, inject) => {
  api = new Api(ctx.store, ctx.$axios)

  inject('api', api)
  inject('bus', new Vue())

  // TODO : A supprimer à terme
  // const res = await ctx.$api.projects.findAll()
  // await ctx.store.dispatch('selectProject', res.content[0].id)
  await ctx.store.dispatch('selectProject', 1)
}
