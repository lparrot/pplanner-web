<template>
  <div class="w-16 h-full py-4 justify-start items-center bg-primary text-white overflow-auto">
    <router-link to="/">
      <img class="w-12 p-2 mb-8 bg-white rounded" src="/logo.png" alt="logo">
    </router-link>

    <div id="navbar-content" class="h-full flex flex-col items-center justify-between">
      <div class="flex flex-col gap-6 text-2xl">
        <router-link to="/dashboard">
          <i class="fas fa-home"></i>
        </router-link>
        <i class="fas fa-tasks"></i>
        <i class="fas fa-bell"></i>
        <i class="fas fa-th-large"></i>
      </div>
      <div class="flex flex-col gap-6 items-center text-2xl">
        <i class="fas fa-sign-in-alt"></i>
        <i class="fas fa-sign-out-alt"></i>
        <hr class="w-full text-gray-700">
        <div @click="$router.push('profile')"
             class="w-12 h-12 flex justify-center items-center rounded-full bg-blue-900 text-white text-lg font-bold cursor-pointer">
          LP
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class PVerticalNavbar extends Vue {

}
</script>

<style>
#navbar-content i {
  @apply cursor-pointer transform duration-300 ease-in-out hover:scale-150;
}
</style>
