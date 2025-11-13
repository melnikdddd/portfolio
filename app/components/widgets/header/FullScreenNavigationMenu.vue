<template>
  <Transition name="slide-down">
    <div v-if="isMenuOpened" class="menu-container"></div>
  </Transition>
</template>

<script setup lang="ts">
const { isMenuOpened, closeMenu } = useHeader();

const isLargerThanMd = useMediaQuery('(min-width: 768px)');

const stop = watch(isLargerThanMd, (isLarge) => {
  if (isLarge) {
    closeMenu();
  }
});

onUnmounted(() => stop());
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  z-index: 50;
}

@media (min-width: 768px) {
  .menu-container {
    display: none;
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-down-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
