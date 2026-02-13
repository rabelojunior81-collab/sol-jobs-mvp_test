
import React, { useState, useEffect, useRef } from 'react';
import { Heart, MessageSquare, Share2, DollarSign, ShieldCheck } from 'lucide-react';
import { ProofOfWork, ServiceCategory } from '../types';

const MOCK_DATA: ProofOfWork[] = [
  {
    id: '1',
    professionalName: 'Lucas Motion',
    professionalAvatar: 'https://picsum.photos/id/64/100/100',
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/24/186355-877797745_large.mp4',
    description: 'Edição viral para canais de finanças. 10x mais retenção garantida.',
    category: ServiceCategory.VIDEO_EDITING,
    priceUsdc: 250,
    deliveryTime: '48h',
    reputationSBTs: 42
  },
  {
    id: '2',
    professionalName: 'Ana Design',
    professionalAvatar: 'https://picsum.photos/id/65/100/100',
    videoUrl: 'https://cdn.pixabay.com/video/2021/04/12/70876-538186105_large.mp4',
    description: 'Landing pages que convertem. Web3 Native UI/UX Design.',
    category: ServiceCategory.UI_UX,
    priceUsdc: 800,
    deliveryTime: '5 dias',
    reputationSBTs: 128
  },
  {
    id: '3',
    professionalName: 'Dev Crypto',
    professionalAvatar: 'https://picsum.photos/id/66/100/100',
    videoUrl: 'https://cdn.pixabay.com/video/2020/09/11/49609-459146522_large.mp4',
    description: 'Smart Contracts seguros em Solana (Rust). Auditados pelo Rabelus Lab.',
    category: ServiceCategory.DEVELOPMENT,
    priceUsdc: 1500,
    deliveryTime: '10 dias',
    reputationSBTs: 89
  }
];

const DiscoveryFeed: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const index = Math.round(containerRef.current.scrollTop / containerRef.current.clientHeight);
      setActiveIndex(index);
    }
  };

  return (
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      className="h-full w-full overflow-y-scroll snap-y snap-mandatory bg-black"
    >
      {MOCK_DATA.map((pow, index) => (
        <div key={pow.id} className="h-full w-full snap-start relative">
          {/* Video Placeholder - In a real app, this would be a Video component */}
          <video 
            src={pow.videoUrl} 
            className="h-full w-full object-cover"
            autoPlay={activeIndex === index}
            loop
            muted
            playsInline
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />

          {/* Side Actions */}
          <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center">
            <div className="flex flex-col items-center">
              <button className="w-12 h-12 bg-slate-800/60 backdrop-blur rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
                <Heart size={28} />
              </button>
              <span className="text-xs font-bold mt-1">1.2k</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-12 h-12 bg-slate-800/60 backdrop-blur rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
                <MessageSquare size={28} />
              </button>
              <span className="text-xs font-bold mt-1">45</span>
            </div>
            <div className="flex flex-col items-center">
              <button className="w-12 h-12 bg-slate-800/60 backdrop-blur rounded-full flex items-center justify-center text-white active:scale-90 transition-transform">
                <Share2 size={28} />
              </button>
              <span className="text-xs font-bold mt-1">Share</span>
            </div>
            <div className="relative">
              <img src={pow.professionalAvatar} className="w-12 h-12 rounded-full border-2 border-blue-500" alt="Avatar" />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-0.5 border border-black">
                <ShieldCheck size={12} className="text-white" />
              </div>
            </div>
          </div>

          {/* Bottom Info Area */}
          <div className="absolute bottom-6 left-4 right-20 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">@{pow.professionalName}</span>
              <span className="bg-blue-600/30 text-blue-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-500/50 uppercase font-black">
                {pow.category}
              </span>
            </div>
            <p className="text-sm text-slate-200 line-clamp-2">{pow.description}</p>
            
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1 bg-emerald-500 text-white px-3 py-1.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-900/40">
                <DollarSign size={14} />
                <span>{pow.priceUsdc} USDC</span>
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Entrega: <span className="text-white">{pow.deliveryTime}</span>
              </div>
            </div>

            <button className="mt-4 w-full py-3 bg-white text-black font-black rounded-2xl active:scale-95 transition-all shadow-xl hover:bg-slate-200">
              CONTRATAR AGORA
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscoveryFeed;
