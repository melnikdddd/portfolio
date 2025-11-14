<script setup lang="ts">
const { isMenuOpened, toggleMenu } = useHeader();
</script>

<template>
  <button
    type="button"
    class="relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-accent"
    :aria-label="isMenuOpened ? 'Close menu' : 'Open menu'"
    :aria-expanded="isMenuOpened"
    @click="toggleMenu()"
  >
    <span
      class="block h-0.5 w-6 origin-center transform bg-foreground transition-all duration-300 ease-in-out"
      :class="isMenuOpened ? 'translate-y-2 rotate-45' : ''"
    />

    <span
      class="block h-0.5 w-6 transform bg-foreground transition-all duration-300 ease-in-out"
      :class="isMenuOpened ? 'scale-x-0 opacity-0' : 'scale-x-100 opacity-100'"
    />

    <span
      class="block h-0.5 w-6 origin-center transform bg-foreground transition-all duration-300 ease-in-out"
      :class="isMenuOpened ? '-translate-y-2 -rotate-45' : ''"
    />
  </button>
</template>
