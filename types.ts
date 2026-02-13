
export enum ServiceCategory {
  VIDEO_EDITING = 'Video Editing',
  MOTION_DESIGN = 'Motion Design',
  COPYWRITING = 'Copywriting',
  DEVELOPMENT = 'Development',
  UI_UX = 'UI/UX Design'
}

export interface ProofOfWork {
  id: string;
  professionalName: string;
  professionalAvatar: string;
  videoUrl: string;
  description: string;
  category: ServiceCategory;
  priceUsdc: number;
  deliveryTime: string;
  reputationSBTs: number;
}

export interface TrampoMatch {
  id: string;
  clientName: string;
  projectTitle: string;
  budget: number;
  deadline: string;
  description: string;
}

export interface UserProfile {
  name: string;
  walletAddress: string;
  balanceUsdc: number;
  sbtCount: number;
  level: number;
}
