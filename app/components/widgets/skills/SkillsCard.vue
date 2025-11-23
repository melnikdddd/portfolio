<script lang="ts" setup>
import type { SkillCategory } from '#shared/types/skills';

interface Props {
  category: SkillCategory;
}

const props = defineProps<Props>();

const colorMode = useColorMode();
const isDark = computed(() => colorMode.value === 'dark');

const categoryColor = computed(() =>
  isDark.value ? props.category.darkColor : props.category.lightColor,
);

const cardStyle = computed(() => {
  const bgColor = categoryColor.value;

  return {
    backgroundColor: isDark.value ? `${bgColor}30` : `${bgColor}20`,
    borderColor: bgColor,
    borderWidth: '2px',
  };
});
</script>

<template>
  <AppCard :title="category.name" variant="primary" :style="cardStyle">
    <template #content>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="skill in category.skills"
          :key="skill.name"
          class="px-3 py-1.5 rounded-full capitalize text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 transition-all hover:scale-105 cursor-default"
        >
          {{ skill.name }}
        </span>
      </div>
    </template>
  </AppCard>
</template>
