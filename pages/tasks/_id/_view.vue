<template>
  <div class="h-full flex flex-col">
    <template v-if="task != null">
      <div class="flex flex-row items-baseline gap-2 font-bold px-4">
        <i :class="iconItem" class="text-primary-400 text-sm"></i>
        <div class="text-primary-700 text-lg">{{ task.name }}</div>

        <p-tab-container>
          <p-tab-item v-for="view in views" :key="view.id" :active="$route.params.view === view.name" :name="view.name">
            <i :class="view.icon" class="mr-1"></i>
            <span>{{ view.label }}</span>
          </p-tab-item>
          <div class="h-6 border"></div>
          <div class="ml-2 cursor-pointer transform duration-200 hover:text-secondary hover:scale-110">
            <i class="fas fa-plus mr-1"></i>
            <span>Vue</span>
          </div>
        </p-tab-container>
      </div>
      <div class="flex flex-col border-t bg-primary-100 w-full h-full overflow-x-auto overflow-y-auto">
        <div class="px-4 pt-4">
          Test
        </div>
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
  public views: any

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
          id: to.params.id,
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
    this.views = [
      {id: 1, name: 'list', label: 'Liste', icon: 'fas fa-th-list'},
      {id: 2, name: 'kanban', label: 'Kanban', icon: 'fab fa-gitter'},
      {id: 3, name: 'calendar', label: 'Calendrier', icon: 'fas fa-calendar-alt'},
      {id: 4, name: 'gantt', label: 'Gantt', icon: 'fas fa-stream'},
    ]

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
