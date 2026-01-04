
import React, { useState } from 'react';
import { SubTopic } from './types';
import Sidebar from './components/Sidebar';
import Overview from './components/sections/Overview';
import Background1_1 from './components/sections/Background1_1';
import Characteristics1_2 from './components/sections/Characteristics1_2';
import Excellence1_3 from './components/sections/Excellence1_3';
import Roles1_4 from './components/sections/Roles1_4';
import Quiz from './components/sections/Quiz';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SubTopic>(SubTopic.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case SubTopic.OVERVIEW:
        return <Overview onStart={() => setActiveTab(SubTopic.BACKGROUND_1_1)} />;
      case SubTopic.BACKGROUND_1_1:
        return <Background1_1 />;
      case SubTopic.CHARACTERISTICS_1_2:
        return <Characteristics1_2 />;
      case SubTopic.EXCELLENCE_1_3:
        return <Excellence1_3 />;
      case SubTopic.ROLES_1_4:
        return <Roles1_4 />;
      case SubTopic.QUIZ:
        return <Quiz />;
      default:
        return <Overview onStart={() => setActiveTab(SubTopic.BACKGROUND_1_1)} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fdfaf3] text-slate-900 overflow-x-hidden">
      <Sidebar activeTab={activeTab} onSelect={setActiveTab} />
      
      <main className="flex-1 ml-0 md:ml-64 p-4 md:p-8 pt-20 md:pt-8">
        <div className="max-w-5xl mx-auto transition-all duration-500">
          {renderContent()}
        </div>
      </main>

      {/* Floating Header for Mobile */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-6 md:hidden z-40">
        <h1 className="font-bold text-amber-900 tracking-tight">Bab 1 Sejarah</h1>
        <button 
          onClick={() => setActiveTab(SubTopic.QUIZ)}
          className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold"
        >
          Quiz
        </button>
      </div>
    </div>
  );
};

export default App;
