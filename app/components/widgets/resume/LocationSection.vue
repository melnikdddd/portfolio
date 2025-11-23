<template>
  <div class="space-y-3">
    <h2 class="text-xl font-semibold flex items-center gap-2">
      <UIcon :name="ResumeIcons.location" class="w-5 h-5" />
      {{ $t('resume.bio.location-title') }}
    </h2>
    <div class="text-gray-700 dark:text-gray-300 flex flex-col gap-2 text-sm">
      <span class="font-medium">{{ rt(location.city) }}, {{ rt(location.country) }}</span>
      <span class="text-gray-600 dark:text-gray-400">
        {{ $t('resume.bio.work-types') }}:
        <span class="text-gray-700 dark:text-gray-300">
          <template v-for="(type, idx) in location.workTypes" :key="idx">
            {{ rt(type) }}<template v-if="idx < location.workTypes.length - 1">, </template>
          </template>
        </span>
      </span>
      <span class="text-gray-600 dark:text-gray-400">
        {{ $t('resume.bio.schedule-types') }}:
        <span class="text-gray-700 dark:text-gray-300">
          <template v-for="(type, idx) in location.scheduleTypes" :key="idx">
            {{ rt(type) }}<template v-if="idx < location.scheduleTypes.length - 1">, </template>
          </template>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '#shared/types/bio';
import { ResumeIcons } from '#shared/constants/resume-page';

const { tm, rt } = useI18n();
const location = computed(() => tm('resume.data.location') as unknown as Location);
</script>
