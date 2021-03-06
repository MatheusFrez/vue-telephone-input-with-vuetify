import VueTelephoneInputVuetify from './vue-tel-input-vuetify.vue';

export function install(Vue, customOptions = {}) {
  if (install.installed) return;
  if (!customOptions || !customOptions.vuetify) return;
  const { vuetify: vuetifyFramework } = customOptions;
  install.installed = true;
  install.vuetify = vuetifyFramework;
  Vue.use(vuetifyFramework);
  Vue.component('vue-telephone-input-vuetify', VueTelephoneInputVuetify);
}

export { VueTelephoneInputVuetify };

const plugin = {
  install
};

// Auto-install
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export default plugin;
