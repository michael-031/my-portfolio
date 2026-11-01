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
  MapPin,
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
      className="min-h-[95dvh] lg:min-h-[112vh] flex items-center justify-center w-full px-3 sm:px-6 md:px-8 py-16 lg:py-24"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Intro & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left w-full"
        >
          <span className="hero-eyebrow px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
            <MapPin size={14} weight="fill" className="text-zinc-300" />
            <span>Philippines • Full-Stack &amp; Automation Specialist</span>
          </span>

          <div className="mt-2 mb-3">
            <span className="block text-xl sm:text-2xl font-display font-semibold text-zinc-200 mb-1">
              Hi! I&apos;m
            </span>
            <SplitText delay={100} duration={1}>
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-extrabold metallic-text">
                {profile.name}
              </h1>
            </SplitText>
          </div>

          <h2 className="text-lg md:text-xl font-medium text-zinc-300 mb-5 font-display flex flex-wrap items-center gap-2.5">
            <span>{profile.headline.primary}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">{profile.headline.secondary}</span>
          </h2>

          <p className="hero-description text-base sm:text-lg mb-7 font-sans font-normal text-zinc-400 leading-relaxed max-w-2xl">
            {profile.description.prefix}
            <span className="font-semibold text-white">{profile.description.highlight}</span>
            {profile.description.suffix}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {profile.badges.map((badge) => {
              const IconComponent = BADGE_ICON_MAP[badge.iconName] || Code;
              return (
                <span
                  key={badge.id}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#121117] text-zinc-200 text-xs font-medium font-display border border-white/10"
                >
                  <IconComponent size={14} weight="bold" className="text-zinc-400" /> {badge.label}
                </span>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-6">
            <a
              href="#projects"
              onClick={(e) => onNavigate(e, 'projects')}
              className="hero-btn-primary group"
            >
              <span>View Projects</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact-me"
              onClick={(e) => onNavigate(e, 'contact-me')}
              className="hero-btn-secondary"
            >
              <span>Contact Me</span>
            </a>
          </div>

          {/* Subtle Social Links Row */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2.5">
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
                    <SocialIcon size={19} weight="bold" />
                  </a>
                );
              })}
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-3 text-xs font-sans text-zinc-400">
              {profile.socials.map((social) => (
                <a
                  key={`${social.id}-text`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Image and Context Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-5 w-full max-w-md mx-auto lg:max-w-none"
        >
          {/* Sleek Dark Obsidian Portrait Frame */}
          <div className="profile-frame aspect-[4/5] w-full relative pointer-events-auto cursor-pointer">
            <img
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d12]/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#0e0d12]/80 backdrop-blur-md border border-white/10 pointer-events-none">
              <div>
                <p className="text-xs font-display font-bold text-white">{profile.name}</p>
                <p className="text-[11px] font-mono text-zinc-400">Software &amp; Automation</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>

          {/* Context Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {profile.highlights.map((card) => {
              const CardIcon = HIGHLIGHT_ICON_MAP[card.iconName] || GraduationCap;
              return (
                <div key={card.id} className="education-card p-4 flex items-start gap-3">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-white flex-shrink-0">
                    <CardIcon size={22} weight="duotone" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white font-display">{card.title}</h4>
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
