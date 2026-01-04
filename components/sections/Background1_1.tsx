
import React from 'react';
import { subTopic1_1 } from '../../data';

const Background1_1: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-l-4 border-amber-600 pl-6 mb-12">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Subtopik 1.1</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-2">Latar Belakang Negara Bangsa Sebelum Kedatangan Barat</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subTopic1_1.map((item, idx) => (
          <div 
            key={item.id} 
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all border border-slate-100 group flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl bg-amber-50 p-4 rounded-2xl group-hover:rotate-12 transition-transform">{item.icon}</span>
              <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed flex-grow">{item.content}</p>
            {item.examples && (
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-amber-400 italic text-sm text-slate-500">
                <span className="font-bold text-amber-700 block mb-1">Contoh Hafalan:</span>
                {item.examples[0]}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-amber-900 text-amber-50 rounded-3xl overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-4">Kronologi Warisan</h3>
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base">
            <span className="bg-amber-600 px-4 py-1 rounded-full">Funan</span>
            <span className="text-amber-400">→</span>
            <span className="bg-amber-600 px-4 py-1 rounded-full">Champa</span>
            <span className="text-amber-400">→</span>
            <span className="bg-amber-600 px-4 py-1 rounded-full">Srivijaya</span>
            <span className="text-amber-400">→</span>
            <span className="bg-amber-700 px-4 py-1 rounded-full ring-2 ring-amber-400 shadow-lg">Kesultanan Melayu Melaka</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
      </div>
    </div>
  );
};

export default Background1_1;
