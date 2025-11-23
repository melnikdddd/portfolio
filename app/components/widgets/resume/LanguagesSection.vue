<template>
  <div class="space-y-3">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <UIcon :name="ResumeIcons.languages" class="w-5 h-5" />
      {{ $t('resume.bio.languages-title') }}
    </h2>
    <div class="flex flex-wrap gap-4">
      <div
        v-for="(lang, index) in languages"
        :key="index"
        class="text-gray-700 dark:text-gray-300"
      >
        <span class="font-medium">{{ rt(lang.name) }}</span>
        <span class="text-sm text-gray-600 dark:text-gray-400 ml-2">
          ({{ rt(lang.level) }})
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Language } from '#shared/types/bio';
import { ResumeIcons } from '#shared/constants/resume-page';

const { tm, rt } = useI18n();
const languages = computed(() => tm('resume.data.languages') as unknown as Language[]);
</script>
