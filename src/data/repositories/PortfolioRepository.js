import { IPortfolioRepository } from '../../domain/repositories/IPortfolioRepository';
import { Profile } from '../../domain/entities/Profile';
import { Project, ParallaxProductCard } from '../../domain/entities/Project';
import { Experience } from '../../domain/entities/Experience';
import { TechItem } from '../../domain/entities/TechItem';
import {
  profileStaticData,
  coreTechStackData,
  additionalTechStackData,
  experienceStaticData,
  tlcEngineProjectData,
  tecnectProjectData,
  lemivonProjectData,
  permitTrackerProjectData,
  parallaxProductsData,
  showcaseProjectsData,
} from '../datasources/portfolioStaticData';

/**
 * Concrete Repository: PortfolioRepository
 * Maps static data sources into strongly-structured Domain Entities.
 */
export class PortfolioRepository extends IPortfolioRepository {
  getProfile() {
    return new Profile(profileStaticData);
  }

  getProjects() {
    return [
      tlcEngineProjectData,
      tecnectProjectData,
      lemivonProjectData,
      permitTrackerProjectData,
    ].map((item) => new Project(item));
  }

  getParallaxProducts() {
    return parallaxProductsData.map(
      (card) =>
        new ParallaxProductCard({
          ...card,
          projectDetails: new Project(card.projectDetails),
        })
    );
  }

  getShowcaseProjects() {
    return showcaseProjectsData.map((proj) => ({ ...proj }));
  }

  getExperiences() {
    return experienceStaticData.map((exp) => new Experience(exp));
  }

  getTechStack() {
    const core = coreTechStackData.map((item) => new TechItem(item));
    const additional = additionalTechStackData.map((item) => new TechItem(item));
    return {
      core,
      additional,
      all: [...core, ...additional],
    };
  }
}

export const portfolioRepository = new PortfolioRepository();
