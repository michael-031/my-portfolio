import React from 'react';
import { EnvelopeSimple, Phone } from '@phosphor-icons/react';
import GitHubContributions from '../components/github/GitHubContributions';

export default function ContactSection({ contact, socials = [], isDark = true }) {
  return (
    <section
      id="contact-me"
      className={`py-16 md:py-24 border-t transition-colors duration-300 ${
        isDark ? 'bg-[#0b0a0f]/80 border-white/10' : 'bg-white border-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Contact details */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span
            className={`uppercase tracking-wider text-xs font-bold font-mono mb-2 ${
              isDark ? 'text-zinc-400' : 'text-[#556b4f]'
            }`}
          >
            04 — Contact
          </span>
          <h2
            className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-[#1a1515]'}`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let&apos;s connect
          </h2>
          <p
            className={`mb-8 font-sans leading-relaxed ${
              isDark ? 'text-zinc-400' : 'text-gray-600'
            }`}
          >
            If you have an idea, want to collaborate, or just want to chat about code and computer
            engineering, drop me a message.
          </p>

          <div className="flex flex-col gap-4 w-full">
            <a
              href={contact.mailto}
              className={`flex items-center gap-3 text-lg font-medium transition-colors font-sans ${
                isDark
                  ? 'text-zinc-200 hover:text-white'
                  : 'text-gray-700 hover:text-[#3d5945]'
              }`}
            >
              <EnvelopeSimple
                size={24}
                weight="duotone"
                className={isDark ? 'text-white' : 'text-[#3d5945]'}
              />
              {contact.email}
            </a>
            <a
              href={contact.tel}
              className={`flex items-center gap-3 text-lg font-medium transition-colors font-sans ${
                isDark
                  ? 'text-zinc-200 hover:text-white'
                  : 'text-gray-700 hover:text-[#3d5945]'
              }`}
            >
              <Phone
                size={24}
                weight="duotone"
                className={isDark ? 'text-white' : 'text-[#3d5945]'}
              />
              {contact.phone}
            </a>
          </div>

          <div
            className={`flex gap-6 items-center mt-10 border-t pt-6 w-full ${
              isDark ? 'border-white/10' : 'border-gray-100'
            }`}
          >
            {[...socials].reverse().map((social, idx, arr) => (
              <React.Fragment key={social.id}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {social.label}
                </a>
                {idx < arr.length - 1 && (
                  <span className={isDark ? 'text-zinc-600' : 'text-gray-300'}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: Live GitHub Contributions Card */}
        <div className="lg:col-span-7 w-full">
          <GitHubContributions username={contact.githubUsername} isDark={isDark} />
        </div>
      </div>
    </section>
  );
}
