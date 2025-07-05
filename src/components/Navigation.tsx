import { useState } from 'react';
import { Activity, Timer, User, Heart } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', icon: Activity, label: 'Home' },
    { id: 'timer', icon: Timer, label: 'Timer' },
    { id: 'explore', icon: Heart, label: 'Explore' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto">
      <div className="glass-card mx-4 mb-8 p-2">
        <div className="flex justify-around items-center">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onPageChange(id)}
              className={`relative flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
                currentPage === id
                  ? 'bg-primary text-primary-foreground shadow-glow'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon 
                size={24} 
                className={`transition-all duration-300 ${
                  currentPage === id ? 'scale-110' : 'scale-100'
                }`}
              />
              <span className="text-xs font-medium mt-1 opacity-80">
                {label}
              </span>
              {currentPage === id && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;