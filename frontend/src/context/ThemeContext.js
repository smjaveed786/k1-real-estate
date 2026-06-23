import { createContext, useContext, useState } from "react";

const ThemeCtx = createContext({ isDark: true, toggle: () => {} });

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeCtx.Provider value={{ isDark, toggle: () => setIsDark((p) => !p) }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export const useTheme = () => useContext(ThemeCtx);

export const useColors = () => {
  const { isDark } = useTheme();
  return {
    isDark,
    bg:       isDark ? "bg-[rgba(10,10,11,0.93)]"   : "bg-[rgba(255,255,255,0.93)]",
    bg2:      isDark ? "bg-[rgba(18,18,20,0.93)]"   : "bg-[rgba(245,244,240,0.93)]",
    bg3:      isDark ? "bg-[rgba(26,26,29,0.93)]"   : "bg-[rgba(238,237,233,0.93)]",
    bgFoot:   isDark ? "bg-[rgba(8,8,8,0.95)]"      : "bg-[rgba(238,237,232,0.95)]",
    cardBg:   isDark ? "bg-[rgba(18,18,20,0.92)]"   : "bg-[rgba(255,255,255,0.92)]",
    textH:    isDark ? "text-[#FAFAFA]" : "text-[#1A1A1D]",
    textB:    isDark ? "text-[#E4E4E7]" : "text-[#3F3F46]",
    textM:    isDark ? "text-[#A1A1AA]" : "text-[#52525B]",
    textA:    isDark ? "text-[var(--accent-light)]" : "text-[var(--accent-dark)]",
    accent:   isDark ? "var(--accent-light)"        : "var(--accent-dark)",
    borderC:  isDark ? "border-white/5" : "border-black/[0.07]",
    border2C: isDark ? "border-white/10": "border-black/[0.1]",
    overline: isDark ? "text-[var(--accent-light)]" : "text-[var(--accent-dark)]",
  };
};
