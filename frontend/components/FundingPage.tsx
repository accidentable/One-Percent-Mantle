import React, { useState, useMemo } from 'react';
import { MOCK_ARTISTS } from '../data/artists';
import { ArtistCard } from './ArtistCard';
import { FilterBar } from './FilterBar';
import { Artist, FilterCategory } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface FundingPageProps {
  onArtistSelect: (artist: Artist) => void;
}

export const FundingPage: React.FC<FundingPageProps> = ({ onArtistSelect }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Trending');

  const fundingArtists = useMemo(() => {
    let artists = MOCK_ARTISTS.filter(a => a.status === 'funding');
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
               <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white bg-white/10 px-3 py-1">Division 01</span>
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">Official Roster</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] italic">
              Trainee<br/><span className="text-gray-600 not-italic">Archive</span>
            </h2>
          </div>
          <div className="max-w-md text-right mt-12 md:mt-0">
             <p className="text-gray-500 text-sm font-light leading-relaxed uppercase tracking-wider mb-4">
                Global Talent Incubation System
             </p>
             <p className="text-gray-300 text-lg font-light leading-relaxed italic">
                {t.hero.labDesc}
             </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-24">
          {fundingArtists.map((artist) => (
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