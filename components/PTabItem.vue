<template>
  <div :class="{'bg-secondary-400 text-white': active}"
       class="px-3 py-2 rounded cursor-pointer hover:text-white hover:bg-secondary-400" @click="selectTab">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component({})
export default class PTabItem extends Vue {

  @Prop({required: true}) name!: string
  @Prop() active!: boolean

  selectTab() {
    this.$bus.$emit('on-select-view-tab', {name: this.name})
  }

}
</script>

<style>

</style>
