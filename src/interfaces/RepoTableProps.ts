export interface RepoTableProps {
    repositories: Array<{
      id: number;
      name: string;
      html_url: string;
      description: string;
      stargazers_count: number;
      owner: { login: string };
    }>;
  }