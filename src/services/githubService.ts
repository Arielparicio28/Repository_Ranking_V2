export const fetchRepositories = async (limit: number, language: string) => {
  try {
    const query = language
      ? `q=language:${language}+stars:>1`
      : `q=stars:>1`;
    const response = await fetch(
      `https://api.github.com/search/repositories?${query}&sort=stars&order=desc&per_page=${limit}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
};
