<template>
  <fragment>
    <p-vertical-menu :visible.sync="visible">
      <div class="p-6">
        <!-- Favorites -->

        <div class="mb-5">
          <div class="flex justify-between items-center cursor-pointer hover:text-secondary" @click="show.favorites = !show.favorites" @mouseenter="show.favoriteActions = true" @mouseleave="show.favoriteActions = false">
            <div class="text-xl font-medium">Favoris</div>
            <transition name="focus-in-contract">
              <div v-show="show.favoriteActions" class="font-medium uppercase">{{ show.favorites ? 'Cacher' : 'Voir' }}</div>
            </transition>
          </div>
          <transition name="scale-up-ver-top">
            <div v-show="show.favorites" class="text-xs">
              <template v-if="favorites.length < 1">
                Vous n'avez aucun favoris pour le moment.
              </template>
              <template v-else>
                <div v-for="favorite in favorites" :key="favorite.id" :class="{'text-secondary': activeListItem === favorite.id}" class="flex justify-between items-center cursor-pointer text-primary hover:text-secondary">
                  <div class="ml-1 mt-2 hover:underline" @click="handleClickFavorite(favorite)">{{ favorite.name }}</div>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
              </template>
            </div>
          </transition>
        </div>

        <!-- Workspaces -->
        <div class="flex justify-between items-center pb-5">
          <div class="text-xl font-medium">Espaces de travail</div>
          <div class="flex gap-4 text-lg">
            <i class="fas fa-cog text-gray-400 cursor-pointer hover:text-secondary"></i>
            <i class="fas fa-search text-gray-400 cursor-pointer hover:text-secondary"></i>
          </div>
        </div>
        <p-menu-workspace-item v-for="workspace in workspaces" :key="workspace.id" :item="workspace">
          <p-menu-workspace-item v-for="item in workspace.children" :key="item.id" :item="item">
            <template v-if="item.children">
              <p-menu-workspace-item v-for="itemChild in item.children" :key="itemChild.id" :item="itemChild"></p-menu-workspace-item>
            </template>
          </p-menu-workspace-item>
        </p-menu-workspace-item>
      </div>
    </p-vertical-menu>
    <div class="p-container">
      <nuxt-child></nuxt-child>
    </div>
  </fragment>
</template>

<script lang="ts">
import {Action, Component, Getter, Vue} from "nuxt-property-decorator";
import PVerticalMenu from "../components/PVerticalMenu.vue";
import {Fragment} from 'vue-fragment'
import PMenuWorkspaceItem from "~/components/PMenuWorkspaceItem.vue";

@Component({
  components: {
    PMenuWorkspaceItem,
    Fragment,
    PVerticalMenu
  }
})
export default class PageParentTask extends Vue {
  @Getter('activeListItem') activeListItem
  @Action('selectProjectItem') selectProjectItem

  public visible: boolean = true
  public favorites: any[] = []
  public workspaces: Models.ListItem[] = []

  public show = {
    favoriteActions: false,
    favorites: false,
    workspaceActions: false
  }

  handleClickFavorite(favorite) {
    this.selectProjectItem(favorite.id)
  }

  created() {
    this.mocks()
  }

  mocks() {
    this.workspaces = [
      {
        id: 1, type: 'workspace', name: 'CCS', opened: true, children: [
          {
            id: 2, type: 'folder', name: 'Sprints', opened: true, children: [
              {id: 3, type: 'list', name: 'Sprint 1'},
              {id: 4, type: 'list', name: 'Sprint 2'},
            ]
          },
          {id: 5, type: 'list', name: 'Backlog'},
          {id: 6, type: 'list', name: 'Bugs'},
        ]
      }
    ]

    this.favorites = [
      {id: 1, type: 'workspace', name: 'CCS'},
      {id: 3, type: 'list', name: 'Sprint 1'},
    ]
  }
}
</script>
