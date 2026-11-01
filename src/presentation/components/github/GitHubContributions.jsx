import React from 'react';
import { GithubLogo, GitCommit, Flame, CalendarBlank, ArrowUpRight } from '@phosphor-icons/react';
import { useGitHubContributions } from '../../../application/hooks/useGitHubContributions';

// Dark Obsidian Monochrome & Silver-White Commit Palette
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
    activeDays,
    peakDay,
    recentTimeline,
    weeks,
    monthLabels,
  } = useGitHubContributions(username);

  return (
    <div className="w-full bg-[#121117]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] font-sans transition-all duration-300 hover:border-white/20">
      {/* Top Status & Year Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/12 flex items-center justify-center text-white shrink-0">
            <GithubLogo size={22} weight="bold" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                Commit Timeline • @{username}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-display tracking-tight mt-0.5">
              {hoveredDay ? (
                <span className="text-white">
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on{' '}
                  {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              ) : loading ? (
                'Synchronizing commit history...'
              ) : (
                `${totalCount} contributions ${
                  selectedYear === 'lastYear' ? 'in the last 12 months' : `in ${selectedYear}`
                }`
              )}
            </h3>
          </div>
        </div>

        {/* Year Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto flex-wrap bg-[#0b0a0e] p-1 rounded-full border border-white/10">
          <button
            onClick={() => setSelectedYear('lastYear')}
            className={`px-3 py-1 text-xs font-semibold font-display rounded-full transition-all cursor-pointer ${
              selectedYear === 'lastYear'
                ? 'bg-white text-[#0e0d12] shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Last Year
          </button>
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1 text-xs font-semibold font-display rounded-full transition-all cursor-pointer ${
                selectedYear === y
                  ? 'bg-white text-[#0e0d12] shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Metrics Row */}
      <div className="grid grid-cols-3 gap-3 my-5">
        <div className="bg-[#0d0c11] border border-white/8 rounded-xl p-3 sm:p-3.5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <GitCommit size={14} className="text-zinc-300" />
            <span>Total Output</span>
          </div>
          <p className="text-lg sm:text-xl font-display font-bold text-white mt-1">
            {loading ? '—' : totalCount}
          </p>
        </div>

        <div className="bg-[#0d0c11] border border-white/8 rounded-xl p-3 sm:p-3.5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <CalendarBlank size={14} className="text-zinc-300" />
            <span>Active Days</span>
          </div>
          <p className="text-lg sm:text-xl font-display font-bold text-white mt-1">
            {loading ? '—' : `${activeDays}d`}
          </p>
        </div>

        <div className="bg-[#0d0c11] border border-white/8 rounded-xl p-3 sm:p-3.5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <Flame size={14} className="text-zinc-300" />
            <span>Peak Day</span>
          </div>
          <p className="text-lg sm:text-xl font-display font-bold text-white mt-1">
            {loading ? '—' : `${peakDay.count} commits`}
          </p>
        </div>
      </div>

      {/* Contribution Matrix SVG */}
      <div className="w-full bg-[#0b0a0e] border border-white/8 rounded-xl p-3.5 sm:p-4">
        {loading ? (
          <div className="h-[120px] flex items-center justify-center text-xs text-zinc-400 font-mono">
            Fetching GitHub commit matrix from @{username}...
          </div>
        ) : error || !weeks.length ? (
          <div className="h-[120px] flex flex-col items-center justify-center gap-2 text-xs text-zinc-400">
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
                className="fill-zinc-500 text-[10px] font-mono"
              >
                {m.text}
              </text>
            ))}

            {/* Day Labels (Mon, Wed, Fri) */}
            <text x="0" y="44" className="fill-zinc-500 text-[9.5px] font-mono">
              Mon
            </text>
            <text x="0" y="70" className="fill-zinc-500 text-[9.5px] font-mono">
              Wed
            </text>
            <text x="0" y="96" className="fill-zinc-500 text-[9.5px] font-mono">
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

      {/* Chronological Recent Commit Activity Timeline */}
      {!loading && recentTimeline.length > 0 && (
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              Recent Commit Milestones
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Latest active days</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {recentTimeline.map((entry) => (
              <div
                key={entry.date}
                onMouseEnter={() => setHoveredDay(entry)}
                onMouseLeave={() => setHoveredDay(null)}
                className="bg-[#0d0c11] hover:bg-[#181722] border border-white/8 hover:border-white/20 rounded-xl px-3 py-2 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span className="text-[10px] font-mono text-zinc-400">
                    {new Date(entry.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-xs font-display font-semibold text-white mt-1.5">
                  {entry.count} {entry.count === 1 ? 'commit' : 'commits'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer / Legend Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-5 pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white font-semibold transition-colors inline-flex items-center gap-1.5"
        >
          <GithubLogo size={15} weight="bold" />
          <span>Explore full repository timeline</span>
          <ArrowUpRight size={13} weight="bold" />
        </a>

        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <span>Less</span>
          {LEVEL_COLORS.map((color, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded-[3px] border border-white/10"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
