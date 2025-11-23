<template>
  <header
    class="w-full py-4 sticky top-0 z-[60] bg-header/95 backdrop-blur-md border-b border-header shadow-sm transition-all duration-300"
  >
    <ContentContainer class="flex items-center relative">
      <BurgerButton class="md:hidden relative z-[70]" />
      <nav class="hidden md:flex md:mx-auto gap-12" aria-label="Primary navigation">
        <AppNavLink v-for="link in links" :key="link.text" :href="link.href" :text="link.text" />
      </nav>
      <section
        class="flex gap-2 ml-auto md:ml-0"
        role="group"
        aria-label="Theme and language controls"
      >
        <SwitchColorMode />
        <SwitchLanguage />
      </section>
    </ContentContainer>
    <FullScreenNavigationMenu />
  </header>
</template>

<script setup lang="ts">
const { links } = useHeader();
</script>
