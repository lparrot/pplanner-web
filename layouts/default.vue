<template>
  <div class="h-full flex flex-row">
    <p-vertical-navbar :items="items" :visible.sync="altVisible" class="flex flex-col"></p-vertical-navbar>
    <div id="content" class="w-full pt-4 px-4 overflow-auto">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {PVerticalNavbarItem} from "@/types/models";

@Component({})
export default class LayoutDefault extends Vue {
  public items: PVerticalNavbarItem[] = []
  public altVisible = false

  mounted() {
    this.items = [
      {name: 'Home', to: '/', icon: 'fas fa-home'},
      {name: 'Tasks', to: '/task', icon: 'fas fa-tasks'},
      {name: 'Notifications', to: '/notification', icon: 'fas fa-bell'},
      {name: 'Dashboard', to: '/dashboard', icon: 'fas fa-th-large'},
    ]
  }
}
</script>

<style>

</style>
