<template>
  <div class="space-y-3">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <UIcon :name="ResumeIcons.workExperience" class="w-5 h-5" />
      {{ $t('resume.bio.work-experience') }}
    </h2>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="(job, index) in workExperience"
        :key="index"
        class="text-gray-700 dark:text-gray-300"
      >
        <p class="font-medium">{{ rt(job.position) }}</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          {{ rt(job.company) }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-500">
          {{ rt(job.startDate) }} - {{ job.endDate ? rt(job.endDate) : $t('resume.bio.present') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WorkExperience } from '#shared/types/bio';
import { ResumeIcons } from '#shared/constants/resume-page';

const { tm, rt } = useI18n();
const workExperience = computed(() => tm('resume.data.workExperience') as unknown as WorkExperience[]);
</script>
