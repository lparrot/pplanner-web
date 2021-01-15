<template>
  <div class="h-full flex flex-row">
    <p-vertical-navbar class="flex flex-col"></p-vertical-navbar>
    <div id="content" class="w-full pt-4 px-4 overflow-auto">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({})
export default class LayoutDefault extends Vue {

}
</script>

<style>

</style>
