<template>
  <section class="relative rounded-lg p-6 pt-8" :style="cardStyle">
    <article
      v-if="title"
      class="absolute -top-3 left-4 px-3 py-1 bg-white dark:bg-gray-900"
      :style="titleStyle"
    >
      <span class="text-sm font-semibold">{{ title }}</span>
    </article>

    <div class="card-content">
      <slot name="content" />
    </div>

    <div
      v-if="$slots.footer"
      class="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white dark:bg-gray-900"
      :style="footerStyle"
    >
      <slot name="footer" />
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  variant?: 'primary' | 'secondary';
  borderWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  variant: 'primary',
  borderWidth: '2px',
});

const borderColorVar = computed(() =>
  props.variant === 'primary'
    ? 'var(--color-card-border-primary)'
    : 'var(--color-card-border-secondary)',
);

const cardStyle = computed(() => ({
  border: `${props.borderWidth} solid ${borderColorVar.value}`,
}));

const titleStyle = computed(() => ({
  color: borderColorVar.value,
}));

const footerStyle = computed(() => ({
  color: borderColorVar.value,
}));
</script>

<style scoped>
.card-content {
  min-height: 2rem;
}
</style>
