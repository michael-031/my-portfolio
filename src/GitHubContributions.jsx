import { useEffect, useState, useMemo } from 'react';
import { GithubLogo, Atom } from "@phosphor-icons/react";

export default function GitHubContributions({ username = 'michael-031' }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedYear, setSelectedYear] = useState('lastYear');
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json();
      })
      .then(json => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Contributions API error:', err);
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      });
    return () => { isMounted = false; };
  }, [username]);

  // Compute available years from total object (e.g. ['2026', '2025', '2024'])
  const years = useMemo(() => {
    if (!data || !data.total) return ['2026', '2025', '2024'];
    return Object.keys(data.total).sort((a, b) => b - a);
  }, [data]);

  // Filter contributions based on selectedYear
  const { filteredContributions, totalCount } = useMemo(() => {
    if (!data || !data.contributions) return { filteredContributions: [], totalCount: 0 };
    
    if (selectedYear === 'lastYear') {
      const sorted = [...data.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
      const latestDateStr = sorted.length > 0 ? sorted[sorted.length - 1].date : new Date().toISOString().split('T')[0];
      const endDate = new Date(latestDateStr);
      const startDate = new Date(endDate);
      startDate.setDate(startDate.getDate() - 364);

      const filtered = sorted.filter(item => {
        const d = new Date(item.date);
        return d >= startDate && d <= endDate;
      });

      const total = filtered.reduce((acc, curr) => acc + curr.count, 0);
      return { filteredContributions: filtered, totalCount: total };
    } else {
      const filtered = data.contributions.filter(item => item.date.startsWith(selectedYear));
      const total = data.total[selectedYear] !== undefined 
        ? data.total[selectedYear] 
        : filtered.reduce((acc, curr) => acc + curr.count, 0);
      return { filteredContributions: filtered, totalCount: total };
    }
  }, [data, selectedYear]);

  // Organize filtered contributions into weeks & compute month labels
  const { weeks, monthLabels } = useMemo(() => {
    if (!filteredContributions || filteredContributions.length === 0) {
      return { weeks: [], monthLabels: [] };
    }

    const sorted = [...filteredContributions].sort((a, b) => new Date(a.date) - new Date(b.date));
    const weeksArr = [];
    let currentWeek = [];

    // Align the first week to correct day of week (0 = Sun, 1 = Mon ... 6 = Sat)
    const firstDate = new Date(sorted[0].date);
    const startDayOfWeek = firstDate.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      currentWeek.push(null);
    }

    sorted.forEach((dayObj) => {
      currentWeek.push(dayObj);
      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      weeksArr.push(currentWeek);
    }

    // Compute month headers
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months = [];
    let lastMonth = -1;

    weeksArr.forEach((week, weekIndex) => {
      const firstDayInWeek = week.find(d => d !== null);
      if (firstDayInWeek) {
        const d = new Date(firstDayInWeek.date);
        const monthIdx = d.getMonth();
        if (monthIdx !== lastMonth) {
          months.push({ text: monthNames[monthIdx], weekIndex });
          lastMonth = monthIdx;
        }
      }
    });

    return { weeks: weeksArr, monthLabels: months };
  }, [filteredContributions]);

  // Theme green palette matching site design (#3d5945)
  const levelColors = [
    '#f0f4ef', // level 0 - soft neutral off-white/green
    '#c5dac1', // level 1 - light sage
    '#9bb193', // level 2 - mid sage
    '#556b4f', // level 3 - forest sage
    '#3d5945'  // level 4 - primary theme forest green
  ];

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border border-[#e2e8f0] rounded-2xl p-6 shadow-sm font-sans transition-all duration-300 hover:shadow-md">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-[#eef3ee] rounded-xl text-[#3d5945]">
            <GithubLogo size={22} weight="bold" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#1a1515] font-sans tracking-tight">
              {loading ? (
                "Loading live contributions..."
              ) : (
                `${totalCount} contributions ${selectedYear === 'lastYear' ? 'in the last year' : `in ${selectedYear}`}`
              )}
            </h3>
            <p className="text-xs text-[#556b4f] font-mono mt-0.5">
              {hoveredDay ? (
                <span className="text-[#3d5945] font-semibold">
                  {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on {new Date(hoveredDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
            className={`px-3 py-1.5 text-xs font-semibold font-mono rounded-lg transition-all ${
              selectedYear === 'lastYear'
                ? 'bg-[#3d5945] text-white shadow-sm'
                : 'bg-[#f0f4ef] text-[#556b4f] hover:bg-[#e2ebe0] hover:text-[#27392c]'
            }`}
          >
            Last Year
          </button>
          {years.map(y => (
            <button
              key={y}
              onClick={() => setSelectedYear(y)}
              className={`px-3 py-1.5 text-xs font-semibold font-mono rounded-lg transition-all ${
                selectedYear === y
                  ? 'bg-[#3d5945] text-white shadow-sm'
                  : 'bg-[#f0f4ef] text-[#556b4f] hover:bg-[#e2ebe0] hover:text-[#27392c]'
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
          <div className="h-[130px] flex items-center justify-center text-xs text-[#556b4f] font-mono">
            Fetching GitHub activity from @{username}...
          </div>
        ) : error || !weeks.length ? (
          <div className="h-[130px] flex flex-col items-center justify-center gap-2 text-xs text-gray-500">
            <p>Unable to load live GitHub data right now.</p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d5945] font-semibold hover:underline"
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
                className="fill-[#556b4f] text-[10px] font-mono"
              >
                {m.text}
              </text>
            ))}

            {/* Day Labels (Mon, Wed, Fri) */}
            <text x="0" y="44" className="fill-[#556b4f] text-[9.5px] font-mono">Mon</text>
            <text x="0" y="70" className="fill-[#556b4f] text-[9.5px] font-mono">Wed</text>
            <text x="0" y="96" className="fill-[#556b4f] text-[9.5px] font-mono">Fri</text>

            {/* Grid Squares */}
            {weeks.map((week, wIdx) => {
              const xPos = 32 + wIdx * 13.2;
              return week.map((day, dIdx) => {
                if (!day) return null;
                const yPos = 23 + dIdx * 13;
                const color = levelColors[day.level] || levelColors[0];
                const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                });
                const tooltipText = `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formattedDate}`;

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
                    className="transition-all duration-150 cursor-pointer hover:stroke-[#3d5945] hover:stroke-1"
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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-[#f1f5f9] text-xs font-mono text-[#556b4f]">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3d5945] font-semibold transition-colors flex items-center gap-1.5"
        >
          <GithubLogo size={16} weight="bold" /> View live profile @{username} ↗
        </a>

        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span>Less</span>
          {levelColors.map((color, idx) => (
            <div
              key={idx}
              className="w-3 h-3 rounded-[2.5px] border border-black/5"
              style={{ backgroundColor: color }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
