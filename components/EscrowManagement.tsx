
import React from 'react';
import { Shield, ArrowRight, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';

const EscrowManagement: React.FC = () => {
  return (
    <div className="p-6 pt-12">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">Smart Escrow</h1>
          <p className="text-slate-400 text-sm">Garantia algorítmica de pagamento.</p>
        </div>
        <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/30">
          <Shield size={28} />
        </div>
      </header>

      {/* Active Contracts */}
      <div className="space-y-6">
        <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest px-1">Contratos em Execução</h2>
        
        {/* Contract Card 1 */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3">
             <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-500/30">LOCK-IN OK</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold">X</div>
            <div>
              <h3 className="font-bold text-white">Startup X: Reels Viral</h3>
              <p className="text-[10px] text-slate-500">Contrato: sol_escrow_492...ax9</p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-black mb-1">Valor Travado</p>
              <div className="text-2xl font-black text-white">1,500 <span className="text-xs text-slate-400">USDC</span></div>
            </div>
            <button className="bg-white text-black text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1 active:scale-95 transition-all">
              ENTREGAR PROVA <ArrowRight size={14} />
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[10px] font-bold text-slate-500">
            <span>Prazo Final: Amanhã, 18:00</span>
            <span className="flex items-center gap-1 text-emerald-500"><CheckCircle2 size={12}/> Funds Verified on Base</span>
          </div>
        </div>

        {/* Contract Card 2 (Dispute Example) */}
        <div className="bg-slate-900/30 border border-rose-500/20 rounded-3xl p-5 relative opacity-80">
          <div className="absolute top-0 right-0 p-3">
             <span className="bg-rose-500/20 text-rose-400 text-[10px] font-black px-2 py-0.5 rounded-full border border-rose-500/30">DISPUTA</span>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold">A</div>
            <div>
              <h3 className="font-bold text-white text-sm">Agência Web3: Dashboard</h3>
              <p className="text-[10px] text-slate-500">Arbitragem via Protocolo Kleros</p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
             <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 w-1/3"></div>
             </div>
             <span className="text-[10px] font-black text-rose-400">AGUARDANDO JURADOS</span>
          </div>
          
          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400 bg-rose-500/5 p-2 rounded-lg border border-rose-500/10">
            <AlertTriangle size={14} className="text-rose-500" />
            Variação técnica detectada no Smart Contract.
          </div>
        </div>
      </div>

      {/* Yield Analytics */}
      <div className="mt-10 bg-gradient-to-br from-slate-900 to-indigo-950 p-6 rounded-[32px] border border-indigo-500/20">
         <div className="flex justify-between items-start mb-4">
            <h3 className="font-black italic uppercase tracking-tighter text-indigo-300">Yield de Taxa Zero</h3>
            <ExternalLink size={16} className="text-indigo-400" />
         </div>
         <p className="text-xs text-indigo-100/60 leading-relaxed mb-4">
            O capital travado está rendendo em <strong>Aave (Base)</strong>. Este rendimento cobre 100% das suas taxas operacionais.
         </p>
         <div className="flex items-center gap-4">
            <div className="flex-1">
               <span className="block text-[10px] font-bold text-indigo-400 uppercase">Economia Gerada</span>
               <span className="text-xl font-black text-emerald-400">+$12.40 USDC</span>
            </div>
            <div className="h-10 w-[1px] bg-indigo-500/20"></div>
            <div className="flex-1 text-right">
               <span className="block text-[10px] font-bold text-indigo-400 uppercase">APY Atual</span>
               <span className="text-xl font-black text-white">4.2%</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default EscrowManagement;
