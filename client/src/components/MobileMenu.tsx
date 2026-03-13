import { useState } from 'react';
import { Menu, X } from 'lucide-react';

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
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded border-2 border-[#FF2E4A] bg-black/80 hover:bg-[#FF2E4A] transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-[#FF2E4A]" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md border-l-2 border-[#FF2E4A] z-40 md:hidden transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 space-y-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded border-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'border-[#FF2E4A] bg-[#FF2E4A] text-white'
                    : 'border-[#FF2E4A]/50 text-white hover:border-[#FF2E4A]'
                }`}
              >
                <Icon size={20} />
                <span className="font-bold">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
