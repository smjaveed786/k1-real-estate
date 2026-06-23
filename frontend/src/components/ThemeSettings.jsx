import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const colors = [
  { name: 'Gold', light: '#D4AF37', dark: '#8B6914' },
  { name: 'Blue', light: '#3B82F6', dark: '#1D4ED8' },
  { name: 'Green', light: '#10B981', dark: '#047857' },
  { name: 'Rose', light: '#F43F5E', dark: '#BE123C' },
  { name: 'Purple', light: '#8B5CF6', dark: '#6D28D9' },
];

export default function ThemeSettings() {
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  const changeColor = (light, dark) => {
    document.documentElement.style.setProperty('--accent-light', light);
    document.documentElement.style.setProperty('--accent-dark', dark);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className={`p-4 rounded-xl shadow-xl border flex flex-col gap-3 ${isDark ? 'bg-[#18181A] border-white/10 text-white' : 'bg-white border-black/10 text-black'}`}>
          <h4 className="text-sm font-semibold tracking-wider uppercase mb-1">Primary Color</h4>
          <div className="flex items-center gap-3">
            {colors.map((c) => (
              <button
                key={c.name}
                onClick={() => changeColor(c.light, c.dark)}
                className="w-8 h-8 rounded-full shadow-sm hover:scale-110 transition-transform"
                style={{ backgroundColor: c.light }}
                title={c.name}
                aria-label={`Select ${c.name} color`}
              />
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-[var(--accent-light)] text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Theme Settings"
      >
        <Settings size={20} />
      </button>
    </div>
  );
}
