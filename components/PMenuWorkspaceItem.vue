<template>
  <fragment>
    <div :class="{'bg-primary text-white': selected}" class="flex justify-between items-center cursor-pointer p-2 rounded">
      <div class="flex items-center">
        <i :class="itemIcon" class="mr-2" @click="openOrCloseChildren"></i>
        <div class="text-base font-medium hover:underline" @click="selectItem(item)">{{ item.name }}</div>
      </div>
      <div :class="{'text-white': selected, 'text-gray-400 hover:text-secondary': !selected}" class="flex gap-4">
        <i class="flex fas fa-ellipsis-h cursor-pointer"></i>
        <i v-if="openable" class="flex fas fa-plus-circle cursor-pointer"></i>
      </div>
    </div>
    <transition name="scale-up-ver-top">
      <div v-show="item.opened" class="flex-col ml-8">
        <slot></slot>
      </div>
    </transition>
  </fragment>
</template>

<script lang="ts">
import {Action, Component, Prop, State, Vue} from "nuxt-property-decorator";
import {Fragment} from 'vue-fragment'

@Component({
  components: {
    Fragment
  }
})
export default class PMenuWorkspaceItem extends Vue {
  @Prop() item: Models.ListItem

  @State('selectedProjectItem') selectedProjectItem
  @State('selectedProject') selectedProject
  @Action('selectProjectItem') selectProjectItem

  get itemIcon() {
    switch (this.item.type) {
      case 'workspace':
        return 'fas fa-caret-down'
      case 'list':
        return 'fas fa-list'
      case 'folder':
        return 'fas fa-folder-open'
      default:
        break;
    }
  }

  get selected() {
    return this.selectedProjectItem[this.selectedProject] === this.item.id
  }

  get openable() {
    return this.item.type !== 'list'
  }

  openOrCloseChildren() {
    if (this.openable) {
      this.item.opened = !this.item.opened
      console.log(this.item)
    }
  }

  selectItem(item) {
    this.selectProjectItem(item.id)
  }
}
</script>
