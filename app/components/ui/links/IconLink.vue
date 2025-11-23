<template>
  <NuxtLink
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="icon-link inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-110"
    :aria-label="ariaLabel"
  >
    <UIcon :name="icon" class="w-7 h-7 transition-colors duration-300" />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  icon: string;
  href: string;
  ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  ariaLabel: 'Social media link',
});
</script>

<style scoped>
.icon-link {
  color: var(--color-foreground);
  background-color: var(--color-muted);
}

.icon-link:hover {
  background-color: var(--color-accent);
}

/* Прокидываем hover классы к иконке */
.icon-link:hover :deep(svg) {
  color: inherit;
}
</style>
