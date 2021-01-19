<template>
  <div>
    <template v-if="task != null">
      <div class="flex items-baseline gap-2 font-bold">
        <i :class="iconItem" class="text-primary-400 text-sm"></i>
        <div class="text-primary-700 text-lg">{{ task.name }}</div>

        <p-tab-container>
          <p-tab-item :active="$route.params.view === 'list'" name="list">Liste</p-tab-item>
          <p-tab-item :active="$route.params.view === 'kanban'" name="kanban">Kanban</p-tab-item>
          <p-tab-item :active="$route.params.view === 'calendar'" name="calendar">Calendrier</p-tab-item>
          <p-tab-item :active="$route.params.view === 'gantt'" name="gantt">Gantt</p-tab-item>
        </p-tab-container>
      </div>
    </template>

    <template v-else>
      <div class="text-primary font-medium">Aucun workspace existant, merci de créer un workspace</div>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import PTabContainer from "~/components/PTabContainer.vue";
import PTabItem from "~/components/PTabItem.vue";


@Component({
  components: {
    PTabContainer,
    PTabItem
  }
})
export default class PageTaskIndex extends Vue {

  public task: Models.ProjectMenuItem = null

  get iconItem() {
    switch (this.task.type) {
      case 'folder':
        return 'fas fa-folder'
      case 'list':
        return 'fas fa-list'
      case 'workspace':
        return 'fas fa-globe'
    }
  }

  beforeRouteUpdate(to, from, next) {
    if (to.params.view == null) {
      return next({
        name: 'tasks-id-view',
        params: {
          id: firstWorkspace.id,
          view: 'list'
        }
      })
    }
    next()
  }

  async asyncData(ctx) {
    if (ctx.params.id == null) {
      // Si pas de paramètre, on récupère le premier workspace créé. S'il n'y en a pas, alors on retourne vide
      const firstWorkspace = ctx.$api.tasks.findFirstWorkspaceByProjectId(ctx.store.state.selectedProject)
      if (firstWorkspace != null) {
        return ctx.redirect({
          name: 'tasks-id-view',
          params: {
            id: firstWorkspace.id,
            view: 'list'
          }
        })
      }
      return {item: null}
    }

    ctx.store.dispatch('selectProjectItem', parseInt(ctx.params.id))

    const item = ctx.$api.projects.findMenuItemById(parseInt(ctx.params.id))
    if (item == null) {
      return ctx.error({statusCode: 404, message: 'Element inexistante'})
    }

    return {
      task: ctx.$api.tasks.findById(parseInt(ctx.params.id))
    }
  }

  created() {
    this.$bus.$on('on-select-view-tab', (event) => {
      if (this.$route.params.view !== event.name) {
        this.$router.push({
          name: 'tasks-id-view',
          params: {
            id: this.$route.params.id,
            view: event.name
          }
        })
      }
    })
  }
}
</script>

<style>

</style>
