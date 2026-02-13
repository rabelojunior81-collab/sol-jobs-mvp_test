
import React from 'react';
import { Wallet, Settings, LayoutGrid, List, Shield, Zap, TrendingUp, RefreshCw } from 'lucide-react';

const ProfileView: React.FC = () => {
  return (
    <div className="p-6 pt-12">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">Perfil</h1>
        <button className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 border border-slate-800">
          <Settings size={20} />
        </button>
      </header>

      {/* Identity Card */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-8 rounded-[40px] border border-indigo-500/20 shadow-2xl relative mb-10">
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
          <Shield size={12} className="text-indigo-400" />
          <span className="text-[8px] font-black text-white uppercase">Verificado</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
             <div className="w-24 h-24 rounded-full border-4 border-indigo-500 p-1">
                <img src="https://picsum.photos/id/101/200/200" className="w-full h-full rounded-full object-cover" alt="User" />
             </div>
             <div className="absolute bottom-0 right-0 bg-emerald-500 p-1.5 rounded-full border-2 border-slate-950">
                <Zap size={14} className="text-white" />
             </div>
          </div>
          
          <h2 className="text-2xl font-black text-white">Lucas Motion</h2>
          <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-6">Expert Video Editor</p>
          
          <div className="flex gap-12 text-center">
            <div>
              <span className="block text-xl font-black text-white">42</span>
              <span className="text-[10px] font-black text-slate-500 uppercase">SBT Badges</span>
            </div>
            <div className="w-[1px] bg-slate-800"></div>
            <div>
              <span className="block text-xl font-black text-white">98%</span>
              <span className="text-[10px] font-black text-slate-500 uppercase">Sucesso</span>
            </div>
            <div className="w-[1px] bg-slate-800"></div>
            <div>
              <span className="block text-xl font-black text-white">LV. 12</span>
              <span className="text-[10px] font-black text-slate-500 uppercase">Reputação</span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Hub */}
      <div className="space-y-6">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest">Financeiro (Pix-to-Crypto)</h2>
          <RefreshCw size={14} className="text-slate-500" />
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-[32px] p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500">
              <Wallet size={20} />
            </div>
            <div>
              <span className="block text-[10px] font-bold text-slate-500 uppercase">Carteira Smart (Base)</span>
              <span className="text-sm font-bold text-slate-300">0x492...ax9</span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-[10px] font-black text-slate-500 uppercase block mb-1">Saldo Líquido</span>
            <div className="text-4xl font-black text-white tracking-tighter">$4,280.50 <span className="text-lg text-slate-500 tracking-normal font-bold">USDC</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
             <button className="bg-white text-black py-4 rounded-2xl font-black text-sm active:scale-95 transition-all">
                SACAR VIA PIX
             </button>
             <button className="bg-slate-800 text-white py-4 rounded-2xl font-black text-sm active:scale-95 transition-all">
                RECEBER
             </button>
          </div>
        </div>
      </div>

      {/* Proof of Work Grid */}
      <div className="mt-10">
        <div className="flex justify-between items-center px-1 mb-4">
          <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest">Portfólio PoW</h2>
          <div className="flex gap-4">
            <LayoutGrid size={18} className="text-white" />
            <List size={18} className="text-slate-700" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="aspect-square bg-slate-900 rounded-xl overflow-hidden relative group border border-slate-800">
               <img src={`https://picsum.photos/id/${10+i}/300/300`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="PoW" />
               <div className="absolute top-1 right-1">
                  <TrendingUp size={12} className="text-emerald-500" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
