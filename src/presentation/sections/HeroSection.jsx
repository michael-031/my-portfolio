import React from 'react';
import { motion } from 'framer-motion';
import {
  GithubLogo,
  LinkedinLogo,
  FacebookLogo,
  GraduationCap,
  ArrowRight,
  Code,
  Lightning,
  Gear,
} from '@phosphor-icons/react';
import SplitText from '../components/common/SplitText';

const BADGE_ICON_MAP = {
  Code,
  Lightning,
  GraduationCap,
};

const HIGHLIGHT_ICON_MAP = {
  GraduationCap,
  Gear,
};

const SOCIAL_ICON_MAP = {
  GithubLogo,
  LinkedinLogo,
  FacebookLogo,
};

export default function HeroSection({ profile, onNavigate }) {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] lg:min-h-[120vh] flex items-center justify-center w-full px-3 sm:px-6 md:px-8 py-16 lg:py-28"
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
              I&apos;m <span className="metallic-text">{profile.firstName}</span>
            </h1>
          </SplitText>

          <h2 className="text-xl md:text-2xl font-semibold text-zinc-200 mb-4 font-sans flex flex-wrap items-center gap-2">
            {profile.headline.primary} <span className="text-zinc-500">•</span>{' '}
            {profile.headline.secondary}
          </h2>

          <p className="hero-description text-base sm:text-lg md:text-xl mb-6 font-sans font-light text-zinc-400 leading-relaxed">
            {profile.description.prefix}
            <span className="font-medium text-white">{profile.description.highlight}</span>
            {profile.description.suffix}
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {profile.badges.map((badge) => {
              const IconComponent = BADGE_ICON_MAP[badge.iconName] || Code;
              return (
                <span
                  key={badge.id}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 text-zinc-200 text-xs font-semibold font-mono border border-white/15"
                >
                  <IconComponent size={15} weight="bold" /> {badge.label}
                </span>
              );
            })}
          </div>

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
        </motion.div>

        {/* Right Column: Image and Context Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6 w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Profile Frame with glass/border and custom shape */}
          <div className="profile-frame aspect-[4/5] w-full relative pointer-events-auto cursor-pointer">
            {/* Ambient Background Circles */}
            <div className="absolute top-1/2 left-1/2 w-[350px] max-w-[85vw] h-[350px] max-h-[85vw] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 w-[450px] max-w-[95vw] h-[450px] max-h-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-10 pointer-events-none"></div>

            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
            />
            {/* bottom gradient fade */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0e0d12]/80 to-transparent pointer-events-none"></div>
          </div>

          {/* Context Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.highlights.map((card) => {
              const CardIcon = HIGHLIGHT_ICON_MAP[card.iconName] || GraduationCap;
              return (
                <div key={card.id} className="education-card p-5 flex items-start gap-3">
                  <div className="p-2.5 bg-white/8 border border-white/10 rounded-xl text-white flex-shrink-0">
                    <CardIcon size={24} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white font-sans">{card.title}</h4>
                    <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{card.subtitle}</p>
                    <p className="text-xs text-zinc-300 mt-1 font-sans">{card.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
