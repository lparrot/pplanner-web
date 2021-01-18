import Vue from "vue";
import './models'

declare module 'vue-fragment'
declare module 'tinymotion'

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  // this
  interface Vue {
    $api: any
    $auth: Auth
    $eventBus: Vue
  }
}

declare module "vue/types/options" {
  // option dans le composant
  interface ComponentOptions<V extends Vue> {
    auth?: boolean;
  }
}

declare module '@nuxt/types' {
  // ctx.app
  interface NuxtAppOptions {
  }

  // ctx
  interface Context {
    $auth: Auth
  }
}

