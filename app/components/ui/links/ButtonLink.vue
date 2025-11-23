<template>
  <NuxtLinkLocale :to="href">
    <UButton variant="ghost" class="text-sm font-medium cursor-pointer" v-bind="$attrs">
      {{ text }}
    </UButton>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
interface Props {
  href: string;
  text: string;
}
defineProps<Props>();
</script>
