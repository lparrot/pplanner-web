<template>
  <div class="flex flex-col border-r relative h-full">
    <transition name="scale-in-hor-left">
      <div v-show="visibleSync" class="transition-all duration-300 w-80">
        <slot></slot>
      </div>
    </transition>
    <div class="absolute top-0 right-0">
      <div
        :class="altButtonClasses"
        class="flex justify-center items-center rounded-full bg-white w-8 h-8 text-gray-600 border -mr-4 mt-4 cursor-pointer"
        @click="handleClickAltButton">
        <i :class="altButtonIconClasses" class="text-lg"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, PropSync, Vue} from "nuxt-property-decorator";

@Component
export default class extends Vue {
  @PropSync('visible') visibleSync!: any

  get altButtonClasses() {
    return this.visibleSync ? 'bg-white' : 'bg-secondary'
  }

  get altButtonIconClasses() {
    return this.visibleSync ? 'fas fa-caret-left' : 'text-white fas fa-caret-right'
  }

  handleClickAltButton() {
    this.visibleSync = !this.visibleSync
  }
}
</script>
