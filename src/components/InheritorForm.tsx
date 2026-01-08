import React, { useState, useEffect } from 'react';
import { Inheritor, Work } from '../types';
import { Button } from './Button';

interface InheritorFormProps {
  onSave: (inheritor: Inheritor) => void;
  onCancel: () => void;
  initialData?: Inheritor | null;
}

export const InheritorForm: React.FC<InheritorFormProps> = ({ onSave, onCancel, initialData }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [skillAndLevel, setSkillAndLevel] = useState('');
  const [bioExp, setBioExp] = useState('');
  const [awards, setAwards] = useState<string[]>([]);
  const [works, setWorks] = useState<Partial<Work>[]>([{
    id: 'new-1',
    name: '',
    technique: '',
    cycle: '',
    dimensions: '',
    concept: '',
    socialSignificance: '',
    price: '',
    images: []
  }]);

  // 如果是编辑模式，预填数据
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setContact(initialData.contact);
      setSkillAndLevel(initialData.skillAndLevel);
      setBioExp(initialData.bio.experience.join('\n'));
      setAwards(initialData.bio.awards);
      setWorks(initialData.works);
    }
  }, [initialData]);

  const addWork = () => {
    setWorks([...works, {
      id: `new-${Date.now()}`,
      name: '',
      technique: '',
      cycle: '',
      dimensions: '',
      concept: '',
      socialSignificance: '',
      price: '',
      images: []
    }]);
  };

  const removeWork = (index: number) => {
    if (works.length > 1) {
      setWorks(works.filter((_, i) => i !== index));
    }
  };

  const updateWork = (index: number, field: keyof Work, value: string) => {
    const newWorks = [...works];
    newWorks[index] = { ...newWorks[index], [field]: value };
    setWorks(newWorks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload: Inheritor = {
      id: initialData ? initialData.id : Date.now().toString(),
      name,
      contact,
      skillAndLevel,
      bio: {
        experience: bioExp.split('\n').filter(s => s.trim()),
        awards
      },
      works: works.map(w => ({
        ...w,
        id: w.id || Math.random().toString(),
        images: w.images && w.images.length > 0 ? w.images : [`https://picsum.photos/seed/${w.id || Math.random()}/800/600`]
      })) as Work[]
    };
    
    onSave(payload);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
      <div className="flex justify-between items-center mb-8 border-l-4 border-[#C04851] pl-4">
        <h2 className="text-3xl font-bold text-gray-800 serif">
          {initialData ? '编辑传承人资料' : '新传承人入驻'}
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 基本信息 */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-6 h-6 bg-[#C04851] text-white rounded-full flex items-center justify-center text-xs">1</span>
            身份与联系方式
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase">姓名</label>
              <input
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#C04851]/20 outline-none"
                placeholder="输入姓名"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase">联系电话</label>
              <input
                required
                value={contact}
                onChange={e => setContact(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#C04851]/20 outline-none"
                placeholder="手机或固话"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase">传承头衔/级别</label>
            <input
              required
              value={skillAndLevel}
              onChange={e => setSkillAndLevel(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#C04851]/20 outline-none"
              placeholder="如：XX省非物质文化遗产项目代表性传承人"
            />
          </div>
        </section>

        {/* 经历简介 */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-6 h-6 bg-[#C04851] text-white rounded-full flex items-center justify-center text-xs">2</span>
            个人简历与荣誉
          </h3>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase">从业经历 (按行分隔)</label>
            <textarea
              rows={5}
              value={bioExp}
              onChange={e => setBioExp(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#C04851]/20 outline-none"
              placeholder="19XX年跟随XX学习...&#10;20XX年成立工作室..."
            />
          </div>
        </section>

        {/* 作品管理 */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-6 h-6 bg-[#C04851] text-white rounded-full flex items-center justify-center text-xs">3</span>
              代表作品管理
            </h3>
            <Button
              type="button"
              variant="outline"
              className="text-xs py-1"
              onClick={addWork}
            >
              + 新增作品
            </Button>
          </div>

          <div className="space-y-8">
            {works.map((work, idx) => (
              <div key={work.id} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4 relative group">
                {works.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeWork(idx)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white text-red-300 hover:text-red-500 hover:shadow-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all"
                  >
                    ✕
                  </button>
                )}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#C04851] font-bold serif italic text-xl">#{idx + 1}</span>
                  <input
                    required
                    placeholder="作品名称"
                    className="flex-1 bg-transparent border-b border-gray-200 py-1 text-lg font-bold outline-none focus:border-[#C04851]"
                    value={work.name}
                    onChange={e => updateWork(idx, 'name', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-sm">
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-bold">非遗技艺</label>
                    <input
                      value={work.technique}
                      onChange={e => updateWork(idx, 'technique', e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851]"
                      placeholder="例如：葫芦烙刻"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-bold">创作周期</label>
                    <input
                      value={work.cycle}
                      onChange={e => updateWork(idx, 'cycle', e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851]"
                      placeholder="例如：3天"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-bold">尺寸规格</label>
                    <input
                      value={work.dimensions}
                      onChange={e => updateWork(idx, 'dimensions', e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851]"
                      placeholder="例如：30x15cm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-gray-400 font-bold">参考价格</label>
                    <input
                      value={work.price}
                      onChange={e => updateWork(idx, 'price', e.target.value)}
                      className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851]"
                      placeholder="例如：120元"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 font-bold">创作理念/功能/寓意</label>
                  <textarea
                    rows={2}
                    value={work.concept}
                    onChange={e => updateWork(idx, 'concept', e.target.value)}
                    className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851] text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-400 font-bold">社会意义/带动作用</label>
                  <textarea
                    rows={2}
                    value={work.socialSignificance}
                    onChange={e => updateWork(idx, 'socialSignificance', e.target.value)}
                    className="w-full bg-white px-3 py-2 rounded-lg outline-none border border-transparent focus:border-[#C04851] text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex gap-4 pt-8 border-t border-gray-100 justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            舍弃更改
          </Button>
          <Button type="submit" variant="primary" className="px-10">
            保存所有资料
          </Button>
        </div>
      </form>
    </div>
  );
};
