
import React from 'react';
import { motion } from 'framer-motion';
import { User, Wallet, TrendingUp, History, Star, ArrowRight } from 'lucide-react';
import { User as UserType, Artist } from '../types';
import { MOCK_ARTISTS } from '../data/artists';

interface MyPageProps {
  user: UserType;
  onArtistSelect: (artist: Artist) => void;
}

export const MyPage: React.FC<MyPageProps> = ({ user, onArtistSelect }) => {
  // Mock data for user's investments
  const myInvestments = MOCK_ARTISTS.slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-black animate-[fadeIn_0.5s_ease-out]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12">
        
        {/* Profile Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24 border-b border-white/10 pb-16">
          <div className="flex items-center gap-10">
            <div className="w-32 h-32 rounded-none border border-white/20 p-1">
              <img src={user.profileImage} className="w-full h-full object-cover grayscale" alt={user.name} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                 <h2 className="text-6xl font-black uppercase tracking-tighter italic text-white">{user.name}</h2>
                 <span className="px-3 py-1 bg-mantle-green/20 text-mantle-green text-[9px] font-black uppercase tracking-widest border border-mantle-green/30">Investor</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500 font-mono text-sm">
                <Wallet className="w-4 h-4" />
                <span>{user.walletAddress || 'No Wallet Connected'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-right">
             <div className="space-y-1">
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Assets</div>
                <div className="text-3xl font-black text-white">$12,450<span className="text-xs ml-1">USDC</span></div>
             </div>
             <div className="space-y-1">
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Daily ROI</div>
                <div className="text-3xl font-black text-mantle-green">+4.2%</div>
             </div>
             <div className="hidden sm:block space-y-1">
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Rank</div>
                <div className="text-3xl font-black text-purple-500">#420</div>
             </div>
          </div>
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Portfolio List */}
          <div className="lg:col-span-8 space-y-12">
             <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 italic">
                   <Star className="w-6 h-6 text-mantle-green" /> My Portfolio
                </h3>
                <button className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Manage All</button>
             </div>

             <div className="space-y-4">
                {myInvestments.map((artist) => (
                   <div 
                    key={artist.id}
                    onClick={() => onArtistSelect(artist)}
                    className="group cursor-pointer flex items-center justify-between p-8 bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all"
                   >
                      <div className="flex items-center gap-8">
                         <div className="w-20 h-24 bg-neutral-800 shrink-0">
                            <img src={artist.imageUrl} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" alt={artist.name} />
                         </div>
                         <div className="space-y-1">
                            <div className="text-[10px] font-black text-mantle-green uppercase tracking-widest">{artist.agency}</div>
                            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{artist.englishName}</h4>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Holdings: 14.2 {artist.englishName}</div>
                         </div>
                      </div>
                      <div className="text-right space-y-2">
                         <div className="text-sm font-mono text-white">$1,420 USDC</div>
                         <div className="text-[10px] font-black text-mantle-green uppercase tracking-widest">+12.4%</div>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Activity Sidebar */}
          <div className="lg:col-span-4 space-y-12">
             <div className="flex justify-between items-center">
                <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 italic text-gray-400">
                   Recent Activity
                </h3>
                <History className="w-5 h-5 text-gray-600" />
             </div>

             <div className="space-y-8">
                {[
                   { type: 'BUY', artist: 'MINJI', amount: '120 USDC', date: '2H AGO' },
                   { type: 'REWARD', artist: 'STAKING', amount: '12.4 USDC', date: '5H AGO' },
                   { type: 'FUND', artist: 'KAI', amount: '500 USDC', date: '1D AGO' },
                ].map((act, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6">
                      <div className="space-y-1">
                         <div className={`text-[10px] font-black uppercase tracking-widest ${act.type === 'BUY' ? 'text-blue-400' : 'text-purple-400'}`}>{act.type}</div>
                         <div className="text-sm font-black text-white uppercase tracking-tight">{act.artist}</div>
                      </div>
                      <div className="text-right space-y-1">
                         <div className="text-sm font-mono text-white">{act.amount}</div>
                         <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{act.date}</div>
                      </div>
                   </div>
                ))}
             </div>

             <div className="p-10 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 space-y-6">
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white">Yield Status</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">Your Mantle LSP staking rewards are accumulating. Estimated claim date: Jan 15th.</p>
                <button className="w-full py-4 border border-purple-500/50 text-purple-400 text-[10px] font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all">
                   Claim Rewards
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
