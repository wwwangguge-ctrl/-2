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
  ArrowRight,
  Target,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
  XCircle,
  Lightbulb,
  ArrowDown
} from 'lucide-react';
import { ThemeId } from '../types';
import { THEMES } from '../constants';

interface LongReportProps {
  theme: ThemeId;
}

export const LongReport: React.FC<LongReportProps> = ({ theme }) => {
  const t = THEMES[theme];
  const isLight = theme === 'light-clean' || theme === 'liquid-blue';

  return (
    <div className={`w-full rounded-3xl overflow-hidden shadow-2xl ${t.bgClass} ${t.textPrimary} relative selection:bg-blue-500/30`}>
      {/* Global Background Accents */}
      <div className={`absolute top-0 right-0 w-[800px] h-[800px] opacity-20 bg-gradient-to-b ${t.accentGradient} blur-[120px] rounded-full pointer-events-none mix-blend-screen`} />
      <div className={`absolute bottom-0 left-0 w-[800px] h-[800px] opacity-10 bg-gradient-to-t ${t.accentGradient} blur-[120px] rounded-full pointer-events-none`} />

      {/* =================================================================================
          CHAPTER 1: BACKGROUND & CONTEXT
      ================================================================================= */}
      <section className="p-10 lg:p-20 border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto">
          <SectionHeader number="01" title="Project Background" theme={t} />
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-16 leading-tight">
            闪购商家 <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accentGradient}`}>订单处理压力大</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContextCard 
              icon={<Package size={24} />}
              title="业务特征：高 SKU & 高压力"
              desc="超市便利/生鲜果蔬业态，单均商品数远超餐饮，拣货难度大。"
              theme={t} isLight={isLight}
            />
            <ContextCard 
              icon={<TrendingUp size={24} />}
              title="当前挑战：大促常态化"
              desc="订单激增，拣货容错率被压缩至极限，旧版无法应对并发压力。"
              theme={t} isLight={isLight}
            />
            <ContextCard 
              icon={<ShieldCheck size={24} />}
              title="服务升级：安心闪购"
              desc="需承载冷链打包、实拍返图、切洗加工等精细化服务，旧版拓展性差。"
              theme={t} isLight={isLight}
            />
          </div>
        </div>
      </section>

      {/* =================================================================================
          CHAPTER 2: BOTTLENECKS (The Problem)
      ================================================================================= */}
      <section className="p-10 lg:p-20 relative bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
           <SectionHeader number="02" title="Current Bottlenecks" theme={t} />
           
           <h2 className="text-3xl lg:text-4xl font-bold mb-12 flex items-center gap-4">
             <span className="p-3 rounded-xl bg-red-500/10 text-red-500"><AlertTriangle size={32}/></span>
             当前产品体验的瓶颈
           </h2>

           <div className="grid grid-cols-12 gap-8">
              {/* Workflow Issue */}
              <div className={`col-span-12 lg:col-span-7 flex flex-col p-8 rounded-3xl border ${t.cardBg} ${t.cardBorder} relative overflow-hidden shadow-sm`}>
                 <div className="flex items-start justify-between mb-8">
                   <div>
                     <h3 className="text-2xl font-bold mb-2">逻辑与动线错位</h3>
                     <p className={`${t.textSecondary} text-lg leading-relaxed`}>
                       简单信息罗列不匹配商家线下 <strong className={`${t.textPrimary} border-b-2 border-red-400`}>"接单 → 拣货 → 核对 → 打包"</strong> 的实际动线。
                     </p>
                   </div>
                   <div className={`p-3 rounded-xl ${isLight ? 'bg-red-50 text-red-600' : 'bg-red-500/20 text-red-400'}`}>
                     <GitCommit size={24} />
                   </div>
                 </div>

                 <div className="mt-auto">
                    <div className="flex justify-between items-start relative">
                       <div className="absolute top-7 left-0 right-0 h-0.5 bg-current opacity-10" />
                       <WorkflowNode step="1" title="接单" icon={<MessageSquare size={16}/>} status="normal" theme={t} isLight={isLight} />
                       <WorkflowNode step="2" title="拣货" icon={<Package size={16}/>} status="normal" theme={t} isLight={isLight} />
                       <div className="relative">
                          <WorkflowNode step="3" title="核对" icon={<AlertTriangle size={16}/>} status="error" theme={t} isLight={isLight} />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 blur-xl rounded-full -z-10 animate-pulse" />
                       </div>
                       <WorkflowNode step="4" title="打包" icon={<ShoppingBag size={16}/>} status="normal" theme={t} isLight={isLight} />
                    </div>
                 </div>
              </div>

              {/* Scalability Issue */}
              <div className={`col-span-12 lg:col-span-5 flex flex-col p-8 rounded-3xl border ${t.cardBg} ${t.cardBorder} relative overflow-hidden shadow-sm`}>
                 <div className="flex items-start justify-between mb-6">
                   <div>
                     <h3 className="text-2xl font-bold mb-2">框架拓展性受限</h3>
                     <p className={`${t.textSecondary} text-lg leading-relaxed`}>
                       卡片无法优雅承载日益增加的服务项，导致界面臃肿。
                     </p>
                   </div>
                   <div className={`p-3 rounded-xl ${isLight ? 'bg-orange-50 text-orange-600' : 'bg-orange-500/20 text-orange-400'}`}>
                     <Layers size={24} />
                   </div>
                 </div>
                 <div className={`mt-auto p-5 rounded-2xl border border-dashed ${isLight ? 'border-slate-300 bg-white/50' : 'border-white/10 bg-black/20'}`}>
                    <div className="flex flex-wrap gap-2 content-start h-32 overflow-hidden relative">
                       <Tag label="标准餐" theme={t} />
                       <Tag label="特需备注" theme={t} highlight />
                       <Tag label="省心厨" theme={t} />
                       <Tag label="冷链配送" theme={t} />
                       <Tag label="加急单" theme={t} />
                       <Tag label="过敏源" theme={t} />
                       <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white/90' : 'from-black/90'} to-transparent flex items-end justify-center pb-2`}>
                          <span className="text-xs font-bold text-red-500 bg-red-100 px-2 py-1 rounded">Visual Overload</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* =================================================================================
          CHAPTER 3: COMPLEXITY COMPARISON (Restored)
      ================================================================================= */}
      <section className="p-10 lg:p-20 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto">
            <SectionHeader number="03" title="Model Analysis" theme={t} />
            <h2 className="text-4xl lg:text-5xl font-bold mb-12">
              外卖 vs 医药 vs <span className={`text-transparent bg-clip-text bg-gradient-to-r ${t.accentGradient}`}>闪购差异对比</span>
            </h2>

            <div className="grid grid-cols-12 gap-4">
              {/* Column 1: Food */}
              <div className={`col-span-12 md:col-span-3 rounded-2xl border p-5 flex flex-col gap-4 relative group ${isLight ? 'bg-slate-100/50 border-slate-200' : 'bg-white/5 border-white/5'}`}>
                <div className="flex items-center gap-3 mb-2 opacity-60">
                  <ShoppingBag size={20} />
                  <h3 className="text-lg font-bold">外卖 (Food)</h3>
                </div>
                <ComparisonItem icon={<Package size={14}/>} label="商品" value="非标品 (现制)" sub="Standard" theme={t} />
                <ComparisonItem icon={<Layers size={14}/>} label="结构" value="单SKU多份" sub="Simple" theme={t} />
                <ComparisonItem icon={<MapPin size={14}/>} label="环境" value="狭小、嘈杂" sub="Difficult" theme={t} />
                <ComparisonItem icon={<CheckCircle2 size={14}/>} label="动作" value="核对 + 打包" sub="Check" theme={t} />
              </div>

              {/* Column 2: Medicine */}
              <div className={`col-span-12 md:col-span-3 rounded-2xl border p-5 flex flex-col gap-4 relative group ${isLight ? 'bg-blue-50/50 border-blue-100' : 'bg-blue-900/10 border-blue-500/20'}`}>
                <div className={`flex items-center gap-3 mb-2 ${isLight ? 'text-blue-600' : 'text-blue-400'}`}>
                  <AlertCircle size={20} />
                  <h3 className="text-lg font-bold">医药 (Medicine)</h3>
                </div>
                <ComparisonItem icon={<Package size={14}/>} label="商品" value="强标品 (严监管)" sub="Strict" theme={t} />
                <ComparisonItem icon={<Layers size={14}/>} label="结构" value="少SKU小体积" sub="Compact" theme={t} />
                <ComparisonItem icon={<MapPin size={14}/>} label="环境" value="干净、固定" sub="Controlled" theme={t} />
                <ComparisonItem icon={<Search size={14}/>} label="动作" value="找货 + 校验" sub="Verify" theme={t} />
              </div>

              {/* Column 3: Instant Retail (Focus) */}
              <div className={`col-span-12 md:col-span-6 rounded-3xl border-2 p-6 flex flex-col gap-5 relative overflow-hidden ${t.cardBg} ${isLight ? 'border-blue-300 shadow-xl' : 'border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]'}`}>
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
                      <div className="flex items-center gap-2 mb-2 opacity-50 text-xs font-bold uppercase"><Package size={12} /> Product</div>
                      <div className="font-bold text-lg mb-1">混合属性 + 多品类</div>
                      <div className="text-xs opacity-70">标品(可乐) + 非标(水果) + 冰品混装。结构复杂。</div>
                   </div>
                   <div className={`p-4 rounded-xl border ${isLight ? 'bg-white/60 border-white/50' : 'bg-black/20 border-white/10'}`}>
                      <div className="flex items-center gap-2 mb-2 opacity-50 text-xs font-bold uppercase"><MapPin size={12} /> Path</div>
                      <div className="font-bold text-lg mb-1">空间大 + 动线长</div>
                      <div className="text-xs opacity-70">卖场内穿梭多个货架，极长漫游式动线。</div>
                   </div>
                   <div className="col-span-2">
                     <div className={`p-4 rounded-xl border flex items-center gap-4 ${isLight ? 'bg-blue-500 text-white border-blue-600' : 'bg-blue-600 text-white border-blue-400'}`}>
                        <div className="p-2 rounded-full bg-white/20"><Scale size={20} /></div>
                        <div>
                          <div className="text-xs font-bold uppercase opacity-80 mb-1">Core Action Strategy</div>
                          <div className="text-xl font-bold">找货 + 决策 + 加工</div>
                        </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* =================================================================================
          CHAPTER 4: DATA INSIGHTS (Refined Layout)
      ================================================================================= */}
      <section className="p-10 lg:p-20 relative border-b border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeader number="04" title="Data Analysis" theme={t} />
          
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* 4.1 Data Chart */}
            <div className="col-span-12 lg:col-span-5">
               <div className={`h-full p-8 rounded-3xl border ${t.cardBg} ${t.cardBorder} flex flex-col items-center justify-center text-center shadow-lg relative`}>
                  <div className="relative w-56 h-56 mb-8">
                     <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className={`${isLight ? 'text-slate-200' : 'text-slate-800'}`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                        <path className={`${isLight ? 'text-blue-500' : 'text-blue-400'}`} strokeDasharray="40.85, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className={`text-5xl font-bold tracking-tighter ${t.accentText}`}>40.85%</span>
                        <span className="text-sm font-bold uppercase tracking-widest mt-2 opacity-60">商家端拣货</span>
                     </div>
                  </div>
                  <div className={`text-base ${t.textSecondary} leading-relaxed max-w-sm text-left bg-white/5 p-4 rounded-xl`}>
                     <strong className="block mb-2 text-current">数据结论：</strong>
                     尽管自动化(OPEN接口)普及率达 74.22%，仍有超四成操作回流App。<br/>
                     <span className={`font-bold ${t.accentText}`}>"拣货"是核心高频战场。</span>
                  </div>
               </div>
            </div>

            {/* 4.2 Structured Text Content */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
               
               {/* Why Rely? */}
               <div className={`p-6 rounded-2xl border ${t.cardBg} ${t.cardBorder}`}>
                 <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                   <Lightbulb className={t.accentText} size={20} /> 
                   <span>为什么依赖商家端拣货?</span>
                 </h3>
                 <p className={`${t.textSecondary} mb-4 text-sm`}>
                   Top 5 依赖度最高的品类（拣货最复杂）：
                 </p>
                 <div className="space-y-2">
                    <CategoryBar label="超市便利散店" percentage={65.27} theme={t} isLight={isLight} highlight />
                    <CategoryBar label="花果鲜食 - 鲜花" percentage={53.66} theme={t} isLight={isLight} />
                    <CategoryBar label="花果鲜食 - 水果组" percentage={52.06} theme={t} isLight={isLight} />
                    <CategoryBar label="非食专卖 - 数码家电" percentage={50.54} theme={t} isLight={isLight} />
                 </div>
               </div>

               {/* Traits & Pain Points Split */}
               <div className="grid grid-cols-2 gap-4">
                  <div className={`p-5 rounded-2xl border ${t.cardBg} ${t.cardBorder}`}>
                     <div className="flex items-center gap-2 mb-3">
                        <div className={`p-1.5 rounded-lg bg-purple-500/10 text-purple-500`}><Target size={16}/></div>
                        <span className="font-bold">特征: 服务多</span>
                     </div>
                     <p className="text-xs opacity-70 leading-relaxed">
                        单价高，需验真、实拍；或需大件配送/贵重物品交付。
                     </p>
                  </div>
                  <div className={`p-5 rounded-2xl border ${t.cardBg} ${t.cardBorder}`}>
                     <div className="flex items-center gap-2 mb-3">
                        <div className={`p-1.5 rounded-lg bg-pink-500/10 text-pink-500`}><GraduationCap size={16}/></div>
                        <span className="font-bold">特征: 散店难</span>
                     </div>
                     <p className="text-xs opacity-70 leading-relaxed">
                        员工素质差，培训难，标准化低，急需工具辅助。
                     </p>
                  </div>
                  
                  {/* Quotes Block */}
                  <div className={`col-span-2 p-5 rounded-2xl border ${isLight ? 'bg-slate-100 border-slate-200' : 'bg-slate-800/50 border-slate-700'}`}>
                     <h4 className="font-bold mb-3 text-xs uppercase opacity-50 tracking-wider">商家痛点 (Voice)</h4>
                     <div className="grid grid-cols-3 gap-2">
                        <QuoteItem text="害怕漏看，或者搞错了，紧张。" />
                        <QuoteItem text="来回看，反复确认，找信息麻烦。" />
                        <QuoteItem text="实拍返图太费时，耽误事，麻烦。" />
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </div>
      </section>

      {/* =================================================================================
          CHAPTER 5: DESIGN GOALS (Cover Style)
      ================================================================================= */}
      <section className={`relative py-32 overflow-hidden ${isLight ? 'bg-slate-900 text-white' : 'bg-black text-white'}`}>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] mix-blend-screen pointer-events-none" />
         
         <div className="max-w-6xl mx-auto px-10 relative z-10 text-center">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">设计目标</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-4xl mx-auto opacity-90 mb-16">
               打造一个让商家<br className="md:hidden" />
               <span className="font-bold text-blue-400 mx-2">"敢操作"</span>、
               <span className="font-bold text-green-400 mx-2">"快操作"</span>、
               <span className="font-bold text-purple-400 mx-2">"会操作"</span>
               <br />的极简工作台。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GoalCard 
                  title="敢操作" subtitle="无心理负担" 
                  icon={<ShieldCheck size={32} />} color="text-blue-400" borderColor="border-blue-500/30"
               />
               <GoalCard 
                  title="快操作" subtitle="无冗余动作" 
                  icon={<Zap size={32} />} color="text-green-400" borderColor="border-green-500/30"
               />
               <GoalCard 
                  title="会操作" subtitle="无学习成本" 
                  icon={<GraduationCap size={32} />} color="text-purple-400" borderColor="border-purple-500/30"
               />
            </div>
         </div>
      </section>

      {/* =================================================================================
          CHAPTER 6: STRATEGY MATRIX (Problem -> Solution)
      ================================================================================= */}
      <section className="p-10 lg:p-20 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto">
           <SectionHeader number="05" title="Design Strategy" theme={t} />
           <h2 className="text-4xl font-bold mb-12">策略落地</h2>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <StrategyColumn 
                 problem="问题: 怕搞错"
                 strategy="防错 (Error Prevention)"
                 theme={t} isLight={isLight}
                 icon={<ShieldCheck size={24}/>}
                 accentColor="text-blue-500"
                 points={[
                    { title: "信息做减法和强化", desc: "重构信息架构，把服务类信息聚合，确保一眼看到重点。" },
                    { title: "引入大图模式", desc: "解决小图看不清导致的拿错货问题，视觉降噪。" }
                 ]}
              />
              <StrategyColumn 
                 problem="问题: 操作累"
                 strategy="提效 (Efficiency)"
                 theme={t} isLight={isLight}
                 icon={<Zap size={24}/>}
                 accentColor="text-green-500"
                 points={[
                    { title: "优化物理动线", desc: "列表从'下单序'改为'品类序'，让商家在货架间少走回头路。" },
                    { title: "优化交互操作", desc: "长订单增加吸顶吸底，减少无效的滑动寻找，让操作触手可及。" }
                 ]}
              />
              <StrategyColumn 
                 problem="问题: 学不会"
                 strategy="易学易用 (Guidance)"
                 theme={t} isLight={isLight}
                 icon={<GraduationCap size={24}/>}
                 accentColor="text-purple-500"
                 points={[
                    { title: "复杂流程植入心智", desc: "针对鲜花等复杂品类的返图难题，植入'安闪购'心智。" },
                    { title: "拍摄引导", desc: "让新手店员也能明白为什么要拍、怎么拍，提升履约质量。" }
                 ]}
              />
           </div>
        </div>
      </section>
      
      <div className={`py-12 text-center text-xs ${t.textSecondary} uppercase tracking-widest opacity-50`}>
        CONFIDENTIAL DESIGN REPORT • {new Date().getFullYear()}
      </div>
    </div>
  );
};

