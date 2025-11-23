<template>
  <ContentContainer class="mt-4 md:mt-8 xl:mt-12">
    <PageTitle :title="$t('contacts.title')" />

    <div class="flex flex-col gap-8 mt-8">
      <!-- Email Card -->
      <AppCard variant="primary" :title="$t('contacts.email.title')">
        <template #content>
          <div class="flex flex-col gap-4">
            <p class="text-gray-700 dark:text-gray-300">
              {{ $t('contacts.email.description') }}
            </p>
            <a
              href="mailto:Da.melnik2011@gmail.com"
              class="text-blue-600 dark:text-blue-400 hover:underline font-medium text-lg"
            >
              Da.melnik2011@gmail.com
            </a>
          </div>
        </template>
      </AppCard>

      <!-- Social Media Card -->
      <AppCard variant="primary" :title="$t('contacts.social.title')">
        <template #content>
          <div class="flex flex-col gap-4">
            <p class="text-gray-700 dark:text-gray-300">
              {{ $t('contacts.social.description') }}
            </p>
            <SocialMedias />
          </div>
        </template>
      </AppCard>
    </div>
  </ContentContainer>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => `${t('contacts.title')} - ${t('resume.bio.fullname')}`,
  description: () => t('contacts.email.description'),
  ogTitle: () => `${t('contacts.title')} - ${t('resume.bio.fullname')}`,
  ogDescription: () => t('contacts.email.description'),
});
</script>
