<template>
  <div class="space-y-3">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <UIcon :name="ResumeIcons.education" class="w-5 h-5" />
      {{ $t('resume.bio.education') }}
    </h2>
    <div class="flex flex-wrap gap-4">
      <div v-for="(edu, index) in education" :key="index" class="text-gray-700 dark:text-gray-300">
        <p class="font-medium">{{ rt(edu.university) }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ rt(edu.degree) }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500">
          {{ rt(edu.startDate) }} - {{ rt(edu.endDate) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Education } from '#shared/types/bio';
import { ResumeIcons } from '#shared/constants/resume-page';

const { tm, rt } = useI18n();
const education = computed(() => tm('resume.data.education') as unknown as Education[]);
</script>
