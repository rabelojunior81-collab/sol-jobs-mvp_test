
import React from 'react';
import { GraduationCap, PlayCircle, Award, Zap, ChevronRight } from 'lucide-react';

const RabelusLab: React.FC = () => {
  const COURSES = [
    { title: 'Edição de Reels de Alta Retenção', level: 'Pro', time: '4h', badge: 'Retenção' },
    { title: 'Growth para Canais de Finanças', level: 'Expert', time: '6h', badge: 'Growth' },
    { title: 'Smart Contracts (Solana) 101', level: 'Master', time: '12h', badge: 'Dev' },
  ];

  return (
    <div className="p-6 pt-12">
      <header className="mb-10 text-center">
        <div className="inline-flex p-3 bg-amber-500/20 rounded-3xl text-amber-500 border border-amber-500/30 mb-4">
          <GraduationCap size={40} />
        </div>
        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">Rabelus Lab</h1>
        <p className="text-slate-400 text-sm">Qualificação Condicional para Elite Freelancer.</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800">
          <Award className="text-amber-500 mb-2" size={20} />
          <span className="block text-[10px] font-bold text-slate-500 uppercase">Badges Ativos</span>
          <span className="text-2xl font-black">12</span>
        </div>
        <div className="bg-slate-900 p-4 rounded-3xl border border-slate-800">
          <Zap className="text-blue-500 mb-2" size={20} />
          <span className="block text-[10px] font-bold text-slate-500 uppercase">Nível de Rank</span>
          <span className="text-2xl font-black">Platinum</span>
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="text-xs font-black uppercase text-slate-500 tracking-widest">Aulas Disponíveis</h2>
          <span className="text-[10px] font-bold text-amber-500">VER TUDO</span>
        </div>

        {COURSES.map((course, i) => (
          <div key={i} className="bg-slate-900/80 hover:bg-slate-800 transition-colors p-5 rounded-3xl border border-slate-800 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-amber-500 transition-colors">
                <PlayCircle size={28} />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-tight text-slate-100">{course.title}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-black text-slate-500 uppercase">{course.level}</span>
                  <span className="text-[10px] font-black text-slate-500 uppercase">•</span>
                  <span className="text-[10px] font-black text-slate-500 uppercase">{course.time}</span>
                </div>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-700 group-hover:text-white" />
          </div>
        ))}
      </div>

      {/* Integration Banner */}
      <div className="mt-10 bg-amber-500 p-6 rounded-[32px] shadow-2xl shadow-amber-900/20 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 opacity-20">
          <GraduationCap size={120} />
        </div>
        <h3 className="text-black font-black italic uppercase tracking-tighter text-xl mb-1">Padrão Rabelus</h3>
        <p className="text-black/70 text-xs font-bold leading-tight mb-4">
          Complete o micro-curso de Edição para desbloquear jobs Premium da Startup X.
        </p>
        <button className="bg-black text-white text-[10px] font-black px-4 py-2 rounded-xl">
          COMEÇAR AGORA
        </button>
      </div>
    </div>
  );
};

export default RabelusLab;
