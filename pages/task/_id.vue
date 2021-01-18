<template>
  <div>
    <template v-if="task != null">
      {{ task.name }}
    </template>

    <template v-else>
      <div class="text-primary font-medium">Aucun workspace existant, merci de créer un workspace</div>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class PageTaskIndex extends Vue {

  public task: any = null

  async asyncData({$api, error, params, redirect, store}) {

    if (params.id == null) {
      // Si pas de paramètre, on récupère le premier workspace créé. S'il n'y en a pas, alors on retourne vide
      const firstWorkspace = $api.task.findFirstWorkspaceByProjectId(store.state.selectedProject)
      if (firstWorkspace != null) {
        return redirect(`/task/${firstWorkspace.id}`)
      }

      return {task: null}
    }

    store.dispatch('selectProjectItem', parseInt(params.id))

    const task = $api.task.findById(parseInt(params.id))
    if (task == null) {
      return error({statusCode: 404, message: 'Tâche inexistante'})
    }
    return {
      task: $api.task.findById(parseInt(params.id))
    }
  }

  mounted() {

  }
}
</script>

<style>

</style>
