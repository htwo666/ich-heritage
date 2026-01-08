import React, { useState, useEffect } from 'react';
import { Inheritor, ViewType } from './types';
import { INITIAL_INHERITORS } from './constants';
import { InheritorCard } from './components/InheritorCard';
import { InheritorDetail } from './components/InheritorDetail';
import { InheritorForm } from './components/InheritorForm';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [inheritors, setInheritors] = useState<Inheritor[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>('list');
  const [selectedInheritorId, setSelectedInheritorId] = useState<string | null>(null);
  const [editingInheritor, setEditingInheritor] = useState<Inheritor | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('ich_data');
    if (savedData) {
      setInheritors(JSON.parse(savedData));
    } else {
      setInheritors(INITIAL_INHERITORS);
    }
  }, []);

  useEffect(() => {
    if (inheritors.length > 0) {
      localStorage.setItem('ich_data', JSON.stringify(inheritors));
    }
  }, [inheritors]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedInheritorId]);

  const handleSave = (data: Inheritor) => {
    const exists = inheritors.findIndex(i => i.id === data.id);
    if (exists !== -1) {
      const newList = [...inheritors];
      newList[exists] = data;
      setInheritors(newList);
    } else {
      setInheritors([data, ...inheritors]);
    }
    setEditingInheritor(null);
    setCurrentView('list');
  };

  const handleDelete = (id: string) => {
    setInheritors(inheritors.filter(i => i.id !== id));
    setCurrentView('list');
    setSelectedInheritorId(null);
  };

  const handleEdit = (inheritor: Inheritor) => {
    setEditingInheritor(inheritor);
    setCurrentView('upload');
  };

  const handleAddNew = () => {
    setEditingInheritor(null);
    setCurrentView('upload');
  };

  const selectedInheritor = inheritors.find(i => i.id === selectedInheritorId);

  return (
    <div className="min-h-screen selection:bg-[#C04851]/10 selection:text-[#C04851]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentView('list')}>
            <div className="w-10 h-10 bg-[#C04851] rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <span className="text-white font-bold text-xl serif">遗</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800 serif">非遗作品管理</h1>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Craftsman Database</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button className={`text-sm font-medium ${currentView === 'list' ? 'text-[#C04851]' : 'text-gray-500'}`} onClick={() => setCurrentView('list')}>馆藏展示</button>
            <Button variant="primary" className="h-10 px-6 rounded-full text-sm" onClick={handleAddNew}>
              录入资料
            </Button>
          </nav>

          <Button variant="primary" className="md:hidden h-10 w-10 p-0 rounded-full" onClick={handleAddNew}>+</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentView === 'list' && (
          <div className="animate-in fade-in duration-700">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 serif mb-4">入驻传承人总览</h2>
                <p className="text-gray-500">目前系统已录入 <span className="text-[#C04851] font-bold">{inheritors.length}</span> 位非遗守护者的档案及作品。</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {inheritors.map(i => (
                <InheritorCard 
                  key={i.id} 
                  inheritor={i} 
                  onViewDetail={(id) => {
                    setSelectedInheritorId(id);
                    setCurrentView('detail');
                  }} 
                />
              ))}
              <div 
                className="border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center p-8 cursor-pointer hover:border-[#C04851] hover:bg-white transition-all group min-h-[350px] bg-gray-50/20"
                onClick={handleAddNew}
              >
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-[#C04851]/10 transition-colors">
                    <span className="text-2xl text-gray-300 group-hover:text-[#C04851]">+</span>
                </div>
                <p className="text-gray-400 group-hover:text-[#C04851] font-medium text-sm">录入新成员资料</p>
              </div>
            </div>
          </div>
        )}

        {currentView === 'detail' && selectedInheritor && (
          <InheritorDetail 
            inheritor={selectedInheritor} 
            onBack={() => setCurrentView('list')} 
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        {currentView === 'upload' && (
          <InheritorForm 
            initialData={editingInheritor}
            onSave={handleSave} 
            onCancel={() => {
              setEditingInheritor(null);
              setCurrentView(selectedInheritorId ? 'detail' : 'list');
            }} 
          />
        )}
      </main>

      <footer className="bg-gray-900 py-16 text-white border-t-8 border-[#C04851]">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold serif mb-4">非遗传承 · 资料管理平台</h3>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">守一方传统，护一生匠心。您可以点击任何卡片进入详情页对资料进行实时修正或增补。</p>
            <div className="flex justify-center gap-6 italic text-gray-600 text-sm">
                <span>数字化建档</span>
                <span>全生命周期管理</span>
                <span>即时在线编辑</span>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
