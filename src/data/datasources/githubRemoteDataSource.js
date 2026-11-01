const GITHUB_CONTRIBUTIONS_API_BASE = 'https://github-contributions-api.jogruber.de/v4';

/**
 * Remote Data Source: githubRemoteDataSource
 * Handles HTTP requests to the external GitHub contributions endpoint.
 */
export const githubRemoteDataSource = {
  async fetchUserContributions(username) {
    const response = await fetch(`${GITHUB_CONTRIBUTIONS_API_BASE}/${encodeURIComponent(username)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch contributions for ${username}: ${response.status}`);
    }
    return response.json();
  },
};
