export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repo: string | null;
  demo: string | null;
  featured?: boolean;
}
