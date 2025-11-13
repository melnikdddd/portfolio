<script setup lang="ts">
const { isMenuOpened, toggleMenu } = useHeader();
</script>

<template>
  <button
    type="button"
    class="relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
    :aria-label="isMenuOpened ? 'Close menu' : 'Open menu'"
    :aria-expanded="isMenuOpened"
    @click="toggleMenu()"
  >
    <span
      class="block h-0.5 w-6 origin-center transform bg-gray-900 transition-all duration-300 ease-in-out dark:bg-gray-100"
      :class="isMenuOpened ? 'translate-y-2 rotate-45' : ''"
    />

    <span
      class="block h-0.5 w-6 transform bg-gray-900 transition-all duration-300 ease-in-out dark:bg-gray-100"
      :class="isMenuOpened ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'"
    />

    <span
      class="block h-0.5 w-6 origin-center transform bg-gray-900 transition-all duration-300 ease-in-out dark:bg-gray-100"
      :class="isMenuOpened ? '-translate-y-2 -rotate-45' : ''"
    />
  </button>
</template>
