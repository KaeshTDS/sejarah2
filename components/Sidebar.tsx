
import React from 'react';
import { SubTopic } from '../types';

interface SidebarProps {
  activeTab: SubTopic;
  onSelect: (tab: SubTopic) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelect }) => {
  const menuItems = [
    { id: SubTopic.OVERVIEW, label: 'Sinopsis Bab', icon: '📖' },
    { id: SubTopic.BACKGROUND_1_1, label: '1.1 Latar Belakang', icon: '🏛️' },
    { id: SubTopic.CHARACTERISTICS_1_2, label: '1.2 Ciri Negara Bangsa', icon: '🛡️' },
    { id: SubTopic.EXCELLENCE_1_3, label: '1.3 Pentadbiran & Law', icon: '⚖️' },
    { id: SubTopic.ROLES_1_4, label: '1.4 Peranan Rakyat', icon: '🤝' },
    { id: SubTopic.QUIZ, label: 'Uji Minda (Quiz)', icon: '📝' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 historical-gradient text-white p-6 hidden md:block z-50 shadow-2xl">
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2 text-amber-400">SEJARAH</h2>
        <p className="text-xs uppercase tracking-widest text-amber-200/60 font-semibold">Tingkatan 4 • Bab 1</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeTab === item.id 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40' 
                : 'hover:bg-white/10 text-amber-100/80'
            }`}
          >
            <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-6 right-6 p-4 rounded-2xl bg-amber-900/30 border border-amber-500/20">
        <p className="text-[10px] text-amber-200/50 uppercase mb-1 font-bold">Progress Hafalan</p>
        <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-1000" 
            style={{ width: `${(menuItems.findIndex(i => i.id === activeTab) + 1) * 16.6}%` }}
          ></div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
