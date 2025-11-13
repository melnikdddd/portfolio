export const useFontLoader = () => {
  const isAppReady = useState<boolean>('fontLoader:isReady', () => false);

  const loadFonts = async () => {
    const minLoadTime = 500;
    const startTime = Date.now();

    if (import.meta.client && 'fonts' in document) {
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise((resolve) => setTimeout(resolve, 3000)),
        ]);
      } catch (error) {
        console.warn('Font loading error:', error);
      }
    }

    const elapsedTime = Date.now() - startTime;
    const remainingTime = Math.max(0, minLoadTime - elapsedTime);

    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }

    isAppReady.value = true;
  };

  return {
    isAppReady,
    loadFonts,
  };
};
