import { githubRepository } from '../../data/repositories/GitHubRepository';

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/**
 * Pure business logic to extract available years from raw contribution payload.
 */
export function extractAvailableYears(data) {
  if (!data || !data.total) return ['2026', '2025', '2024'];
  return Object.keys(data.total).sort((a, b) => Number(b) - Number(a));
}

/**
 * Pure business logic to filter contributions by selected year ('lastYear' or 'YYYY').
 */
export function filterContributionsByYear(data, selectedYear) {
  if (!data || !data.contributions) {
    return { filteredContributions: [], totalCount: 0 };
  }

  if (selectedYear === 'lastYear') {
    const sorted = [...data.contributions].sort((a, b) => new Date(a.date) - new Date(b.date));
    const latestDateStr =
      sorted.length > 0 ? sorted[sorted.length - 1].date : new Date().toISOString().split('T')[0];
    const endDate = new Date(latestDateStr);
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 364);

    const filtered = sorted.filter((item) => {
      const d = new Date(item.date);
      return d >= startDate && d <= endDate;
    });

    const total = filtered.reduce((acc, curr) => acc + curr.count, 0);
    return { filteredContributions: filtered, totalCount: total };
  }

  const filtered = data.contributions.filter((item) => item.date.startsWith(selectedYear));
  const total =
    data.total?.[selectedYear] !== undefined
      ? data.total[selectedYear]
      : filtered.reduce((acc, curr) => acc + curr.count, 0);

  return { filteredContributions: filtered, totalCount: total };
}

/**
 * Pure business logic to group daily contributions into calendar weeks and month labels.
 */
export function buildContributionCalendar(filteredContributions) {
  if (!filteredContributions || filteredContributions.length === 0) {
    return { weeks: [], monthLabels: [] };
  }

  const sorted = [...filteredContributions].sort((a, b) => new Date(a.date) - new Date(b.date));
  const weeksArr = [];
  let currentWeek = [];

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

  const months = [];
  let lastMonth = -1;

  weeksArr.forEach((week, weekIndex) => {
    const firstDayInWeek = week.find((d) => d !== null);
    if (firstDayInWeek) {
      const d = new Date(firstDayInWeek.date);
      const monthIdx = d.getMonth();
      if (monthIdx !== lastMonth) {
        months.push({ text: MONTH_NAMES[monthIdx], weekIndex });
        lastMonth = monthIdx;
      }
    }
  });

  return { weeks: weeksArr, monthLabels: months };
}

/**
 * Use Case: fetchGitHubActivity
 */
export async function fetchGitHubActivity(username, repository = githubRepository) {
  return repository.fetchContributions(username);
}
