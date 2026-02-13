
import React, { useState } from 'react';
import { X, Check, Info, MapPin, Calendar, Clock } from 'lucide-react';
import { TrampoMatch } from '../types';

const MOCK_MATCHES: TrampoMatch[] = [
  {
    id: 'm1',
    clientName: 'Startup X',
    projectTitle: 'Editor de Reels Financeiros',
    budget: 1500,
    deadline: '7 dias',
    description: 'Buscamos editor com experiência em legendas dinâmicas e sound design estilo Hormozi. 10 vídeos/mês.'
  },
  {
    id: 'm2',
    clientName: 'Influencer Prime',
    projectTitle: 'Thumbnails Viral (YouTube)',
    budget: 300,
    deadline: '24h',
    description: 'Preciso de 3 thumbnails urgentes para canal de investimentos. CTR acima de 10% é o objetivo.'
  },
  {
    id: 'm3',
    clientName: 'Agência Web3',
    projectTitle: 'Front-end Solana Integration',
    budget: 5000,
    deadline: '15 dias',
    description: 'Integração de carteiras (Solana/Blinks) em dashboard de trading. React + Tailwind.'
  }
];

const MatchBoard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentIndex < MOCK_MATCHES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset for demo purposes
    }
  };

  const currentTrampo = MOCK_MATCHES[currentIndex];

  return (
    <div className="h-full flex flex-col p-6 bg-slate-950 pt-12">
      <header className="mb-8">
        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">Explorar Trampos</h1>
        <p className="text-slate-400 text-sm">Encontre o projeto perfeito para seu stack.</p>
      </header>

      {/* Card Container */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="w-full h-[450px] bg-slate-900 rounded-[40px] border-2 border-slate-800 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
          <div className="h-1/3 bg-gradient-to-br from-indigo-600 to-purple-800 p-8 flex flex-col justify-end">
             <div className="bg-white/20 backdrop-blur w-fit px-3 py-1 rounded-full text-[10px] font-bold text-white mb-2 uppercase tracking-widest">
                Job Opportunity
             </div>
             <h2 className="text-2xl font-black leading-tight">{currentTrampo.projectTitle}</h2>
          </div>
          
          <div className="p-8 flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center font-bold text-slate-400">
                  {currentTrampo.clientName[0]}
                </div>
                <div>
                  <h3 className="font-bold text-sm">{currentTrampo.clientName}</h3>
                  <p className="text-[10px] text-slate-500">Reputação: ⭐⭐⭐⭐⭐</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-black text-xl">${currentTrampo.budget}</span>
                <p className="text-[10px] text-slate-500 uppercase font-bold">USDC Lock-in</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed h-24 overflow-y-auto">
              {currentTrampo.description}
            </p>

            <div className="flex items-center gap-6 mt-auto">
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar size={16} />
                <span className="text-xs font-bold">{currentTrampo.deadline}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock size={16} />
                <span className="text-xs font-bold">Remoto</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Swipe Controls */}
      <div className="py-10 flex justify-center items-center gap-8">
        <button 
          onClick={() => handleSwipe('left')}
          className="w-16 h-16 rounded-full border-2 border-rose-500/30 bg-rose-500/10 flex items-center justify-center text-rose-500 active:scale-75 transition-transform"
        >
          <X size={32} strokeWidth={3} />
        </button>
        <button className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 active:scale-75 transition-transform">
          <Info size={24} />
        </button>
        <button 
          onClick={() => handleSwipe('right')}
          className="w-16 h-16 rounded-full border-2 border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-500 active:scale-75 transition-transform shadow-lg shadow-emerald-500/20"
        >
          <Check size={32} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default MatchBoard;
