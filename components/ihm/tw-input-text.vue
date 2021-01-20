<template>
  <div class="flex flex-col">
    <label v-if="label != null" :for="'input_' + _uid">{{ label }}</label>
    <input :id="'input_' + _uid" v-bind="inputOptions"
           class="py-2 px-3 rounded bg-white border border-primary focus:outline-none"
           type="text">
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'nuxt-property-decorator'

@Component({})
export default class TwInputText extends Vue {
  @Prop() label!: string
  @Prop() inputOptions!: any
}
</script>

<style>

</style>
