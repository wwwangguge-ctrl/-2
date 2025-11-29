export type ThemeId = 'dark-modern' | 'light-clean' | 'cyber-yellow' | 'liquid-blue';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  bgClass: string;
  textPrimary: string;
  textSecondary: string;
  cardBg: string;
  cardBorder: string;
  accentGradient: string;
  accentText: string;
  iconColor: string;
  chartColor: string;
  highlightColor: string; // Added for specific tag highlighting
}