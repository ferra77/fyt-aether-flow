import { useState } from 'react';
import FytLogo from '@/components/FytLogo';
import ProgressRing from '@/components/ProgressRing';
import { User, Star, Activity, Heart, Timer } from 'lucide-react';

const Profile = () => {
  const [user] = useState({
    name: 'Alex Johnson',
    level: 'Fitness Enthusiast',
    joinDate: 'January 2024',
    streak: 12,
    totalWorkouts: 156,
    totalMinutes: 2840,
  });

  const achievements = [
    { icon: Star, title: 'Week Warrior', description: '7-day streak', gradient: 'from-primary to-secondary' },
    { icon: Activity, title: 'Strength Master', description: '50 strength workouts', gradient: 'from-secondary to-primary' },
    { icon: Timer, title: 'Speed Demon', description: '100 cardio sessions', gradient: 'from-primary to-accent' },
    { icon: Heart, title: 'Zen Master', description: '30 yoga sessions', gradient: 'from-accent to-secondary' },
    { icon: Star, title: 'Goal Crusher', description: 'Monthly target hit', gradient: 'from-secondary to-accent' },
    { icon: Activity, title: 'Rising Star', description: 'Top 10% this month', gradient: 'from-primary to-secondary' },
  ];

  const stats = [
    { label: 'Current Streak', value: user.streak, unit: 'days', icon: Star, color: 'text-primary' },
    { label: 'Total Workouts', value: user.totalWorkouts, unit: '', icon: Activity, color: 'text-secondary' },
    { label: 'Minutes Trained', value: user.totalMinutes, unit: 'min', icon: Timer, color: 'text-accent' },
    { label: 'Avg Heart Rate', value: 142, unit: 'bpm', icon: Heart, color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen bg-background pb-32 px-6">
      {/* Header */}
      <div className="pt-16 pb-8 text-center">
        <div className="mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
            <User size={40} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
          <p className="text-muted-foreground">{user.level}</p>
          <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
        </div>
        
        <div className="flex justify-center">
          <FytLogo size={60} />
        </div>
      </div>

      {/* Weekly Progress */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">This Week</h2>
        <div className="glass-card p-6">
          <div className="flex justify-center mb-4">
            <ProgressRing progress={75} size={120} color="hsl(var(--primary))">
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">5/7</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
            </ProgressRing>
          </div>
          <p className="text-center text-muted-foreground">
            Great job! You're on track to beat last week's record.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Your Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(({ label, value, unit, icon: Icon, color }) => (
            <div key={label} className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <Icon size={20} className={color} />
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
              <div className="text-2xl font-bold text-foreground">
                {value}
                <span className="text-sm text-muted-foreground ml-1">{unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Achievements</h2>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map(({ icon: Icon, title, description, gradient }) => (
            <div key={title} className="glass-card p-4 text-center hover:bg-white/10 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={20} className="text-white" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
              <div className="text-xs text-muted-foreground">{description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Settings</h2>
        
        {['Workout Reminders', 'Privacy Settings', 'Sync Health Data', 'Share Progress'].map((setting) => (
          <button
            key={setting}
            className="w-full glass-card p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300"
          >
            <span className="text-foreground font-medium">{setting}</span>
            <div className="w-2 h-2 bg-primary rounded-full"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;