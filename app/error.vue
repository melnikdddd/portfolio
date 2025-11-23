<template>
  <FullScreenContainer>
    <ContentContainer>
      <CenterContainer>
        <h1 class="text-4xl font-bold">
          {{ error.statusCode }}
        </h1>
        <p class="text-xl">
          {{ error.message }}
        </p>
        <AppButtonLink :href="Routes.resume.get()" :text="$t('error-page.home')" />
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

defineProps<Props>();
</script>
