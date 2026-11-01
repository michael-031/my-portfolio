import { useEffect, useMemo, useState } from 'react';
import {
  fetchGitHubActivity,
  extractAvailableYears,
  filterContributionsByYear,
  buildContributionCalendar,
} from '../usecases/getGitHubActivity';

/**
 * Application Hook: useGitHubContributions
 * Manages remote data fetching, year selection, and heatmap grid calculations.
 */
export function useGitHubContributions(username = 'michael-031') {
  const [state, setState] = useState({
    username,
    data: null,
    loading: true,
    error: false,
  });
  const [selectedYear, setSelectedYear] = useState('lastYear');
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetchGitHubActivity(username)
      .then((json) => {
        if (isMounted) {
          setState({
            username,
            data: json,
            loading: false,
            error: false,
          });
        }
      })
      .catch((err) => {
        console.error('Contributions API error:', err);
        if (isMounted) {
          setState({
            username,
            data: null,
            loading: false,
            error: true,
          });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  const loading = state.username !== username ? true : state.loading;
  const error = state.username !== username ? false : state.error;
  const data = state.username !== username ? null : state.data;

  const years = useMemo(() => extractAvailableYears(data), [data]);

  const { filteredContributions, totalCount, activeDays, peakDay, recentTimeline } = useMemo(
    () => filterContributionsByYear(data, selectedYear),
    [data, selectedYear]
  );

  const { weeks, monthLabels } = useMemo(
    () => buildContributionCalendar(filteredContributions),
    [filteredContributions]
  );

  return {
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
  };
}
