import React from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { useCarousel } from '../../application/hooks/useCarousel';

export default function AboutSection({ gallery = [], slogan = '' }) {
  const { currentSlide, goToSlide, goToPrevious, goToNext } = useCarousel(gallery.length, 3800);

  return (
    <section id="about-me" className="about-me-section py-16 md:py-24">
      <div className="about-me-shell max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <span className="text-zinc-400 uppercase tracking-wider text-xs font-bold font-mono mb-2">
            03 — Story
          </span>
          <h2
            className="about-me-title text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            About Me
          </h2>
        </div>

        <div className="about-carousel relative" aria-label="About me photo carousel">
          <button
            type="button"
            className="about-arrow about-arrow-left"
            onClick={goToPrevious}
            aria-label="Show previous image"
          >
            <CaretLeft size={20} weight="bold" />
          </button>

          <div className="about-carousel-stage rounded-2xl overflow-hidden shadow-lg border border-white/12">
            {gallery.map((image, index) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className={`about-slide ${index === currentSlide ? 'about-slide-active' : ''}`}
              />
            ))}
          </div>

          <button
            type="button"
            className="about-arrow about-arrow-right"
            onClick={goToNext}
            aria-label="Show next image"
          >
            <CaretRight size={20} weight="bold" />
          </button>
        </div>

        <div className="about-dots" aria-label="Carousel pagination">
          {gallery.map((image, index) => (
            <button
              key={`${image.alt}-dot`}
              type="button"
              onClick={() => goToSlide(index)}
              className={`about-dot ${index === currentSlide ? 'about-dot-active' : ''}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <p className="about-slogan mt-6 md:mt-8 font-medium text-base sm:text-lg text-center text-zinc-300">
          {slogan}
        </p>
      </div>
    </section>
  );
}
