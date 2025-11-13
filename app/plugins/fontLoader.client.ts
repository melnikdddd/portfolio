export default defineNuxtPlugin({
  name: 'font-loader',
  parallel: true,
  async setup() {
    const { loadFonts } = useFontLoader();

    if (import.meta.client) {
      onNuxtReady(() => {
        loadFonts();
      });
    }
  },
});
