<template>
  <div class="flex flex-col gap-3 w-full">
    <h1 class="text-3xl md:text-4xl font-bold w-full">
      {{ $t('resume.bio.fullname') }}
    </h1>
    <p
      class="text-base md:text-lg text-gray-600 dark:text-gray-400 w-full max-w-none"
      style="white-space: normal; overflow: visible; text-overflow: clip; word-wrap: break-word"
    >
      {{ $t('resume.bio.description') }}
    </p>
  </div>
</template>
