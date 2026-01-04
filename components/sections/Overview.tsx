
import React from 'react';

interface OverviewProps {
  onStart: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full"></div>
        <img 
          src="https://picsum.photos/id/1018/800/400" 
          alt="Istana Melaka" 
          className="rounded-3xl shadow-2xl relative z-10 border-4 border-white mb-6"
        />
        <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-4 tracking-tighter">
          Warisan Negara Bangsa
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Terokai akar umbi pembentukan negara bangsa kita bermula daripada kerajaan Alam Melayu sehingga kegemilangan Kesultanan Melayu Melaka.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
          <div className="text-3xl mb-3">🏛️</div>
          <h3 className="font-bold mb-2">Asas Kerajaan</h3>
          <p className="text-sm text-slate-500">Mewarisi ciri Funan, Champa & Srivijaya.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
          <div className="text-3xl mb-3">📜</div>
          <h3 className="font-bold mb-2">Undang-Undang</h3>
          <p className="text-sm text-slate-500">Hukum Kanun & Undang-Undang Laut.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100">
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-bold mb-2">Waadat</h3>
          <p className="text-sm text-slate-500">Perjanjian setia antara Sultan & Rakyat.</p>
        </div>
      </div>

      <button 
        onClick={onStart}
        className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-900/20 transition-all hover:scale-105 active:scale-95"
      >
        Mula Mengulang Kaji
      </button>
    </div>
  );
};

export default Overview;
