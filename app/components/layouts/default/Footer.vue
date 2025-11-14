<template>
  <footer class="w-full bg-footer border-t border-footer py-8 mt-auto">
    <ContentContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-footer text-sm">
          <p>&copy; {{ currentYear }}. All rights reserved.</p>
        </div>
        <SocialMedias />
      </div>
    </ContentContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