// --- Sub Components ---

const SectionHeader = ({ number, title, theme }: any) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${theme.accentGradient}`} />
    <span className={`text-sm font-bold uppercase tracking-[0.2em] ${theme.textSecondary}`}>
      {number} // {title}
    </span>
  </div>
);

const ContextCard = ({ icon, title, desc, theme, isLight }: any) => (
  <div className={`p-6 rounded-2xl border ${theme.cardBg} ${theme.cardBorder} hover:translate-y-[-2px] transition-transform duration-300`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isLight ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-white'}`}>
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className={`text-sm ${theme.textSecondary} leading-relaxed`}>{desc}</p>
  </div>
);

const WorkflowNode = ({ step, title, icon, status, theme, isLight }: any) => {
  const isError = status === 'error';
  return (
    <div className="flex flex-col items-center gap-4 relative group cursor-default z-10">
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 relative overflow-hidden
        ${isError 
          ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
          : `bg-white/5 border-white/10 ${theme.textPrimary}`
        }
        ${!isError && isLight ? 'bg-white/60 border-white/50 text-slate-700' : ''}
      `}>
        {icon}
      </div>
      <div className="text-center">
        <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 opacity-50`}>0{step}</div>
        <div className={`font-bold text-xs ${isError ? 'text-red-500' : ''}`}>{title}</div>
      </div>
    </div>
  )
};

