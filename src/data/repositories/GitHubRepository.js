import { IGitHubRepository } from '../../domain/repositories/IGitHubRepository';
import { githubRemoteDataSource } from '../datasources/githubRemoteDataSource';

/**
 * Concrete Repository: GitHubRepository
 * Implements IGitHubRepository using githubRemoteDataSource.
 */
export class GitHubRepository extends IGitHubRepository {
  constructor(dataSource = githubRemoteDataSource) {
    super();
    this.dataSource = dataSource;
  }

  async fetchContributions(username) {
    return this.dataSource.fetchUserContributions(username);
  }
}

export const githubRepository = new GitHubRepository();
