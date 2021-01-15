<template>
  <div class="p-navbar">
    <div class="flex md:block">
      <div class="p-navbar-title md:p-4">
        <div @click="toggle" class="cursor-pointer mr-4 md:hidden">
          <i class="fas fa-bars"></i>
        </div>
        <img class="w-8 mr-2" src="/logo.png" alt="logo">
        <router-link to="/">{{ $config.app.title }}</router-link>
      </div>
      <ul class="md:flex md:flex-col md:items-start md:p-2 md:w-full" :class="{'hidden': !visible, 'block': visible}">
        <li class="p-navbar-item">
          <router-link class="p-btn" to="/modules">Modules</router-link>
        </li>
        <li class="p-navbar-item">
          <router-link class="p-btn" to="/project">Gestion du projet</router-link>
        </li>
        <li class="p-navbar-item">
          <router-link class="p-btn" to="/admin">Administration</router-link>
        </li>
      </ul>
    </div>
    <ul class="flex items-center md:flex-col md:items-start md:p-2 md:w-full">
      <li class="p-navbar-item">
        <router-link class="p-btn" to="/login">Login</router-link>
      </li>
      <li class="p-navbar-item">
        <router-link class="p-btn" to="/signup">Sign up</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class PNavbar2 extends Vue {
  public visible = false

  public toggle() {
    this.visible = !this.visible
  }
}
</script>

<style lang="scss">
.p-navbar {
  @apply flex justify-between items-center py-3 bg-blue-900 text-white;

  @screen md {
    @apply flex items-start flex-col w-80 h-full;
  }
}

.p-navbar-title {
  @apply flex items-center font-bold ml-4 md:ml-0 md:pb-4;
}

.p-navbar-item {
  @apply flex mr-2;
}
</style>
