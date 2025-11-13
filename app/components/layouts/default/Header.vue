<template>
  <header
    class="w-full py-4 sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/40"
  >
    <ContentContainer class="flex items-center">
      <BurgerButton class="md:hidden" />
      <nav class="hidden md:flex md:mx-auto gap-4" aria-label="Primary navigation">
        <AppNavLink :href="link.href" :text="link.text" v-for="link in links" :key="link.text" />
      </nav>
      <div class="flex gap-2 ml-auto md:ml-0" role="group" aria-label="Theme and language controls">
        <SwitchColorMode />
        <SwitchLanguage />
      </div>
    </ContentContainer>
  </header>
</template>

<script setup lang="ts">
const { links } = useHeader();
</script>
