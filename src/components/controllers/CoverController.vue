<template>
  <transition name="cover">
    <div v-if="refs.visible" class="cover" @click="onClick()" :style="{ background: refs.color }"></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CoverService from '@/services/CoverService';

export default defineComponent({
  name: 'CoverController',
  setup() {
    const refs = reactive({
      visible: CoverService.getVisibleRef(),
      color: CoverService.getColorRef()
    });

    function onClick() {
      CoverService.removeCover();
    }

    return {
      refs,
      onClick
    };
  }
});
</script>

<style lang="scss" scoped>
.cover-enter-active,
.cover-leave-active {
  transition: opacity $transition-duration $transition-timing;
}

.cover-enter-from,
.cover-leave-to {
  opacity: 0 !important;
}

.cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.75;
  z-index: 500;
}
</style>
