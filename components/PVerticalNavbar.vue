<template>
  <fragment>
    <div class="flex flex-col w-16 h-full py-4 justify-start items-center bg-primary text-white overflow-auto">
      <router-link to="/">
        <img alt="logo" class="w-12 p-2 mb-8 bg-white rounded" src="/logo.png">
      </router-link>

      <div id="navbar-content" class="h-full flex flex-col items-center justify-between">
        <div class="flex flex-col gap-6 text-2xl">
          <router-link v-for="(item, itemIndex) in items" :key="itemIndex" :title="item.name" :to="item.to">
            <i :class="item.icon"></i>
          </router-link>
        </div>
        <div class="flex flex-col gap-6 items-center text-2xl">
          <i class="fas fa-sign-in-alt"></i>
          <i class="fas fa-sign-out-alt"></i>
          <hr class="w-full text-gray-700">
          <div
            class="flex justify-center items-center rounded-full w-12 h-12 bg-blue-900 text-white text-lg font-bold cursor-pointer"
            @click="$router.push('profile')">
            LP
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col relative">
      <div :class="{'hidden': !visibleSync, 'block': visibleSync}" class="w-52 border-r">

      </div>
      <div class="absolute top-0 right-0">
        <div
          :class="altButtonClasses"
          class="flex justify-center items-center rounded-full bg-white w-8 h-8 text-gray-600 border -mr-4 mt-4 cursor-pointer"
          @click="handleClickAltButton">
          <i :class="altButtonIconClasses" class="text-xs"></i>
        </div>
      </div>
    </div>

  </fragment>

</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue} from 'nuxt-property-decorator'
import {Fragment} from 'vue-fragment'

export interface PVerticalNavbarItem {
  name: string
  to: string | object
  icon: string
}

@Component({
  components: {
    Fragment
  }
})
export default class PVerticalNavbar extends Vue {
  @Prop() items!: PVerticalNavbarItem[]
  @Prop({default: false}) showAltButton!: boolean

  @PropSync('visible') visibleSync!: any

  get altButtonClasses() {
    return this.visibleSync ? 'bg-white' : 'bg-secondary'
  }

  get altButtonIconClasses() {
    return this.visibleSync ? 'fas fa-chevron-left' : 'text-white fas fa-chevron-right'
  }

  handleClickAltButton() {
    this.visibleSync = !this.visibleSync
    console.log(this.visibleSync)
  }

}
</script>

<style>
#navbar-content i {
  @apply cursor-pointer transform duration-300 ease-in-out hover:scale-150;
}
</style>
