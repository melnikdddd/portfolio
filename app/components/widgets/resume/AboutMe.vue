<template>
  <section>
    <AppCard variant="primary" :title="$t('resume.about-me')">
      <template #content>
        <article class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
          <p class="whitespace-pre-line">{{ $t('resume.about-me-text') }}</p>
        </article>
      </template>
    </AppCard>
  </section>
</template>
