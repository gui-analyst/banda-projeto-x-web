import { useState } from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  tabs: Array<{ id: string; label: string; icon: any }>;
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function MobileMenu({ tabs, activeTab, onTabChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Minimalist */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 flex flex-col gap-1.5 hover:opacity-80 transition-opacity duration-300"
        aria-label="Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#FF2E4A]" />
        ) : (
          <>
            <span className="w-6 h-0.5 bg-[#FF2E4A] rounded-full transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#FF2E4A] rounded-full transition-all duration-300" />
            <span className="w-6 h-0.5 bg-[#FF2E4A] rounded-full transition-all duration-300" />
          </>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel - Premium Design */}
      <nav
        className={`fixed top-0 right-0 h-screen w-72 bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-xl z-40 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center pt-6 px-6 pb-8 border-b border-[#FF2E4A]/20">
          <h2 className="text-lg font-bold text-white display-font">MENU</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-[#FF2E4A]/10 rounded-lg transition-all duration-300"
          >
            <X className="w-5 h-5 text-[#FF2E4A]" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="pt-6 px-6 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`w-full px-5 py-4 rounded-lg font-bold text-sm transition-all duration-300 display-font ${
                activeTab === tab.id
                  ? 'bg-[#FF2E4A] text-white shadow-lg shadow-[#FF2E4A]/50'
                  : 'text-white hover:bg-[#FF2E4A]/10 border border-[#FF2E4A]/20 hover:border-[#FF2E4A]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FF2E4A]/5 to-transparent pointer-events-none" />
      </nav>
    </>
  );
}
