export interface Work {
  id: string;
  name: string;
  technique: string;
  cycle: string;
  dimensions: string;
  images: string[];
  video?: string;    // 新增：作品视频
  price: string;
  concept: string;
  socialSignificance: string;
}

export interface Inheritor {
  id: string;
  name: string;
  contact: string;
  skillAndLevel: string;
  qrCode?: string;  // 新增：二维码图片
  bio: {
    birthDate?: string;
    birthPlace?: string;
    experience: string[];
    awards: string[];
  };
  works: Work[];
}

export type ViewType = 'list' | 'detail' | 'upload';
