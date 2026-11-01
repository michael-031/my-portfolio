import { useCallback, useEffect, useState } from 'react';

/**
 * Application Hook: useCarousel
 * Manages slide index and automatic slide rotation for image carousels.
 */
export function useCarousel(totalSlides, intervalMs = 3800) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!totalSlides || totalSlides <= 1) return undefined;

    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [totalSlides, intervalMs]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  return {
    currentSlide,
    goToSlide,
    goToPrevious,
    goToNext,
  };
}
