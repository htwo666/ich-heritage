export interface Work {
  id: string;
  name: string;
  technique: string;
  cycle: string;
  dimensions: string;
  images: string[];
  price: string;
  concept: string;
  socialSignificance: string;
}

export interface Inheritor {
  id: string;
  name: string;
  contact: string;
  skillAndLevel: string;
  bio: {
    birthDate?: string;
    birthPlace?: string;
    experience: string[];
    awards: string[];
  };
  works: Work[];
}

export type ViewType = 'list' | 'detail' | 'upload';
