import { useMemo } from 'react';
import { getPortfolioContent } from '../usecases/getPortfolioContent';

/**
 * Application Hook: usePortfolioData
 * Provides memoized portfolio domain entities to presentation components.
 */
export function usePortfolioData() {
  return useMemo(() => getPortfolioContent(), []);
}
