<template>
  <div class="flex gap-1">
    <span
      class="lang-item"
      :class="{ 'active-lang': isEnSelected }"
      @click.prevent.stop="selectLocale('en')"
    >
      EN
    </span>
    <USeparator orientation="vertical" />
    <span
      class="lang-item"
      :class="{ 'active-lang': isUaSelected }"
      @click.prevent.stop="selectLocale('ua')"
    >
      UA
    </span>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();
const isEnSelected = computed(() => locale.value === 'en');
const isUaSelected = computed(() => locale.value === 'ua');

const selectLocale = (newLocale: 'ua' | 'en') => {
  if (newLocale === locale.value) return;
  setLocale(newLocale);
};
</script>

<style scoped>
.lang-item {
  cursor: pointer;
  transition: color 0.2s;
  color: var(--color-muted-foreground);
}

.lang-item:not(.active-lang):hover {
  color: var(--color-foreground);
}

.active-lang {
  font-weight: 600;
  cursor: default;
  color: var(--color-primary);
}
</style>
