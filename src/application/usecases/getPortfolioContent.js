import { portfolioRepository } from '../../data/repositories/PortfolioRepository';

/**
 * Use Case: getPortfolioContent
 * Orchestrates retrieval of all portfolio domain entities.
 */
export function getPortfolioContent(repository = portfolioRepository) {
  return {
    profile: repository.getProfile(),
    projects: repository.getProjects(),
    parallaxProducts: repository.getParallaxProducts(),
    showcaseProjects: repository.getShowcaseProjects(),
    experiences: repository.getExperiences(),
    techStack: repository.getTechStack(),
  };
}
