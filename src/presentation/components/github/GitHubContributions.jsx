import React from 'react';
import { GithubLogo } from '@phosphor-icons/react';
import { useGitHubContributions } from '../../../application/hooks/useGitHubContributions';

// Dark Obsidian Monochrome & Silver-White Palette
const LEVEL_COLORS = [
  '#191820', // level 0 - deep obsidian empty cell
  '#2f2e3b', // level 1 - muted slate
  '#525166', // level 2 - mid steel
  '#a1a1b5', // level 3 - bright silver
  '#ffffff', // level 4 - pure high-contrast white
];

export default function GitHubContributions({ username = 'michael-031' }) {
  const {
    loading,
    error,
    years,
    selectedYear,
    setSelectedYear,
    hoveredDay,
    setHoveredDay,
    totalCount,
    weeks,
    monthLabels,
  } = useGitHubContributions(username);

  return (
    <div className="w-full bg-[#121117]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl font-sans transition-all duration-300 hover:border-white/20">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-white/8 border border-white/12 rounded-xl text-white">
            <GithubLogo size={22} weight="bold" />
          </div>
          <div>
            <h3
              className="text-base sm:text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {loading
                ? 'Loading live contributions...'
                : `${totalCount} contributions ${
                    selectedYear === 'lastYear' ? 'in the last year' : `in ${selectedYear}`
                  }`}
            </h3>
            <p className="text-xs text-zinc-400 font-mono mt-0.5">
              {hoveredDay ? (
                <span className="text-white font-semibold">
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on{' '}
                  {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              ) : (
                `GitHub Activity — @${username}`
              )}
            </p>
          </div>
        </div>

        {/* Year Tabs adhering to theme buttons */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto flex-wrap">
          <button
            onClick={() => setSelectedYear('lastYear')}
            className={`px-3 py-1.5 text-xs font-semibold font-mono rounded-lg transition-all cursor-pointer ${
              selectedYear === 'lastYear'
                ? 'bg-white text-[#0e0d12] shadow-sm'
                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            Last Year
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1.5 text-xs font-semibold font-mono rounded-lg transition-all cursor-pointer ${
                selectedYear === y
                  ? 'bg-white text-[#0e0d12] shadow-sm'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Main Contribution Graph SVG (Fluid 100% Responsive - NO HORIZONTAL SCROLL) */}
      <div className="w-full">
        {loading ? (
          <div className="h-[130px] flex items-center justify-center text-xs text-zinc-400 font-mono">
            Fetching GitHub activity from @{username}...
          </div>
        ) : error || !weeks.length ? (
          <div className="h-[130px] flex flex-col items-center justify-center gap-2 text-xs text-zinc-400">
            <p>Unable to load live GitHub data right now.</p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:underline"
            >
              View profile directly on GitHub ↗
            </a>
          </div>
        ) : (
          <svg
            viewBox="0 0 735 116"
            className="w-full h-auto overflow-visible select-none"
            aria-label="GitHub Contributions Heatmap"
          >
            {/* Month Labels */}
            {monthLabels.map((m, idx) => (
              <text
                key={idx}
                x={32 + m.weekIndex * 13.2}
                y="13"
                className="fill-zinc-400 text-[10px] font-mono"
              >
                {m.text}
              </text>
            ))}

            {/* Day Labels (Mon, Wed, Fri) */}
            <text x="0" y="44" className="fill-zinc-400 text-[9.5px] font-mono">
              Mon
            </text>
            <text x="0" y="70" className="fill-zinc-400 text-[9.5px] font-mono">
              Wed
            </text>
            <text x="0" y="96" className="fill-zinc-400 text-[9.5px] font-mono">
              Fri
            </text>

            {/* Grid Squares */}
            {weeks.map((week, wIdx) => {
              const xPos = 32 + wIdx * 13.2;
              return week.map((day, dIdx) => {
                if (!day) return null;
                const yPos = 23 + dIdx * 13;
                const color = LEVEL_COLORS[day.level] || LEVEL_COLORS[0];
                const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                });
                const tooltipText = `${day.count} contribution${
                  day.count === 1 ? '' : 's'
                } on ${formattedDate}`;

                return (
                  <rect
                    key={day.date}
                    x={xPos}
                    y={yPos}
                    width="10.5"
                    height="10.5"
                    rx="2.5"
                    ry="2.5"
                    fill={color}
                    className="transition-all duration-150 cursor-pointer hover:stroke-white hover:stroke-1"
                    onMouseEnter={() => setHoveredDay(day)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <title>{tooltipText}</title>
                  </rect>
                );
              });
            })}
          </svg>
        )}
      </div>

      {/* Footer / Legend Row adhering to theme colors */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white font-semibold transition-colors flex items-center gap-1.5"
        >
          <GithubLogo size={16} weight="bold" /> View live profile @{username} ↗
        </a>

        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span>Less</span>
          {LEVEL_COLORS.map((color, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded-[2.5px] border border-white/10"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
