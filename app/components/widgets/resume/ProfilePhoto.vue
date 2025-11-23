<template>
  <div class="flex justify-center md:justify-start">
    <NuxtImg
      :src="ProfileImage.src"
      :alt="ProfileImage.alt"
      class="rounded-lg w-56 h-64 md:w-64 md:h-80 object-cover shadow-lg"
      loading="eager"
      :quality="ProfileImage.quality"
      format="webp"
      :sizes="ProfileImage.sizes"
      preload
    />
  </div>
</template>

<script setup lang="ts">
import { ProfileImage } from '#shared/constants/resume-page';
</script>
