import { useState } from 'react';
import { Heart, Activity, Timer, Star } from 'lucide-react';

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All', icon: Star, color: 'bg-primary' },
    { id: 'strength', label: 'Strength', icon: Activity, color: 'bg-secondary' },
    { id: 'cardio', label: 'Cardio', icon: Heart, color: 'bg-primary' },
    { id: 'yoga', label: 'Yoga', icon: Timer, color: 'bg-accent' },
  ];

  const workouts = [
    {
      id: 1,
      title: 'Morning Energy Boost',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'cardio',
      icon: Heart,
      description: 'Start your day with high energy',
      color: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      title: 'Full Body Strength',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'strength',
      icon: Activity,
      description: 'Build lean muscle and strength',
      color: 'bg-gradient-to-r from-secondary to-primary'
    },
    {
      id: 3,
      title: 'Mindful Stretch',
      duration: '20 min',
      difficulty: 'Beginner',
      category: 'yoga',
      icon: Timer,
      description: 'Relax and restore your body',
      color: 'bg-gradient-to-r from-accent to-primary'
    },
    {
      id: 4,
      title: 'HIIT Blast',
      duration: '12 min',
      difficulty: 'Advanced',
      category: 'cardio',
      icon: Star,
      description: 'High intensity interval training',
      color: 'bg-gradient-to-r from-primary to-accent'
    }
  ];

  const filteredWorkouts = selectedCategory === 'all' 
    ? workouts 
    : workouts.filter(workout => workout.category === selectedCategory);

  return (
    <div className="min-h-screen gradient-hero pb-32 px-6">
      {/* Header */}
      <div className="pt-16 pb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Explore Workouts
        </h1>
        <p className="text-muted-foreground">
          Discover your next fitness challenge
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {categories.map(({ id, label, icon: Icon, color }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory === id
                  ? `${color} text-white shadow-glow`
                  : 'glass-card text-foreground hover:bg-white/20'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Workout */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-foreground">Featured Today</h2>
        <div className="glass-card p-6 bg-gradient-to-r from-primary/20 to-secondary/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground">Power Hour Challenge</h3>
              <p className="text-muted-foreground">Complete workout series</p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
              <Star size={28} className="text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <span className="text-sm bg-primary/20 px-3 py-1 rounded-full text-foreground">
                60 minutes
              </span>
              <span className="text-sm bg-secondary/20 px-3 py-1 rounded-full text-foreground">
                Advanced
              </span>
            </div>
            <button className="btn-primary px-6 py-2 text-sm">
              Start Challenge
            </button>
          </div>
        </div>
      </div>

      {/* Workout Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">All Workouts</h2>
        {filteredWorkouts.map((workout) => (
          <div
            key={workout.id}
            className="glass-card p-6 hover:bg-white/10 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${workout.id * 0.1}s` }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${workout.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <workout.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{workout.title}</h3>
                  <p className="text-muted-foreground text-sm">{workout.description}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex space-x-3">
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-foreground">
                  {workout.duration}
                </span>
                <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-foreground">
                  {workout.difficulty}
                </span>
              </div>
              <button className="btn-glass px-4 py-2 text-sm">
                Start Workout
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;