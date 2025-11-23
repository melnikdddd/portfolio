<template>
  <ContentContainer class="my-4 md:mt-8 xl:mt-12 gap-4 flex flex-col">
    <NextSkills />
    <NuxtSkills />
    <FrontEndSkills />
    <NestSkills />
    <BaseSkills />
    <DatabaseSkills />
    <SoftSkills />
  </ContentContainer>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: () => `${t('skills.title')} - ${t('resume.bio.fullname')}`,
  description: () => t('skills.description'),
  ogTitle: () => `${t('skills.title')} - ${t('resume.bio.fullname')}`,
  ogDescription: () => t('skills.description'),
});
</script>
