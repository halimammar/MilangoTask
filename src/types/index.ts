export interface Data {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  description: null | string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  watchers_count: number;
  language: null | string;
  forks_count: number;
  forks: number;
  clone_url: 'string';
}

export interface Owner {
  id: number;
  avatar_url: string;
}
