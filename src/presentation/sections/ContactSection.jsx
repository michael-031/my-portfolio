import React from 'react';
import { EnvelopeSimple, Phone, ArrowUp } from '@phosphor-icons/react';
import GitHubContributions from '../components/github/GitHubContributions';

export default function ContactSection({ contact, socials = [], onNavigate }) {
  return (
    <section id="contact-me" className="pt-16 md:pt-24 pb-12 bg-transparent border-t border-white/10">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-zinc-400 uppercase tracking-widest text-xs font-semibold font-mono mb-2">
              05 — Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-display">
              Contact me
            </h2>
            <p className="text-zinc-400 mb-8 font-sans leading-relaxed text-sm sm:text-base">
              Have a project in mind, need workflow automation, or want to collaborate on full-stack
              engineering? Reach out directly anytime.
            </p>

            <div className="flex flex-col gap-3.5 w-full">
              <a
                href={contact.mailto}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121117] border border-white/10 hover:border-white/25 text-sm sm:text-base font-medium text-zinc-200 hover:text-white transition-all font-sans group"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-[#0e0d12] transition-colors">
                  <EnvelopeSimple size={20} weight="bold" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase">Email</span>
                  <span className="font-display font-semibold">{contact.email}</span>
                </div>
              </a>

              <a
                href={contact.tel}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#121117] border border-white/10 hover:border-white/25 text-sm sm:text-base font-medium text-zinc-200 hover:text-white transition-all font-sans group"
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-white group-hover:bg-white group-hover:text-[#0e0d12] transition-colors">
                  <Phone size={20} weight="bold" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase">Phone</span>
                  <span className="font-display font-semibold">{contact.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Redesigned Live GitHub Commit Timeline */}
          <div className="lg:col-span-7 w-full">
            <GitHubContributions username={contact.githubUsername} />
          </div>
        </div>

        {/* Minimalist Architectural Signature Footer */}
        <footer className="mt-20 pt-12 border-t border-white/10 flex flex-col items-center text-center">
          <p className="text-xs font-display font-semibold text-white">Michael Inoc</p>
          <p className="text-xs font-sans text-zinc-500 mt-1">
            Full-Stack Developer &amp; Automation Specialist • Philippines
          </p>

          <div className="flex flex-wrap justify-center gap-5 items-center mt-5 text-xs font-sans text-zinc-400">
            <a
              href="#about-me"
              onClick={(e) => onNavigate && onNavigate(e, 'about-me')}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => onNavigate && onNavigate(e, 'projects')}
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => onNavigate && onNavigate(e, 'experience')}
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#hero"
              onClick={(e) => onNavigate && onNavigate(e, 'hero')}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={12} weight="bold" />
            </a>
          </div>

          <div className="flex justify-center gap-5 items-center mt-3 text-xs font-sans text-zinc-500">
            {[...socials].reverse().map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-200 transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Bold Architectural Wordmark */}
          <div className="my-8 select-none overflow-hidden w-full">
            <span className="block font-display font-extrabold text-[clamp(3.2rem,11vw,8.5rem)] leading-none tracking-tighter text-white/95">
              michaelinoc
            </span>
          </div>

          <p className="text-[11px] font-sans text-zinc-500">
            © {new Date().getFullYear()} Michael Inoc. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
