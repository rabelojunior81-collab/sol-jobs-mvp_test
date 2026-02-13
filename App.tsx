
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import DiscoveryFeed from './components/DiscoveryFeed';
import MatchBoard from './components/MatchBoard';
import EscrowManagement from './components/EscrowManagement';
import RabelusLab from './components/RabelusLab';
import ProfileView from './components/ProfileView';
import { 
  Compass, 
  Flame, 
  Lock, 
  GraduationCap, 
  UserCircle 
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col h-screen max-w-md mx-auto bg-black overflow-hidden shadow-2xl relative">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-20">
          <Routes>
            <Route path="/" element={<DiscoveryFeed />} />
            <Route path="/match" element={<MatchBoard />} />
            <Route path="/escrow" element={<EscrowManagement />} />
            <Route path="/lab" element={<RabelusLab />} />
            <Route path="/profile" element={<ProfileView />} />
          </Routes>
        </main>

        {/* Navigation Bar - Sticky Bottom */}
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-900/90 backdrop-blur-md border-t border-slate-800 flex justify-around items-center py-4 px-2 z-50">
          <NavLink 
            to="/" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-400 scale-110' : 'text-slate-400'}`}
          >
            <Compass size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Feed</span>
          </NavLink>
          <NavLink 
            to="/match" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-pink-500 scale-110' : 'text-slate-400'}`}
          >
            <Flame size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Match</span>
          </NavLink>
          <NavLink 
            to="/escrow" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-emerald-400 scale-110' : 'text-slate-400'}`}
          >
            <Lock size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Escrow</span>
          </NavLink>
          <NavLink 
            to="/lab" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-amber-400 scale-110' : 'text-slate-400'}`}
          >
            <GraduationCap size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Lab</span>
          </NavLink>
          <NavLink 
            to="/profile" 
            className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-indigo-400 scale-110' : 'text-slate-400'}`}
          >
            <UserCircle size={24} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
          </NavLink>
        </nav>
      </div>
    </HashRouter>
  );
};

export default App;
