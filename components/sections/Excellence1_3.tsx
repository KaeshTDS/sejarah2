
import React from 'react';

const Excellence1_3: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="border-l-4 border-amber-600 pl-6 mb-12">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Subtopik 1.3</span>
        <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">Keunggulan Pentadbiran & Undang-undang</h2>
      </div>

      {/* Pembesar Empat Lipatan Tree */}
      <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
        <h3 className="text-2xl font-bold mb-10 text-center text-slate-800">Sistem Pembesar Empat Lipatan</h3>
        
        <div className="relative flex flex-col items-center">
          <div className="bg-amber-600 text-white px-8 py-4 rounded-2xl shadow-xl font-bold mb-12 z-10 ring-4 ring-amber-100">
            SULTAN
          </div>
          
          <div className="w-full h-1 bg-amber-200 absolute top-20"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full pt-12 relative">
             <div className="flex flex-col items-center">
               <div className="w-1 h-12 bg-amber-200 -mt-12 mb-4"></div>
               <div className="bg-white border-2 border-amber-600 p-4 rounded-xl text-center w-full shadow-md hover:bg-amber-50 transition-colors">
                 <h4 className="font-bold text-amber-900">Bendahara</h4>
                 <p className="text-[10px] text-slate-500 uppercase">Ketua Pentadbir / Penasihat</p>
               </div>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-1 h-12 bg-amber-200 -mt-12 mb-4"></div>
               <div className="bg-white border-2 border-amber-600 p-4 rounded-xl text-center w-full shadow-md hover:bg-amber-50 transition-colors">
                 <h4 className="font-bold text-amber-900">Penghulu Bendahari</h4>
                 <p className="text-[10px] text-slate-500 uppercase">Kewangan / Khazanah</p>
               </div>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-1 h-12 bg-amber-200 -mt-12 mb-4"></div>
               <div className="bg-white border-2 border-amber-600 p-4 rounded-xl text-center w-full shadow-md hover:bg-amber-50 transition-colors">
                 <h4 className="font-bold text-amber-900">Temenggung</h4>
                 <p className="text-[10px] text-slate-500 uppercase">Keselamatan Darat / Polis</p>
               </div>
             </div>
             <div className="flex flex-col items-center">
               <div className="w-1 h-12 bg-amber-200 -mt-12 mb-4"></div>
               <div className="bg-white border-2 border-amber-600 p-4 rounded-xl text-center w-full shadow-md hover:bg-amber-50 transition-colors">
                 <h4 className="font-bold text-amber-900">Laksamana</h4>
                 <p className="text-[10px] text-slate-500 uppercase">Keselamatan Laut / Tentera</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Undang-undang Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-3xl border border-amber-200 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📕</span> Hukum Kanun Melaka
          </h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex gap-3"><span className="font-bold text-amber-700">1.</span> Jenayah (Hukuman Bunuh)</li>
            <li className="flex gap-3"><span className="font-bold text-amber-700">2.</span> Peranan Sultan & Pembesar</li>
            <li className="flex gap-3"><span className="font-bold text-amber-700">3.</span> Kekeluargaan (Pernikahan)</li>
            <li className="flex gap-3"><span className="font-bold text-amber-700">4.</span> Ekonomi (Urus Niaga/Riba)</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl border border-blue-200 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🚢</span> Undang-Undang Laut Melaka
          </h3>
          <ul className="space-y-4 text-slate-600">
            <li className="flex gap-3"><span className="font-bold text-blue-700">1.</span> Peranan Nakhoda (Raja di laut)</li>
            <li className="flex gap-3"><span className="font-bold text-blue-700">2.</span> Pelayaran (Malim, Jurumudi)</li>
            <li className="flex gap-3"><span className="font-bold text-blue-700">3.</span> Jenayah di atas kapal</li>
            <li className="flex gap-3"><span className="font-bold text-blue-700">4.</span> Percukaian (Sistematik/Adil)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Excellence1_3;
