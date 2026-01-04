
import React from 'react';

const Roles1_4: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-16">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Subtopik 1.4</span>
        <h2 className="text-5xl font-bold text-slate-900 mt-2 tracking-tight">Peranan Pemerintah & Rakyat</h2>
      </div>

      {/* Waadat Section */}
      <div className="bg-[#fef9c3] p-10 md:p-16 rounded-[4rem] border-4 border-dashed border-amber-400 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-6xl opacity-10">📜</div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-amber-900 mb-6 text-center">WAADAT (Perjanjian)</h3>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center bg-white/50 p-8 rounded-3xl">
              <span className="text-5xl mb-4 block">👑</span>
              <h4 className="font-bold text-xl text-amber-800">SANG SAPURBA</h4>
              <p className="text-sm text-slate-600 mt-2 italic">Mewakili Golongan Pemerintah</p>
            </div>
            <div className="text-4xl font-bold text-amber-400">🤝</div>
            <div className="flex-1 text-center bg-white/50 p-8 rounded-3xl">
              <span className="text-5xl mb-4 block">👨‍🌾</span>
              <h4 className="font-bold text-xl text-amber-800">DEMANG LEBAR DAUN</h4>
              <p className="text-sm text-slate-600 mt-2 italic">Mewakili Golongan Rakyat</p>
            </div>
          </div>
          <div className="mt-12 bg-white/80 p-8 rounded-3xl text-slate-700 leading-relaxed shadow-inner">
            <p className="mb-4">
              <strong>Intipati:</strong> Rakyat janji setia dan tidak menderhaka, manakala Raja janji memerintah dengan adil dan tidak memberi aib (menista).
            </p>
            <p className="text-sm font-semibold text-amber-800 border-l-4 border-amber-600 pl-4">
              "Rakyat itu umpama akar, Raja itu umpama pohon."
            </p>
          </div>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-lg text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">1</span>
            Peranan Sultan
          </h4>
          <ul className="text-sm text-slate-500 space-y-3">
            <li>• Menaungi keselamatan rakyat.</li>
            <li>• Mewujudkan perpaduan.</li>
            <li>• Menjamin kemakmuran & kestabilan.</li>
            <li>• Perkenalkan undang-undang.</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-lg text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">2</span>
            Peranan Pembesar
          </h4>
          <ul className="text-sm text-slate-500 space-y-3">
            <li>• Memelihara keamanan rakyat.</li>
            <li>• Jadi perantara Sultan & Rakyat.</li>
            <li>• Kutip hasil (sistem serah).</li>
            <li>• Bekal tenaga tentera (sistem kerah).</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-lg text-amber-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-sm">3</span>
            Peranan Rakyat
          </h4>
          <ul className="text-sm text-slate-500 space-y-3">
            <li>• Taat setia sepenuhnya.</li>
            <li>• Patuhi segala arahan.</li>
            <li>• Jadi tentera / Pengayuh kapal.</li>
            <li>• Sumbang tenaga kerja (kerah).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roles1_4;
