import React from 'react';
import { Inheritor } from '../types';

interface InheritorCardProps {
  inheritor: Inheritor;
  onViewDetail: (id: string) => void;
}

export const InheritorCard: React.FC<InheritorCardProps> = ({ inheritor, onViewDetail }) => {
  return (
    <div 
      onClick={() => onViewDetail(inheritor.id)}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer flex flex-col h-full active:scale-[0.98]"
    >
      <div className="h-48 bg-gradient-to-br from-[#f8eceb] to-[#f0d9d7] flex items-center justify-center relative overflow-hidden shrink-0">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <span className="text-8xl font-black serif">非遗</span>
        </div>
        <div className="z-10 text-center transition-transform duration-500 group-hover:scale-110">
            <div className="w-20 h-20 bg-white rounded-full mx-auto mb-3 flex items-center justify-center shadow-inner border-4 border-[#C04851]/10">
                <span className="text-3xl font-bold text-[#C04851] serif">{inheritor.name[0]}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 serif">{inheritor.name}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-[#C04851] font-semibold mb-2">{inheritor.skillAndLevel.split('项目')[0]}项目</p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {inheritor.bio.experience[0]}
        </p>
        <div className="flex justify-between items-center pt-4 border-t border-gray-50">
          <span className="text-xs text-gray-400">作品: {inheritor.works.length} 件</span>
          <span className="text-[#C04851] text-sm font-medium group-hover:translate-x-1 transition-transform">
            详情 →
          </span>
        </div>
      </div>
    </div>
  );
};
