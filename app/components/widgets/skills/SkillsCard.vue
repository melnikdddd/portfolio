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

// Helper to determine if a color is dark or light
const isColorDark = (hexColor: string) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

const cardStyle = computed(() => {
  const bgColor = categoryColor.value;
  const isCardDark = isColorDark(bgColor);

  return {
    backgroundColor: isDark.value ? `${bgColor}30` : `${bgColor}20`,
    borderColor: bgColor,
    borderWidth: '2px',
    color: isDark.value ? '#ffffff' : '#000000',
  };
});

const badgeStyle = computed(() => {
  const bgColor = categoryColor.value;
  const isCardDark = isColorDark(bgColor);

  return {
    backgroundColor: isDark.value ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
    color: isDark.value ? '#ffffff' : '#000000',
    borderColor: isDark.value ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.15)',
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
          class="px-3 py-1.5 rounded-full text-sm font-medium border transition-all hover:scale-105 cursor-default"
          :style="badgeStyle"
        >
          {{ skill.name }}
        </span>
      </div>
    </template>
  </AppCard>
</template>
