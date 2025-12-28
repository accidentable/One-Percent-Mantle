import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LiveTicker } from './components/LiveTicker';
import { ArtistDetail } from './components/ArtistDetail';
import { TrustBanner } from './components/TrustBanner';
import { FundingPage } from './components/FundingPage';
import { MarketPage } from './components/MarketPage';
import { Artist, ViewType } from './types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  // Handler for navigation
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setSelectedArtist(null);
    window.scrollTo(0, 0);
  };

  // Handler for artist selection
  const handleArtistSelect = (artist: Artist) => {
    setSelectedArtist(artist);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-mantle-black text-white font-sans selection:bg-white selection:text-black">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      {/* Global Background Abstract Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-mantle-teal/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10">
        {selectedArtist ? (
          <ArtistDetail 
            artist={selectedArtist} 
            onBack={() => {
              setSelectedArtist(null);
              window.scrollTo(0, 0);
            }} 
          />
        ) : (
          <>
            {/* Show Hero only on Home */}
            {currentView === 'home' && (
              <>
                <Hero />
                <LiveTicker />
                
                {/* AGENCY DIVISIONS - SPLIT SCREEN LAYOUT */}
                <section className="relative w-full bg-black z-10">
                   {/* Title Section */}
                   <div className="w-full bg-black border-y border-white/5 py-24 px-6 sm:px-12">
                      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end">
                         <div>
                            <span className="text-gray-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block animate-pulse">
                               Agency Structure
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                               Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Divisions</span>
                            </h2>
                         </div>
                         <p className="text-gray-500 text-sm font-light max-w-sm text-right mt-8 md:mt-0 leading-relaxed border-l border-white/10 pl-8">
                            We operate two specialized labels to manage the complete lifecycle of our artists, from raw incubation to global stardom.
                         </p>
                      </div>
                   </div>

                   {/* SPLIT VIEW - HEIGHT ADJUSTED FOR IMPACT */}
                   <div className="flex flex-col lg:flex-row h-[120vh] lg:h-[90vh] min-h-[700px]">
                      
                      {/* DIVISION 01: INCUBATION (TRAINEE) */}
                      <div 
                         onClick={() => handleNavigate('funding')}
                         className="relative w-full lg:w-1/2 h-full group cursor-pointer overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10"
                      >
                         {/* Background Image - Optimized Visibility */}
                         <div className="absolute inset-0 bg-neutral-900">
                            <img 
                               src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop" 
                               className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110"
                               alt="Incubation"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-transparent transition-all duration-700"></div>
                         </div>

                         {/* Content Overlay */}
                         <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                               <div className="flex items-center gap-6">
                                  <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-xl group-hover:bg-mantle-green group-hover:text-black group-hover:border-mantle-green transition-all duration-500">
                                     <span className="text-base font-black">01</span>
                                  </div>
                                  <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white transition-colors">Incubation</span>
                               </div>
                               <ArrowUpRight className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-3 group-hover:-translate-y-3" />
                            </div>

                            <div className="space-y-10 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
                               <h3 className="text-8xl md:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter mix-blend-overlay group-hover:mix-blend-normal transition-all duration-700">
                                  Future<br/><span className="text-mantle-green italic">Sounds.</span>
                               </h3>
                               
                               <div className="space-y-8">
                                  <div className="w-20 h-1 bg-mantle-green origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                                  <p className="text-xl text-gray-200 font-light max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                     Discover raw potential. Access monthly evaluation data and support the debut journey of our elite trainees.
                                  </p>
                                  <div className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-mantle-green transition-colors">
                                     Enter Lab <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                      {/* DIVISION 02: MAIN LABEL (ARTIST) */}
                      <div 
                         onClick={() => handleNavigate('market')}
                         className="relative w-full lg:w-1/2 h-full group cursor-pointer overflow-hidden"
                      >
                         {/* Background Image - Optimized Visibility */}
                         <div className="absolute inset-0 bg-neutral-900">
                            <img 
                               src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
                               className="w-full h-full object-cover opacity-60 grayscale-[50%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110"
                               alt="Main Label"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:via-transparent transition-all duration-700"></div>
                         </div>

                         {/* Content Overlay */}
                         <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                               <div className="flex items-center gap-6">
                                  <div className="w-14 h-14 border border-white/20 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-xl group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-500">
                                     <span className="text-base font-black">02</span>
                                  </div>
                                  <span className="text-[11px] font-black tracking-[0.4em] uppercase text-gray-400 group-hover:text-white transition-colors">Main Label</span>
                               </div>
                               <ArrowUpRight className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-3 group-hover:-translate-y-3" />
                            </div>

                            <div className="space-y-10 transform translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
                               <h3 className="text-8xl md:text-9xl font-black text-white uppercase leading-[0.85] tracking-tighter mix-blend-overlay group-hover:mix-blend-normal transition-all duration-700">
                                  Global<br/><span className="text-purple-500 italic">Icons.</span>
                               </h3>
                               
                               <div className="space-y-8">
                                  <div className="w-20 h-1 bg-purple-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
                                  <p className="text-xl text-gray-200 font-light max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                     Trade the value of established icons. Our proprietary 1% revenue burn mechanism is active.
                                  </p>
                                  <div className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-purple-400 transition-colors">
                                     Enter Market <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>

                   </div>
                </section>
              </>
            )}

            {/* Sub Pages */}
            {currentView === 'funding' && <FundingPage onArtistSelect={handleArtistSelect} />}
            {currentView === 'market' && <MarketPage onArtistSelect={handleArtistSelect} />}
          </>
        )}
      </div>

      <TrustBanner />
      
      {/* Footer */}
      {!selectedArtist && (
        <footer className="relative z-10 bg-black border-t border-white/5 py-32">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-md">
               <h4 className="text-9xl font-black text-white/5 tracking-tighter leading-none mb-10">1%</h4>
               <p className="text-gray-500 text-sm font-light leading-relaxed uppercase tracking-widest">
                  The First On-Chain Entertainment Label.<br/>
                  Defined by fandom, secured by Mantle.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-20 text-sm">
               <div className="flex flex-col space-y-6">
                  <span className="text-white font-black uppercase tracking-[0.3em] mb-4 text-[10px]">Division</span>
                  <button onClick={() => handleNavigate('home')} className="text-gray-500 hover:text-white text-left transition-colors uppercase tracking-widest text-xs">Main Home</button>
                  <button onClick={() => handleNavigate('funding')} className="text-gray-500 hover:text-white text-left transition-colors uppercase tracking-widest text-xs">Future Sounds</button>
                  <button onClick={() => handleNavigate('market')} className="text-gray-500 hover:text-white text-left transition-colors uppercase tracking-widest text-xs">Global Icons</button>
               </div>
               <div className="flex flex-col space-y-6">
                  <span className="text-white font-black uppercase tracking-[0.3em] mb-4 text-[10px]">Legal</span>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs">Terms of Use</a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs">Privacy Policy</a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors uppercase tracking-widest text-xs">Contact</a>
               </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;