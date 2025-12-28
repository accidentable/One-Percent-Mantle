
import React from 'react';
import { Disc, Activity, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const LiveTicker: React.FC = () => {
  const { language } = useLanguage();

  // Entertainment-focused news items with premium editorial markers
  const newsItems = language === 'en' ? [
    { icon: <Disc className="w-3.5 h-3.5" />, prefix: "OFFICIAL:", text: "Trainee KAI reaches 90% funding goal on official roster." },
    { icon: <Activity className="w-3.5 h-3.5" />, prefix: "MARKET:", text: "'MINJI' asset value increases following global world tour announcement." },
    { icon: <Star className="w-3.5 h-3.5" />, prefix: "NEW ICON:", text: "Exclusive 'Project Alpha' concept archive now available for 1% holders." },
    { icon: <Disc className="w-3.5 h-3.5" />, prefix: "REVENUE:", text: "Quarterly revenue buyback & burn event scheduled for Jan 15th." },
  ] : [
    { icon: <Disc className="w-3.5 h-3.5" />, prefix: "OFFICIAL:", text: "연습생 'KAI' 공식 로스터 펀딩 목표 90% 돌파." },
    { icon: <Activity className="w-3.5 h-3.5" />, prefix: "MARKET:", text: "'MINJI' 월드 투어 발표 이후 자산 가치 안정적 상승세 유지." },
    { icon: <Star className="w-3.5 h-3.5" />, prefix: "NEW ICON:", text: "'프로젝트 알파' 독점 컨셉 아카이브 1% 홀더 전용 공개." },
    { icon: <Disc className="w-3.5 h-3.5" />, prefix: "REVENUE:", text: "분기별 아티스트 수익 바이백 및 소각 이벤트 진행 예정." },
  ];

  // Quadruplicate the items for a seamless infinite loop
  const duplicatedItems = [...newsItems, ...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="w-full bg-black border-y border-white/10 overflow-hidden py-4 backdrop-blur-sm relative z-30">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-default">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-16 space-x-4 group">
            {/* Minimalist Editorial Icon */}
            <span className="text-gray-500 group-hover:text-white transition-colors duration-700">
              {item.icon}
            </span>
            
            {/* Professional Ticker Text */}
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
              <span className="font-black text-white whitespace-nowrap">1% {item.prefix}</span>
              <span className="font-medium text-gray-500 group-hover:text-gray-300 transition-colors duration-700 whitespace-nowrap">
                {item.text}
              </span>
            </div>

            {/* Square Dot Separator */}
            <div className="w-1 h-1 bg-white/10 ml-16 rotate-45 group-hover:bg-white/40 transition-colors"></div>
          </div>
        ))}
      </div>
      
      {/* High-end Editorial Gradient Fades for Smooth Transition */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};
