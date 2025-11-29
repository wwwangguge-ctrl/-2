import React from 'react';
import { 
  AlertTriangle, 
  Layers, 
  GitCommit, 
  MessageSquare, 
  Zap,
  Package,
  ShoppingBag,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Search,
  Scale,
  Clock,
  ArrowRight,
  Target
} from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../constants';

interface PresentationSlideProps {
  theme: ThemeId;
  activeSlide?: 'bottlenecks' | 'comparison';
}

export const PresentationSlide: React.FC<PresentationSlideProps> = ({ theme, activeSlide = 'bottlenecks' }) => {
  const t = THEMES[theme];
  const isLight = theme === 'light-clean' || theme === 'liquid-blue';

  return (
    <div className={`w-full h-full p-8 lg:p-12 flex flex-col ${t.bgClass} ${t.textPrimary} transition-colors duration-700 overflow-hidden relative`}>
      
      {/* Decorative Background Elements */}
      <div className={`absolute top-[-10%] right-[-10%] w-[600px] h-[600px] opacity-30 bg-gradient-to-b ${t.accentGradient} blur-[120px] rounded-full pointer-events-none mix-blend-screen`} />
      <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] opacity-20 bg-gradient-to-t ${t.accentGradient} blur-[100px] rounded-full pointer-events-none`} />

      {activeSlide === 'bottlenecks' ? (
        <BottlenecksSlideContent t={t} isLight={isLight} />
      ) : (
        <ComparisonSlideContent t={t} isLight={isLight} />
      )}
    </div>
  );
};

// --- SLIDE 1: BOTTLENECKS ---
const BottlenecksSlideContent = ({ t, isLight }: any) => (
  <>
      {/* HEADER */}
      <header className="mb-10 relative z-10 flex-none">
        <div className="flex items-center gap-3 mb-3">
          <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${t.accentGradient}`} />
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.textSecondary}`}>Current State Audit</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
          产品体验的<span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accentGradient} ml-2`}>瓶颈与挑战</span>
        </h1>
      </header>

      {/* PRIMARY CONTENT: The Bottlenecks (Top 2/3) */}
      <div className="flex-1 grid grid-cols-12 gap-8 mb-8 min-h-0">
        
        {/* Primary Issue A: Workflow Mismatch */}
        <div className={`col-span-12 lg:col-span-7 flex flex-col p-8 rounded-3xl border ${t.cardBg} ${t.cardBorder} relative group overflow-hidden`}>
           {/* Liquid Gloss Header Overlay */}
           <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />
           
           <div className="flex items-center gap-4 mb-6 relative z-10">
             <div className={`p-3 rounded-xl backdrop-blur-md border border-white/10 ${isLight ? 'bg-white/50' : 'bg-white/10'}`}>
                <GitCommit className={`w-8 h-8 ${t.iconColor}`} />
             </div>
             <div>
               <h2 className="text-3xl font-bold">逻辑与动线错位</h2>
               <div className={`text-xs font-mono mt-1 opacity-60`}>ERROR_CODE: WORKFLOW_MISMATCH</div>
             </div>
           </div>

           <p className={`text-xl ${t.textSecondary} mb-12 max-w-2xl leading-relaxed relative z-10`}>
             简单信息罗列不匹配商家线下 <strong className={`${t.textPrimary} border-b-2 border-${t.iconColor} border-opacity-30`}>"接单 → 拣货 → 核对 → 打包"</strong> 的实际动线，导致履约高频出错。
           </p>

           {/* Visualizing the "Broken" Workflow */}
           <div className="mt-auto relative z-10">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-current opacity-10 -translate-y-1/2" />
              
              <div className="flex justify-between items-start">
                 <WorkflowNode step="1" title="接单" icon={<MessageSquare size={16}/>} status="normal" theme={t} isLight={isLight} />
                 <WorkflowNode step="2" title="拣货" icon={<Package size={16}/>} status="normal" theme={t} isLight={isLight} />
                 
                 {/* The Problem Area */}
                 <div className="relative">
                    <WorkflowNode step="3" title="核对" icon={<AlertTriangle size={16}/>} status="error" theme={t} isLight={isLight} />
                    {/* Error Highlight Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 blur-xl rounded-full -z-10 animate-pulse" />
                 </div>
                 
                 <WorkflowNode step="4" title="打包" icon={<ShoppingBag size={16}/>} status="normal" theme={t} isLight={isLight} />
              </div>
           </div>
        </div>

        {/* Primary Issue B: Scalability */}
        <div className={`col-span-12 lg:col-span-5 flex flex-col p-8 rounded-3xl border ${t.cardBg} ${t.cardBorder} relative overflow-hidden`}>
           {/* Liquid Gloss Header Overlay */}
           <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

           <div className="flex items-center gap-4 mb-6 relative z-10">
             <div className={`p-3 rounded-xl backdrop-blur-md border border-white/10 ${isLight ? 'bg-white/50' : 'bg-white/10'}`}>
                <Layers className={`w-8 h-8 ${t.iconColor}`} />
             </div>
             <div>
               <h2 className="text-3xl font-bold">框架拓展性受限</h2>
               <div className={`text-xs font-mono mt-1 opacity-60`}>STATUS: OVERLOADED</div>
             </div>
           </div>

           <p className={`text-xl ${t.textSecondary} mb-8 leading-relaxed relative z-10`}>
             旧版卡片无法承载"省心厨"、"冷链"等日益增加的服务标签，信息堆叠严重。
           </p>

           {/* Visualizing "Bloat" */}
           <div className={`mt-auto p-5 rounded-2xl border border-dashed ${isLight ? 'border-slate-300/50 bg-white/30' : 'border-white/10 bg-black/20'} relative z-10`}>
              <div className={`text-[10px] uppercase font-bold tracking-widest mb-4 opacity-50 flex justify-between`}>
                 <span>Tag Container</span>
                 <span>Overflow Detected</span>
              </div>
              <div className="flex flex-wrap gap-2.5 content-start h-28 overflow-hidden relative">
                 <Tag label="标准餐" theme={t} />
                 <Tag label="特需备注" theme={t} highlight />
                 <Tag label="省心厨" theme={t} />
                 <Tag label="冷链配送" theme={t} />
                 <Tag label="加急单" theme={t} />
                 <Tag label="餐具数量" theme={t} />
                 <Tag label="发票信息" theme={t} />
                 <Tag label="无接触配送" theme={t} />
                 <Tag label="过敏源" theme={t} />
                 <Tag label="儿童餐具" theme={t} />
                 
                 {/* Fade out effect */}
                 <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white/80' : 'from-black/80'} to-transparent flex items-end justify-center pb-2`}>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold backdrop-blur-md">
                      <AlertCircle size={12} /> Visual Clutter
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* SECONDARY CONTENT: Evidence & Impact (Bottom 1/3) */}
      <div className={`h-36 flex-none grid grid-cols-12 gap-8`}>
        
        {/* Data Evidence - Large Numbers */}
        <div className={`col-span-4 p-6 rounded-2xl border ${t.cardBg} ${t.cardBorder} flex flex-col justify-center relative overflow-hidden group`}>
           <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${t.accentGradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
           
           <div className="relative z-10">
              <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${t.textSecondary} flex items-center gap-2`}>
                 <Zap size={14} className={t.iconColor} /> 
                 <span>Error Metrics</span>
              </div>
              <div className="flex items-end gap-4">
                 <span className={`text-5xl lg:text-6xl font-bold tracking-tighter ${t.accentText}`}>2.2%</span>
                 <div className="pb-2">
                    <div className="text-sm font-semibold opacity-80">备注订单失误率</div>
                    <div className="text-xs opacity-50 font-mono">Total: 4,192 errors</div>
                 </div>
              </div>
           </div>
        </div>

        {/* User Feedback Evidence */}
        <div className={`col-span-8 p-6 rounded-2xl border ${t.cardBg} ${t.cardBorder} flex items-center gap-6 relative overflow-hidden`}>
           {/* Liquid glass highlight */}
           <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

           <div className={`flex-none w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 ${isLight ? 'bg-white/60' : 'bg-white/5'}`}>
              <MessageSquare size={24} className={t.iconColor} />
           </div>
           
           <div className="flex-1 border-l border-white/10 pl-6 relative z-10">
              <p className={`text-lg lg:text-xl italic font-medium leading-relaxed ${t.textPrimary} opacity-90`}>
                 "新出的服务太多，旧卡片根本放不下；核对环节经常看不到备注，总要来回跑，太累了。"
              </p>
              <div className={`mt-3 flex items-center gap-3 text-xs font-bold uppercase tracking-wider opacity-60`}>
                 <span className={`w-2 h-2 rounded-full ${t.accentText === 'text-[#ffdd00]' ? 'bg-[#ffdd00]' : 'bg-green-400'}`}></span>
                 <span>Verified Merchant Feedback</span>
                 <span className="opacity-30">|</span>
                 <span>ID: #M-8821</span>
              </div>
           </div>
        </div>

      </div>
  </>
);

// --- SLIDE 2: COMPARISON ---
const ComparisonSlideContent = ({ t, isLight }: any) => (
  <>
    {/* HEADER SECTION */}
    <header className="mb-6 relative z-10 flex-none flex justify-between items-end">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${t.accentGradient}`} />
          <span className={`text-xs font-bold uppercase tracking-[0.2em] ${t.textSecondary}`}>Model Analysis</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          外卖 vs 医药 vs <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accentGradient}`}>闪购差异对比</span>
        </h1>
      </div>
      
      {/* GOALS MINI CARDS */}
      <div className="flex gap-4">
        <div className={`px-4 py-3 rounded-xl border ${t.cardBg} ${t.cardBorder} backdrop-blur-md flex items-center gap-3 shadow-sm`}>
          <div className={`p-2 rounded-lg bg-green-500/10 text-green-500`}>
             <Zap size={18} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Goal 01</div>
            <div className="text-sm font-bold">提升操作效率 (费力度↓)</div>
          </div>
        </div>
        <div className={`px-4 py-3 rounded-xl border ${t.cardBg} ${t.cardBorder} backdrop-blur-md flex items-center gap-3 shadow-sm`}>
          <div className={`p-2 rounded-lg bg-orange-500/10 text-orange-500`}>
             <Target size={18} />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold opacity-50 tracking-wider">Goal 02</div>
            <div className="text-sm font-bold">降低客诉率 (准确率↑)</div>
          </div>
        </div>
      </div>
    </header>

    {/* MAIN CONTENT: COMPARISON MATRIX */}
    <div className="flex-1 min-h-0 grid grid-cols-12 gap-4">
      
      {/* Column 1: Food (Baseline) */}
      <div className={`col-span-3 rounded-2xl border p-5 flex flex-col gap-4 relative overflow-hidden group ${isLight ? 'bg-slate-100/50 border-slate-200' : 'bg-white/5 border-white/5'}`}>
        <div className="flex items-center gap-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <ShoppingBag size={20} />
          <h3 className="text-lg font-bold">外卖 (Food)</h3>
        </div>
        
        <ComparisonItem icon={<Package size={14}/>} label="商品" value="非标品 (现制)" sub="Standard" theme={t} />
        <ComparisonItem icon={<Layers size={14}/>} label="结构" value="单SKU多份" sub="Simple" theme={t} />
        <ComparisonItem icon={<MapPin size={14}/>} label="环境" value="狭小、嘈杂、油污" sub="Difficult" theme={t} />
        <ComparisonItem icon={<CheckCircle2 size={14}/>} label="动作" value="核对 + 打包" sub="Check" theme={t} />
        
        <div className={`mt-auto p-3 rounded-lg text-xs leading-relaxed ${isLight ? 'bg-slate-200/50' : 'bg-white/5'}`}>
          <span className="font-bold opacity-70">痛点:</span> 出餐慢，漏看备注，忙时错拿
        </div>
      </div>

      {/* Column 2: Medicine (Specialized) */}
      <div className={`col-span-3 rounded-2xl border p-5 flex flex-col gap-4 relative overflow-hidden group ${isLight ? 'bg-blue-50/50 border-blue-100' : 'bg-blue-900/10 border-blue-500/20'}`}>
        <div className={`flex items-center gap-3 mb-2 ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
          <AlertCircle size={20} />
          <h3 className="text-lg font-bold">医药 (Medicine)</h3>
        </div>

        <ComparisonItem icon={<Package size={14}/>} label="商品" value="强标品 (严监管)" sub="Strict" theme={t} />
        <ComparisonItem icon={<Layers size={14}/>} label="结构" value="少SKU小体积" sub="Compact" theme={t} />
        <ComparisonItem icon={<MapPin size={14}/>} label="环境" value="干净、安静、固定" sub="Controlled" theme={t} />
        <ComparisonItem icon={<Search size={14}/>} label="动作" value="找货 + 校验" sub="Verify" theme={t} />

        <div className={`mt-auto p-3 rounded-lg text-xs leading-relaxed ${isLight ? 'bg-blue-100/50 text-blue-800' : 'bg-blue-500/10 text-blue-200'}`}>
          <span className="font-bold opacity-70">痛点:</span> 拿错药，效期管理繁琐
        </div>
      </div>

      {/* Column 3: Instant Retail (The Focus) - Highlighted */}
      <div className={`col-span-6 rounded-3xl border-2 p-6 flex flex-col gap-5 relative overflow-hidden ${t.cardBg} ${isLight ? 'border-blue-300 shadow-xl' : 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'}`}>
        
        {/* Highlight Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${t.accentGradient} opacity-5 pointer-events-none`} />
        
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded-lg bg-gradient-to-br ${t.accentGradient} text-white shadow-lg`}>
               <Zap size={24} />
             </div>
             <div>
                <h3 className="text-2xl font-bold">闪购 (Instant Retail)</h3>
                <div className={`text-xs font-bold uppercase tracking-wider ${t.accentText}`}>Primary Focus</div>
             </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold border ${isLight ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-blue-500/20 border-blue-500/40 text-blue-300'}`}>
            极高复杂度
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
           <div className={`p-4 rounded-xl border ${isLight ? 'bg-white/60 border-white/50' : 'bg-black/20 border-white/10'}`}>
              <div className="flex items-center gap-2 mb-2 opacity-50 text-xs font-bold uppercase">
                <Package size={12} /> Product & Structure
              </div>
              <div className="font-bold text-lg mb-1">混合属性 + 多品类</div>
              <div className="text-sm opacity-70 leading-snug">
                标品(可乐) + 非标(散称水果) + 冰品混装。结构复杂，长订单多。
              </div>
           </div>

           <div className={`p-4 rounded-xl border ${isLight ? 'bg-white/60 border-white/50' : 'bg-black/20 border-white/10'}`}>
              <div className="flex items-center gap-2 mb-2 opacity-50 text-xs font-bold uppercase">
                <MapPin size={12} /> Environment & Path
              </div>
              <div className="font-bold text-lg mb-1">空间大 + 动线长</div>
              <div className="text-sm opacity-70 leading-snug">
                环境复杂(冷库/生鲜区)，需要在卖场内穿梭多个货架，极长漫游式动线。
              </div>
           </div>
           
           <div className="col-span-2">
             <div className={`p-4 rounded-xl border relative overflow-hidden ${isLight ? 'bg-blue-500 text-white border-blue-600' : 'bg-blue-600 text-white border-blue-400'}`}>
                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-2 rounded-full bg-white/20">
                    <Scale size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase opacity-80 mb-1">Core Action Strategy</div>
                    <div className="text-xl font-bold">找货 + 决策 + 加工</div>
                  </div>
                  <ArrowRight opacity={0.5} />
                </div>
                {/* Background Pattern */}
                <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
             </div>
           </div>
        </div>

        <div className={`mt-auto p-4 rounded-xl border flex items-start gap-3 ${isLight ? 'bg-red-50 border-red-100 text-red-800' : 'bg-red-900/20 border-red-500/20 text-red-200'}`}>
           <AlertTriangle size={18} className="shrink-0 mt-0.5" />
           <div>
             <span className="font-bold block mb-1 text-sm">核心挑战 (Key Challenges)</span>
             <p className="text-xs opacity-80 leading-relaxed">
               找不到货、非标品处理麻烦(称重)、缺货需要与用户沟通替代品、行走距离长累人。
             </p>
           </div>
        </div>

      </div>

    </div>
  </>
);

