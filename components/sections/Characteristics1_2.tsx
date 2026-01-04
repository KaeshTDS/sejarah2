
import React from 'react';
import { subTopic1_2 } from '../../data';

const Characteristics1_2: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-16">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Subtopik 1.2</span>
        <h2 className="text-5xl font-bold text-slate-900 mt-2 tracking-tight">Ciri-ciri Negara Bangsa KMM</h2>
        <p className="text-slate-500 mt-4 max-w-xl mx-auto">Terdapat 6 ciri utama yang mengukuhkan empayar Melaka.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subTopic1_2.map((item) => (
          <div key={item.id} className="relative group perspective-1000">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 h-full flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:border-amber-200">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Hierarchy Section */}
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-amber-50">
        <h3 className="text-3xl font-bold mb-8 text-center text-slate-800 underline decoration-amber-400 decoration-4 underline-offset-8">
          Hierarki Sosial
        </h3>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full max-w-md bg-amber-700 text-white p-6 rounded-t-3xl text-center shadow-lg transform hover:scale-105 transition-transform cursor-help">
            <p className="text-xs uppercase opacity-70 mb-1">Golongan Pemerintah</p>
            <p className="text-xl font-bold">Sultan & Pembesar</p>
          </div>
          <div className="w-full max-w-lg bg-amber-600 text-white p-8 text-center shadow-lg transform hover:scale-105 transition-transform cursor-help">
            <p className="text-xs uppercase opacity-70 mb-1">Golongan Rakyat</p>
            <p className="text-xl font-bold">Peniaga, Petani, Tukang, Nelayan</p>
          </div>
          <div className="w-full max-w-xl bg-amber-500 text-white p-10 rounded-b-3xl text-center shadow-lg transform hover:scale-105 transition-transform cursor-help">
            <p className="text-xs uppercase opacity-70 mb-1">Hamba</p>
            <p className="text-xl font-bold">Hamba Raja, Berhutang, Biasa</p>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-slate-400 italic">
          "Hubungan timbal balik mewujudkan persefahaman dan ikatan."
        </p>
      </div>
    </div>
  );
};

export default Characteristics1_2;
