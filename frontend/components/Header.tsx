
import React, { useState, useEffect } from 'react';
import { Search, Menu, Globe, X, User as UserIcon, LogOut } from 'lucide-react';
import { ViewType, User } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  user: User | null;
  onSearchClick: () => void;
  onLoginClick: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, user, onSearchClick, onLoginClick, onLogout }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex justify-between items-center">
          
          {/* Brand Logo */}
          <div 
            className="cursor-pointer z-50"
            onClick={() => onNavigate('home')}
          >
            <span className="text-3xl font-black text-white tracking-tighter italic">1%</span>
          </div>

          {/* Center Nav - Desktop */}
          <nav className="hidden md:flex items-center space-x-12">
             <button 
                onClick={() => onNavigate('home')} 
                className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-mantle-green transition-colors ${currentView === 'home' ? 'text-white' : 'text-gray-500'}`}
             >
                Home
             </button>
             <button 
                onClick={() => onNavigate('funding')} 
                className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-mantle-green transition-colors ${currentView === 'funding' ? 'text-white' : 'text-gray-500'}`}
             >
                Roster
             </button>
             <button 
                onClick={() => onNavigate('market')} 
                className={`text-xs font-bold uppercase tracking-[0.2em] hover:text-mantle-green transition-colors ${currentView === 'market' ? 'text-white' : 'text-gray-500'}`}
             >
                Market
             </button>
          </nav>

          {/* Right Tools */}
          <div className="flex items-center space-x-6">
             <button 
               onClick={onSearchClick}
               className="text-white hover:text-mantle-green transition-colors p-2"
             >
                <Search className="w-5 h-5" />
             </button>
             
             {user ? (
               <div className="relative">
                  <button 
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 hover:bg-white/10 transition-all"
                  >
                    <div className="w-6 h-6 bg-neutral-800 grayscale overflow-hidden shrink-0">
                      <img src={user.profileImage} alt={user.name} />
                    </div>
                    <span className="hidden sm:block text-[10px] font-black text-white uppercase tracking-widest">
                       {user.walletAddress ? `${user.walletAddress.substring(0, 6)}...` : user.name}
                    </span>
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 py-2 shadow-2xl">
                       <button onClick={() => { onNavigate('mypage'); setIsProfileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5 flex items-center gap-3">
                          <UserIcon className="w-3.5 h-3.5" /> My Profile
                       </button>
                       <button onClick={() => { onLogout(); setIsProfileMenuOpen(false); }} className="w-full px-6 py-3 text-left text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-white/5 flex items-center gap-3 border-t border-white/5 mt-1">
                          <LogOut className="w-3.5 h-3.5" /> Logout
                       </button>
                    </div>
                  )}
               </div>
             ) : (
               <button 
                onClick={onLoginClick}
                className="text-[10px] font-black text-white uppercase border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-all tracking-[0.2em]"
               >
                  Login
               </button>
             )}
             
             <button 
               className="md:hidden text-white"
               onClick={() => setIsMobileMenuOpen(true)}
             >
               <Menu className="w-6 h-6" />
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
           <button 
             className="absolute top-6 right-6 text-white"
             onClick={() => setIsMobileMenuOpen(false)}
           >
             <X className="w-8 h-8" />
           </button>
           <button onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase text-white">Home</button>
           <button onClick={() => { onNavigate('funding'); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase text-white">Roster</button>
           <button onClick={() => { onNavigate('market'); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase text-white">Market</button>
           {user && <button onClick={() => { onNavigate('mypage'); setIsMobileMenuOpen(false); }} className="text-2xl font-black uppercase text-white">My Page</button>}
        </div>
      )}
    </>
  );
};
