<template>
  <Transition name="slide-down">
    <div
      v-if="isMenuOpened"
      class="menu-container text-foreground"
      :style="{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }"
    >
      <div class="menu-content">
        <nav class="menu-nav" aria-label="Mobile navigation">
          <AppNavLink
            v-for="link in links"
            :key="link.text"
            :href="link.href"
            :text="link.text"
            size="large"
            @click="closeMenu"
          />
        </nav>

        <div class="menu-controls" role="group" aria-label="Theme and language controls">
          <SwitchColorMode />
          <USeparator orientation="vertical" class="h-6" />
          <SwitchLanguage />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { isMenuOpened, closeMenu, links } = useHeader();

const isLargerThanMd = useMediaQuery('(min-width: 768px)');

const stop = watch(isLargerThanMd, (isLarge) => {
  if (isLarge) {
    closeMenu();
  }
});

// Блокировка прокрутки body при открытии меню
watch(isMenuOpened, (opened) => {
  if (opened) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

onUnmounted(() => {
  stop();
  // Восстанавливаем прокрутку при unmount
  document.body.style.overflow = '';
});
</script>

<style scoped>
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh; /* Динамическая высота viewport для мобильных */
  display: flex;
  flex-direction: column;
  z-index: 50;
  overflow: hidden; /* Запрет прокрутки */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.menu-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 5rem 2rem 2rem;
  overflow: hidden; /* Запрет прокрутки внутри */
}

.menu-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.menu-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-bottom: 2rem;
}

@media (min-width: 768px) {
  .menu-container {
    display: none;
  }
}
</style>

<style>
/* Transition стили без scoped для правильной работы Vue Transition */
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
