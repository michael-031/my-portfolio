import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { portfolioRepository } from '../../../data/repositories/PortfolioRepository';

const RowCarouselTrack = ({ products, direction = 'left', rowId, onSelectProject }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationPlayState: isHovered ? 'paused' : 'running',
      }}
      className={`flex flex-row gap-12 pr-12 w-max pointer-events-auto ${
        direction === 'left' ? 'animate-circle-left' : 'animate-circle-right'
      }`}
    >
      {products.map((product, idx) => (
        <ProductCard
          product={product}
          key={`${rowId}-${idx}-${product.title}`}
          onSelectProject={onSelectProject}
        />
      ))}
    </div>
  );
};

export default function HeroParallaxWrapper({
  children,
  products: providedProducts,
  onSelectProject,
}) {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const products = React.useMemo(
    () => providedProducts || portfolioRepository.getParallaxProducts(),
    [providedProducts]
  );

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const springConfig = { stiffness: 200, damping: 26, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.32, 0.82, 1], [0, 0, 450, 450]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.32, 0.82, 1], [0, 0, -450, -450]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [16, 16, 0]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32], [14, 14, 0]),
    springConfig
  );

  const translateYValues = isMobile
    ? [160, 680, 1350, 1600, 2250]
    : [-80, 450, 1050, 950, 1950];

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.18, 0.32, 0.82, 1], translateYValues),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.12, 0.25, 0.85, 1], [0.22, 0.22, 1, 1, 0.35]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.15, 0.32, 0.82, 1], [1, 1, 0.78, 0.78, 0.78]),
    springConfig
  );

  const repeatRow = (slice) => [...slice, ...slice, ...slice, ...slice];
  const firstRow = repeatRow(products.slice(0, 5));
  const secondRow = repeatRow(products.slice(5, 10));
  const thirdRow = repeatRow(products.slice(10, 15));
  const fourthRow = repeatRow(products.slice(15, 20));

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* 3D Parallax Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
            scale,
          }}
          className="w-full pt-12"
        >
          {/* ROW 1 (Circular Loop Left - TLC Engine) */}
          <motion.div style={{ x: translateX }} className="mb-6 overflow-visible">
            <RowCarouselTrack
              products={firstRow}
              direction="left"
              rowId="row1"
              onSelectProject={onSelectProject}
            />
          </motion.div>

          {/* ROW 2 (Circular Loop Right - TecnecT) */}
          <motion.div style={{ x: translateXReverse }} className="mb-6 overflow-visible">
            <RowCarouselTrack
              products={secondRow}
              direction="right"
              rowId="row2"
              onSelectProject={onSelectProject}
            />
          </motion.div>

          {/* ROW 3 (Circular Loop Left - Lemivon) */}
          <motion.div style={{ x: translateX }} className="mb-6 overflow-visible">
            <RowCarouselTrack
              products={thirdRow}
              direction="left"
              rowId="row3"
              onSelectProject={onSelectProject}
            />
          </motion.div>

          {/* ROW 4 (Circular Loop Right - Permit Tracker Apps Script Automation) */}
          <motion.div style={{ x: translateXReverse }} className="overflow-visible">
            <RowCarouselTrack
              products={fourthRow}
              direction="right"
              rowId="row4"
              onSelectProject={onSelectProject}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Foreground Content: Hero, Projects Header */}
      <div className="relative z-10 pointer-events-none [&_a]:pointer-events-auto [&_button]:pointer-events-auto [&_input]:pointer-events-auto [&_img]:pointer-events-auto [&_.profile-frame]:pointer-events-auto [&_.education-card]:pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
