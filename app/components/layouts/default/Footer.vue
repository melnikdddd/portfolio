<template>
  <footer class="w-full bg-footer border-t border-footer py-8 mt-auto">
    <ContentContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-footer text-sm">
          <p>&copy; {{ currentYear }}. All rights reserved.</p>
        </div>

        <a
          href="https://github.com/melnikdddd/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
        >
          <ClientOnly>
            <Icon name="heroicons:code-bracket" class="w-5 h-5" />
          </ClientOnly>
          <span>{{ $t('resume.view-source-code') }}</span>
        </a>

        <SocialMedias />
      </div>
    </ContentContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
