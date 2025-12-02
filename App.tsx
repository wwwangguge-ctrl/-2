import React from 'react';
import { LongReport } from './components/LongReport';
import { ThemeId } from './types';
import { Download } from 'lucide-react';

export default function App() {
  // Hardcoded to Liquid Aqua as requested
  const currentTheme: ThemeId = 'liquid-blue';

  const handleExportHtml = () => {
    // 1. Get the current DOM content
    const htmlContent = document.documentElement.outerHTML;
    
    // 2. Create a blob
    const blob = new Blob([htmlContent], { type: 'text/html' });
    
    // 3. Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `design-report-${new Date().toISOString().split('T')[0]}.html`;
    
    // 4. Trigger download
    document.body.appendChild(a);
    a.click();
    
    // 5. Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 relative">
      
      {/* Main Long Form Report - Full Height/Width without Top Bar */}
      <div className="w-full max-w-[1400px] mx-auto p-4 lg:p-8">
         <LongReport theme={currentTheme} />
      </div>

      <div className="py-8 text-center text-xs text-slate-400">
        Confidential Design Report • Generated for Review
      </div>

      {/* Floating Export Button */}
      <button 
        onClick={handleExportHtml}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-bold tracking-wide group"
        title="下载为 HTML 文件"
      >
        <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        <span>导出 HTML</span>
      </button>

    </div>
  );
}