import React from 'react';
import { LongReport } from './components/LongReport';
import { ThemeId } from './types';

export default function App() {
  // Hardcoded to Liquid Aqua as requested
  const currentTheme: ThemeId = 'liquid-blue';

  return (
    <div className="min-h-screen w-full bg-slate-50">
      
      {/* Main Long Form Report - Full Height/Width without Top Bar */}
      <div className="w-full max-w-[1400px] mx-auto p-4 lg:p-8">
         <LongReport theme={currentTheme} />
      </div>

      <div className="py-8 text-center text-xs text-slate-400">
        Confidential Design Report • Generated for Review
      </div>
    </div>
  );
}