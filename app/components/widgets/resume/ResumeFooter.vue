<template>
  <footer class="w-full">
    <nav class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 py-4">
      <AppButtonLink :text="$t('resume.view-all-skills')" :href="Routes.skills.get()" />
      <AppButtonLink :text="$t('resume.contact-me-link')" :href="Routes.contacts.get()" />
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { Routes } from '#shared/constants/routes.js';
</script>
