import { useState, useEffect } from 'react';
import FytLogo from '@/components/FytLogo';
import ProgressRing from '@/components/ProgressRing';
import { Activity, Heart, Timer, Star } from 'lucide-react';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      
      const hour = now.getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 17) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Workouts', value: '12', progress: 75, icon: Activity },
    { label: 'Streak', value: '7d', progress: 50, icon: Star },
    { label: 'Heart Rate', value: '72', progress: 60, icon: Heart },
  ];

  const motivationalQuotes = [
    "Every workout counts 💪",
    "You're stronger than yesterday ⚡",
    "Progress, not perfection ✨",
    "Your only limit is you 🚀"
  ];

  const [currentQuote] = useState(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);

  return (
    <div className="min-h-screen gradient-hero pb-32 px-6">
      {/* Header */}
      <div className="pt-16 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">
              {greeting}
            </h1>
            <p className="text-muted-foreground font-medium">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="animate-float">
            <FytLogo size={50} />
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="glass-card p-6 animate-slide-up">
          <p className="text-center text-lg font-medium text-foreground">
            {currentQuote}
          </p>
        </div>
      </div>

      {/* Today's Progress */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Today's Progress</h2>
        <div className="glass-card p-6">
          <div className="flex justify-center mb-6">
            <ProgressRing progress={68} size={140} color="hsl(var(--primary))">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">68%</div>
                <div className="text-sm text-muted-foreground">Complete</div>
              </div>
            </ProgressRing>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {stats.map(({ label, value, progress, icon: Icon }) => (
              <div key={label} className="text-center">
                <div className="glass bg-white/10 rounded-2xl p-4 mb-2">
                  <Icon size={24} className="mx-auto mb-2 text-primary" />
                  <div className="text-xl font-bold text-foreground">{value}</div>
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Quick Start</h2>
        <div className="space-y-3">
          <button className="w-full glass-card p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mr-4">
                <Timer size={24} className="text-primary-foreground" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Quick Workout</div>
                <div className="text-sm text-muted-foreground">15 min HIIT</div>
              </div>
            </div>
            <div className="text-2xl">🔥</div>
          </button>

          <button className="w-full glass-card p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                <Heart size={24} className="text-secondary-foreground" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Mindful Stretch</div>
                <div className="text-sm text-muted-foreground">10 min relaxation</div>
              </div>
            </div>
            <div className="text-2xl">🧘‍♀️</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;