// --- Sub Components ---

const ComparisonItem = ({ icon, label, value, sub, theme }: any) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 opacity-40`}>{icon}</div>
    <div>
      <div className="text-xs font-bold opacity-50 uppercase tracking-wide mb-0.5">{label}</div>
      <div className="font-medium text-sm">{value}</div>
    </div>
  </div>
);

const WorkflowNode = ({ step, title, icon, status, theme, isLight }: any) => {
  const isError = status === 'error';
  
  return (
    <div className="flex flex-col items-center gap-4 relative group cursor-default z-10">
      <div className={`
        w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 relative overflow-hidden
        ${isError 
          ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
          : `bg-white/5 border-white/10 ${theme.textPrimary}`
        }
        ${!isError && isLight ? 'bg-white/40 border-white/40 text-slate-600' : ''}
      `}>
        {/* Glass reflection inside node */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent opacity-50" />
        {icon}
      </div>
      <div className="text-center">
        <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 opacity-50`}>
          0{step}
        </div>
        <div className={`font-bold text-sm ${isError ? 'text-red-500' : ''}`}>
          {title}
        </div>
      </div>
    </div>
  )
};

const Tag = ({ label, theme, highlight }: any) => {
  return (
    <span className={`
      px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide backdrop-blur-sm transition-all
      ${highlight 
        ? theme.highlightColor 
        : `bg-white/5 border border-white/5 opacity-70`
      }
    `}>
      {label}
    </span>
  )
};