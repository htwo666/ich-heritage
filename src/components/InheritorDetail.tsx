import React, { useState } from 'react';
import { Inheritor } from '../types';
import { Button } from './Button';

interface InheritorDetailProps {
  inheritor: Inheritor;
  onBack: () => void;
  onEdit: (inheritor: Inheritor) => void;
  onDelete: (id: string) => void;
}

export const InheritorDetail: React.FC<InheritorDetailProps> = ({ inheritor, onBack, onEdit, onDelete }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const handleDelete = () => {
    if (window.confirm(`确定要删除传承人 ${inheritor.name} 的所有资料吗？此操作不可恢复。`)) {
      onDelete(inheritor.id);
    }
  };

  const selectedWork = inheritor.works[0] || { images: [] };

  const nextImage = () => {
    if (selectedWork.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev < selectedWork.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedWork.images.length > 0) {
      setSelectedImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedWork.images.length - 1
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto mb-20 animate-in fade-in slide-in-from-left-4 duration-500">
      <div className="flex justify-between items-center mb-8">
        <Button variant="outline" onClick={onBack}>
          ← 返回列表
        </Button>
        <div className="flex gap-3">
            <Button variant="secondary" onClick={() => onEdit(inheritor)} className="bg-amber-500 hover:bg-amber-600">
                编辑资料
            </Button>
            <Button onClick={handleDelete} className="bg-gray-100 text-gray-400 hover:bg-red-50 hover:text-red-500 shadow-none">
                删除
            </Button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
        <div className="bg-[#C04851] p-10 text-white relative">
            <div className="absolute right-10 bottom-0 opacity-10">
                <span className="text-9xl font-black serif">匠心</span>
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold serif mb-4">{inheritor.name}</h1>
              <p className="text-lg opacity-90 max-w-2xl leading-relaxed">{inheritor.skillAndLevel}</p>
              <div className="mt-8 flex flex-wrap gap-8 text-sm opacity-80 border-t border-white/20 pt-6">
                  <div className="flex flex-col">
                      <span className="font-bold opacity-60 mb-1">联系电话</span> 
                      <span className="text-lg">{inheritor.contact}</span>
                  </div>
                  {inheritor.bio.birthPlace && (
                      <div className="flex flex-col border-l border-white/20 pl-8">
                          <span className="font-bold opacity-60 mb-1">籍贯</span> 
                          <span className="text-lg">{inheritor.bio.birthPlace}</span>
                      </div>
                  )}
              </div>
            </div>
        </div>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 serif flex items-center gap-3">
                        <span className="w-1 h-6 bg-[#C04851] rounded-full"></span>
                        艺术历程
                    </h2>
                    <ul className="space-y-6">
                        {inheritor.bio.experience.map((exp, i) => (
                            <li key={i} className="flex gap-4 group">
                                <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-[#C04851]/30 group-hover:bg-[#C04851] transition-colors"></div>
                                <p className="text-gray-600 leading-relaxed">{exp}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                
                {inheritor.bio.awards && inheritor.bio.awards.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 serif flex items-center gap-3">
                            <span className="w-1 h-6 bg-[#C04851] rounded-full"></span>
                            所获荣誉
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {inheritor.bio.awards.map((award, i) => (
                                <div key={i} className="bg-[#fcfaf7] p-4 rounded-xl border border-gray-100 flex items-center gap-4">
                                    <span className="text-xl">🏆</span>
                                    <span className="text-gray-700 font-medium">{award}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
            
            <div className="space-y-6">
                <div className="bg-[#fcfaf7] rounded-3xl p-8 border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-6 serif border-b border-gray-200 pb-3">归档详情</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">传承类别</p>
                            <p className="font-medium text-gray-800 text-lg">传统工艺美术</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase font-black tracking-[0.2em] mb-1">入驻状态</p>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">已入库</span>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <div className="w-full aspect-square rounded-2xl bg-white shadow-inner flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#C04851] transition-colors">
                                <div className="text-center">
                                    <div className="text-3xl grayscale opacity-30 mb-2">QR</div>
                                    <p className="text-[10px] text-gray-300">二维码</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="space-y-16 mt-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 serif mb-3">经典作品展示</h2>
            <p className="text-gray-400 text-sm tracking-[0.3em] font-light">EXHIBITION OF MASTERPIECES</p>
            <div className="w-12 h-1 bg-[#C04851] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {inheritor.works.map((work, idx) => (
              <div key={work.id} className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-0 group hover:shadow-2xl transition-all duration-500">
                  <div className={`p-12 flex flex-col justify-center space-y-8 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div>
                          <span className="text-[10px] font-black text-[#C04851] tracking-[0.4em] uppercase mb-2 block">SELECTED WORK</span>
                          <h3 className="text-3xl font-bold text-gray-800 serif leading-tight">{work.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-y-6 gap-x-8 text-sm">
                          <div className="space-y-1">
                              <p className="text-gray-400 text-xs font-bold">技艺类别</p>
                              <p className="font-medium text-gray-700 border-l-2 border-[#C04851]/20 pl-3">{work.technique}</p>
                          </div>
                          <div className="space-y-1">
                              <p className="text-gray-400 text-xs font-bold">制作周期</p>
                              <p className="font-medium text-gray-700 border-l-2 border-[#C04851]/20 pl-3">{work.cycle}</p>
                          </div>
                          <div className="space-y-1">
                              <p className="text-gray-400 text-xs font-bold">规格参数</p>
                              <p className="font-medium text-gray-700 border-l-2 border-[#C04851]/20 pl-3">{work.dimensions}</p>
                          </div>
                          <div className="space-y-1">
                              <p className="text-gray-400 text-xs font-bold">市场估值</p>
                              <p className="font-bold text-[#C04851] text-lg border-l-2 border-[#C04851] pl-3">¥ {work.price.replace('元', '')}</p>
                          </div>
                      </div>

                      <div className="space-y-4">
                          <div className="p-5 bg-[#fcfaf7] rounded-2xl">
                              <h4 className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                                  创作理念
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed italic">"{work.concept}"</p>
                          </div>
                          <div className="p-5 bg-white border border-gray-100 rounded-2xl">
                              <h4 className="font-bold text-gray-800 mb-2 text-xs uppercase tracking-wider">
                                  社会影响力
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{work.socialSignificance}</p>
                          </div>
                      </div>
                  </div>

                  <div className="relative overflow-hidden min-h-[400px]">
                      {work.images && work.images.length > 0 ? (
                        <>
                          <img 
                              src={work.images[selectedImageIndex]} 
                              alt={work.name}
                              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </>
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <p className="text-gray-400">暂无图片</p>
                        </div>
                      )}
                  </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};