const Tag = ({ label, theme, highlight }: any) => (
  <span className={`
    px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide backdrop-blur-sm
    ${highlight ? theme.highlightColor : `bg-white/5 border border-white/5 opacity-70`}
  `}>
    {label}
  </span>
);

const ComparisonItem = ({ icon, label, value, sub, theme }: any) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 opacity-40`}>{icon}</div>
    <div>
      <div className="text-xs font-bold opacity-50 uppercase tracking-wide mb-0.5">{label}</div>
      <div className="font-medium text-sm">{value}</div>
    </div>
  </div>
);

const CategoryBar = ({ label, percentage, theme, isLight, highlight }: any) => (
  <div className="group">
    <div className="flex justify-between text-xs font-bold mb-1.5">
       <span className={highlight ? theme.accentText : theme.textPrimary}>{label}</span>
       <span className="opacity-60">{percentage}%</span>
    </div>
    <div className={`h-2.5 w-full rounded-full overflow-hidden ${isLight ? 'bg-slate-200' : 'bg-white/10'}`}>
       <div 
         className={`h-full rounded-full ${highlight ? `bg-gradient-to-r ${theme.accentGradient}` : 'bg-slate-400/50'}`}
         style={{ width: `${percentage}%` }}
       />
    </div>
  </div>
);

const QuoteItem = ({ text }: { text: string }) => (
  <div className="flex gap-2 items-start">
    <XCircle size={14} className="text-red-400 mt-0.5 shrink-0"/>
    <p className="text-xs leading-snug opacity-80">{text}</p>
  </div>
);

const GoalCard = ({ title, subtitle, icon, color, borderColor }: any) => (
  <div className={`p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center gap-4 hover:bg-white/10 transition-colors group`}>
     <div className={`p-4 rounded-full border ${borderColor} ${color} bg-white/5 group-hover:scale-110 transition-transform`}>
       {icon}
     </div>
     <div>
       <h3 className={`text-3xl font-bold ${color}`}>{title}</h3>
       <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">{subtitle}</p>
     </div>
  </div>
);

const StrategyColumn = ({ problem, strategy, theme, isLight, icon, accentColor, points }: any) => (
  <div className="flex flex-col h-full">
     {/* Problem Header */}
     <div className={`p-4 rounded-t-2xl border-x border-t text-center font-bold ${isLight ? 'bg-slate-200 border-slate-300 text-slate-600' : 'bg-white/5 border-white/10 text-slate-400'}`}>
        {problem}
     </div>
     
     {/* Strategy Middle */}
     <div className="relative z-10 -my-3 mx-auto">
        <div className={`p-2 rounded-full border-4 ${isLight ? 'border-slate-50 bg-white' : 'border-slate-900 bg-slate-800'}`}>
           <ArrowDown size={20} className="opacity-30"/>
        </div>
     </div>

     {/* Main Card */}
     <div className={`flex-1 rounded-2xl border p-6 pt-8 flex flex-col gap-6 relative overflow-hidden ${theme.cardBg} ${theme.cardBorder}`}>
        <div className={`flex flex-col items-center text-center gap-3 border-b border-white/10 pb-6`}>
           <div className={`p-3 rounded-2xl ${isLight ? 'bg-white shadow-sm' : 'bg-white/10'} ${accentColor}`}>
              {icon}
           </div>
           <h3 className="text-2xl font-bold">{strategy}</h3>
        </div>

        <div className="space-y-6">
           {points.map((pt: any, idx: number) => (
              <div key={idx}>
                 <div className={`text-sm font-bold mb-1 ${accentColor}`}>{pt.title}</div>
                 <p className={`text-xs ${theme.textSecondary} leading-relaxed`}>{pt.desc}</p>
              </div>
           ))}
        </div>
     </div>
  </div>
);
