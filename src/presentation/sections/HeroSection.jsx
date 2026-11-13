import React from 'react';
import { motion } from 'framer-motion';
import {
  GithubLogo,
  LinkedinLogo,
  FacebookLogo,
  ArrowRight,
} from '@phosphor-icons/react';
import SplitText from '../components/common/SplitText';

const SOCIAL_ICON_MAP = {
  GithubLogo,
  LinkedinLogo,
  FacebookLogo,
};

export default function HeroSection({ profile, onNavigate, isDark = true }) {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center w-full px-3 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left Column: Intro & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left w-full"
        >
          <span className="hero-eyebrow">{profile.eyebrow}</span>
          <SplitText delay={100} duration={1}>
            <h1 className="hero-title text-4xl sm:text-5xl md:text-7xl font-bold mt-2 mb-4">
              Hello, <br />
              I&apos;m{' '}
              <span className={isDark ? 'metallic-text' : 'text-[#3d5945]'}>
                {profile.firstName}
              </span>
            </h1>
          </SplitText>

          <h2
            className={`text-xl md:text-2xl font-semibold mb-4 font-sans tracking-tight flex flex-wrap items-center gap-2 ${
              isDark ? 'text-zinc-200' : 'text-[#27392c]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}
          >
            {profile.headline.primary}{' '}
            <span className={isDark ? 'text-zinc-500' : 'text-[#9BB193]'}>•</span>{' '}
            {profile.headline.secondary}
          </h2>

          <p
            className={`hero-description text-base sm:text-lg md:text-xl mb-8 font-sans font-light leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}
          >
            {profile.description.prefix}
            <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {profile.description.highlight}
            </span>
            {profile.description.suffix}
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              onClick={(e) => onNavigate(e, 'projects')}
              className="hero-btn-primary group"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-3">
              {profile.socials.map((social) => {
                const SocialIcon = SOCIAL_ICON_MAP[social.iconName] || GithubLogo;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title={social.title}
                  >
                    <SocialIcon size={22} weight="bold" />
                  </a>
                );
              })}
            </div>
          </div>

          <div
            className={`mt-10 pt-6 border-t grid grid-cols-2 gap-6 sm:gap-10 w-full max-w-lg ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}
          >
            {profile.highlights.map((item, idx) => (
              <div key={item.id} className="flex flex-col items-start text-left">
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-1.5 ${
                    isDark ? 'text-zinc-500' : 'text-[#556b4f]'
                  }`}
                >
                  0{idx + 1} // {item.title}
                </span>
                <p
                  className={`heading-vibe text-sm sm:text-base font-bold ${
                    isDark ? 'text-zinc-100' : 'text-[#1a1515]'
                  }`}
                >
                  {item.detail}
                </p>
                <span
                  className={`text-xs font-mono mt-1 ${
                    isDark ? 'text-zinc-400' : 'text-gray-500'
                  }`}
                >
                  {item.subtitle}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Profile Frame with glass/border and custom shape */}
          <div className="profile-frame aspect-[4/5] w-full relative pointer-events-auto cursor-pointer">
            {/* Ambient Background Circles */}
            <div className="absolute top-1/2 left-1/2 w-[350px] max-w-[85vw] h-[350px] max-h-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/25 z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[450px] max-w-[95vw] h-[450px] max-h-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10 pointer-events-none"></div>

            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
            />
            {/* bottom gradient fade */}
            <div
              className={`absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t to-transparent pointer-events-none ${
                isDark ? 'from-[#0e0d12]/80' : 'from-[#9BB193]/60'
              }`}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
