<template>
  <router-link
    v-for="button in NavButtons"
    :key="button.label"
    class="header__button-wrapper"
    :to="{ name: button.route }"
    v-slot="{ navigate }"
    tabindex="-1"
  >
    <button
      class="header__button"
      @click="
        emitNavigate();
        navigate();
      "
      v-ripple
    >
      {{ button.label }}
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export const NavButtons = [
  { label: 'Home', route: 'Home' },
  { label: 'Development', route: 'Development' },
  { label: 'Design', route: 'Design' }
];

export default defineComponent({
  name: 'HeaderButtons',
  emits: ['navigate'],
  setup(_props, ctx) {
    function emitNavigate() {
      ctx.emit('navigate');
    }

    return {
      NavButtons,
      emitNavigate
    };
  }
});
</script>

<style lang="scss" scoped>
.header__button-wrapper {
  text-decoration: none;

  &:hover {
    background: none;
  }

  &.router-link-active > .header__button {
    background: rgba(0, 0, 0, 0.2);
  }

  .header__button {
    @include mix-header-button;
  }
}
</style>
