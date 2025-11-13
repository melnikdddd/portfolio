<script setup lang="ts">
const { isMenuOpened, closeMenu } = useHeader();
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
    >
      Skip to content
    </a>
    <Header />
    <UMain id="main-content" class="flex-1 relative z-10" role="main">
      <slot />
    </UMain>
    <Footer />
    <Teleport to="body">
      <FullScreenNavigationMenu />
    </Teleport>
    <Transition name="fade-overlay">
      <div
        v-if="isMenuOpened"
        class="fixed inset-0 bg-black/50 z-40 md:hidden"
        aria-hidden="true"
        @click="closeMenu"
      />
    </Transition>
  </div>
</template>

<style>
.fade-overlay-enter-active,
.fade-overlay-leave-active {
  transition: opacity 0.3s ease;
}

.fade-overlay-enter-from,
.fade-overlay-leave-to {
  opacity: 0;
}

.fade-overlay-enter-to,
.fade-overlay-leave-from {
  opacity: 1;
}
</style>
