import React, { useState, useMemo } from 'react';
import { MOCK_ARTISTS } from '../data/artists';
import { ArtistCard } from './ArtistCard';
import { FilterBar } from './FilterBar';
import { Artist, FilterCategory } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface MarketPageProps {
  onArtistSelect: (artist: Artist) => void;
}

export const MarketPage: React.FC<MarketPageProps> = ({ onArtistSelect }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Trending');

  const marketArtists = useMemo(() => {
    let artists = MOCK_ARTISTS.filter(a => a.status === 'market');
    if (activeCategory !== 'Trending') {
      artists = artists.filter(a => a.category === activeCategory);
    }
    return artists;
  }, [activeCategory]);

  return (
    <div className="animate-[fadeIn_0.5s_ease-out] min-h-screen pt-24 bg-black">
      <FilterBar 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
      />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 py-16">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
            <div className="space-y-6">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white bg-purple-600/20 px-3 py-1">Division 02</span>
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Active Market</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
              Global<br/><span className="text-purple-600/50 not-italic">Icons</span>
            </h2>
          </div>
          
          <div className="text-right mt-12 md:mt-0">
              <div className="text-[10px] font-black text-gray-500 mb-4 uppercase tracking-[0.3em]">{t.hero.marketActivity}</div>
              <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                 $142.3M<br/>
                 <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">Total Volume Traded</span>
              </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
          {marketArtists.map((artist) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              onClick={() => onArtistSelect(artist)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};