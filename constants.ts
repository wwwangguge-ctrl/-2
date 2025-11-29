import { ThemeConfig } from './types';

export const THEMES: Record<string, ThemeConfig> = {
  'dark-modern': {
    id: 'dark-modern',
    name: 'Obsidian',
    bgClass: 'bg-slate-950 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-400',
    cardBg: 'bg-white/5 backdrop-blur-2xl',
    cardBorder: 'border-white/10',
    accentGradient: 'from-blue-400 to-emerald-400',
    accentText: 'text-blue-400',
    iconColor: 'text-blue-300',
    chartColor: '#60a5fa',
    highlightColor: 'text-blue-300 bg-blue-500/10'
  },
  'light-clean': {
    id: 'light-clean',
    name: 'Ceramic',
    bgClass: 'bg-slate-50',
    textPrimary: 'text-slate-800',
    textSecondary: 'text-slate-500',
    cardBg: 'bg-white/60 backdrop-blur-xl', // Increased blur, transparency for glass
    cardBorder: 'border-white/60',
    accentGradient: 'from-slate-600 to-slate-400',
    accentText: 'text-slate-700',
    iconColor: 'text-slate-600',
    chartColor: '#475569',
    highlightColor: 'text-slate-700 bg-slate-200'
  },
  'cyber-yellow': {
    id: 'cyber-yellow',
    name: 'Cyber Volt',
    // Pure black background with subtle texture
    bgClass: 'bg-neutral-950 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black',
    textPrimary: 'text-white',
    textSecondary: 'text-neutral-400',
    // Dark glass with yellow tint
    cardBg: 'bg-neutral-900/60 backdrop-blur-2xl',
    cardBorder: 'border-[#ffdd00]/30',
    accentGradient: 'from-[#ffdd00] to-[#ffaa00]',
    accentText: 'text-[#ffdd00]',
    iconColor: 'text-[#ffdd00]',
    chartColor: '#ffdd00',
    highlightColor: 'text-[#ffdd00] bg-[#ffdd00]/10'
  },
  'liquid-blue': {
    id: 'liquid-blue',
    name: 'Liquid Aqua',
    // Fresh white/blue gradient
    bgClass: 'bg-blue-50 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-white to-blue-50',
    textPrimary: 'text-slate-800',
    textSecondary: 'text-blue-900/60',
    // High gloss, liquid glass effect
    cardBg: 'bg-white/40 backdrop-blur-3xl shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]',
    cardBorder: 'border-white/80',
    accentGradient: 'from-blue-500 to-cyan-400',
    accentText: 'text-blue-600',
    iconColor: 'text-blue-500',
    chartColor: '#3b82f6',
    highlightColor: 'text-blue-600 bg-blue-100 border border-blue-200'
  }
};