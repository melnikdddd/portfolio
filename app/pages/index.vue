<template>
  <ContentContainer class="mt-4 md:mt-8 xl:mt-12 flex flex-col gap-8">
    <Bio />
    <AboutMe />
    <ResumeFooter />
  </ContentContainer>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: () => `${t('resume.bio.fullname')} - Full-Stack Developer`,
  description: () => t('resume.about-me-text').split('\n\n')[0],
  ogTitle: () => `${t('resume.bio.fullname')} - Full-Stack Developer`,
  ogDescription: () => t('resume.about-me-text').split('\n\n')[0],
  ogType: 'website',
  ogLocale: () => locale.value === 'ua' ? 'uk_UA' : 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: () => `${t('resume.bio.fullname')} - Full-Stack Developer`,
  twitterDescription: () => t('resume.about-me-text').split('\n\n')[0],
});

useHead({
  htmlAttrs: {
    lang: () => locale.value === 'ua' ? 'uk' : 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: () => `https://danylo-melnyk.dev${locale.value === 'ua' ? '/ua' : ''}`,
    },
  ],
});
</script>
