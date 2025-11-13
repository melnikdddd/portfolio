<script setup lang="ts">
const { isAppReady } = useFontLoader();
</script>

<template>
  <UApp>
    <Transition name="fade-loader">
      <FullScreenLoad v-if="!isAppReady" />
    </Transition>
    <div class="app-content" :class="{ 'app-hidden': !isAppReady }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </UApp>
</template>

<style>
.fade-loader-enter-active,
.fade-loader-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-loader-enter-from,
.fade-loader-leave-to {
  opacity: 0;
}

.fade-loader-enter-to,
.fade-loader-leave-from {
  opacity: 1;
}

.app-content {
  opacity: 1;
  transition: opacity 0.4s ease-in-out;
}

.app-hidden {
  opacity: 0;
  pointer-events: none;
}
</style>
