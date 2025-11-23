<template>
  <FullScreenContainer>
    <ContentContainer>
      <CenterContainer>
        <div class="flex flex-col items-center gap-6 max-w-md mx-auto text-center">
          <h1 class="text-7xl md:text-8xl font-bold text-gray-900 dark:text-gray-100">
            {{ error.statusCode }}
          </h1>

          <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {{ errorDescription }}
          </p>

          <AppButtonLink :href="Routes.resume.get()" :text="$t('error-page.home')" />
        </div>
      </CenterContainer>
    </ContentContainer>
  </FullScreenContainer>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';
import { Routes } from '#shared/constants/routes';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();
const { t } = useI18n();

const errorDescription = computed(() => {
  switch (props.error.statusCode) {
    case 404:
      return t('error-page.not-found-description');
    case 500:
      return t('error-page.server-error-description');
    default:
      return props.error.message || t('error-page.error-description');
  }
});

useSeoMeta({
  title: () => `${props.error.statusCode} - Error`,
  robots: 'noindex, nofollow',
});
</script>
