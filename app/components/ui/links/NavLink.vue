<template>
  <NuxtLinkLocale v-if="!isCurrentRoute" :to="href">
    <UButton variant="ghost" :class="buttonClasses">
      {{ text }}
    </UButton>
  </NuxtLinkLocale>
  <span
    v-else
    class="inline-flex items-center justify-center cursor-default select-none"
    role="link"
    aria-current="page"
    aria-disabled="true"
  >
    <UButton variant="ghost" :class="activeButtonClasses">
      {{ text }}
    </UButton>
  </span>
</template>

<script setup lang="ts">
interface Props {
  href: string;
  text: string;
  size?: 'default' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
});

const route = useRoute();

const isCurrentRoute = computed(() => {
  const currentPath = route.path.replace(/\/$/, '') || '/';
  const linkPath = props.href.replace(/\/$/, '') || '/';

  return currentPath === linkPath;
});

const textSizeClasses = computed(() => {
  if (props.size === 'large') {
    return 'text-2xl md:text-3xl lg:text-4xl';
  }
  return 'text-xs sm:text-sm md:text-base';
});

const buttonClasses = computed(() => {
  return `nav-link-button ${textSizeClasses.value} cursor-pointer font-medium transition-all duration-200`;
});

const activeButtonClasses = computed(() => {
  return `nav-link-active ${textSizeClasses.value} font-medium bg-primary text-primary-foreground cursor-default pointer-events-none`;
});
</script>
