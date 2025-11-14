<template>
  <div class="relative rounded-lg p-6 pt-8" :style="cardStyle">
    <div
      v-if="title"
      class="absolute -top-3 left-4 px-3 py-1 bg-white dark:bg-gray-900"
      :style="titleStyle"
    >
      <span class="text-sm font-semibold">{{ title }}</span>
    </div>

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
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title?: string;
  color: string;
  borderWidth?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  borderWidth: '2px',
});

const cardStyle = computed(() => ({
  border: `${props.borderWidth} solid ${props.color}`,
}));

const titleStyle = computed(() => ({
  color: props.color,
}));

const footerStyle = computed(() => ({
  color: props.color,
}));
</script>

<style scoped>
.card-content {
  min-height: 2rem;
}
</style>
