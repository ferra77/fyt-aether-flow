import { useState, useEffect } from 'react';
import ProgressRing from '@/components/ProgressRing';
import { Timer, Pause, Play, RotateCcw } from 'lucide-react';

const WorkoutTimer = () => {
  const [seconds, setSeconds] = useState(900); // 15 minutes
  const [isActive, setIsActive] = useState(false);
  const [isWorkout, setIsWorkout] = useState(true); // true for work, false for rest
  const initialTime = 900;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const reset = () => {
    setSeconds(initialTime);
    setIsActive(false);
  };

  const toggle = () => {
    setIsActive(!isActive);
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((initialTime - seconds) / initialTime) * 100;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blur Background */}
      <div className="absolute inset-0 gradient-primary opacity-30" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        
        {/* Workout Type */}
        <div className="mb-8 text-center">
          <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold ${
            isWorkout 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground'
          }`}>
            <Timer size={20} className="mr-2" />
            {isWorkout ? 'HIIT Workout' : 'Rest Period'}
          </div>
        </div>

        {/* Main Timer */}
        <div className="mb-12">
          <ProgressRing 
            progress={progress} 
            size={280} 
            strokeWidth={12}
            color={isWorkout ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'}
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-foreground mb-2">
                {formatTime(seconds)}
              </div>
              <div className="text-xl text-muted-foreground">
                {isWorkout ? 'Push Yourself!' : 'Take a Breath'}
              </div>
            </div>
          </ProgressRing>
        </div>

        {/* Motivational Text */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {isWorkout ? "You've Got This! 💪" : "Recovery Time 🌟"}
          </h2>
          <p className="text-muted-foreground">
            {isWorkout 
              ? "Every second counts. Keep pushing forward!"
              : "Rest well to perform better. You're doing amazing!"
            }
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center space-x-6">
          <button
            onClick={reset}
            className="glass-card p-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <RotateCcw size={28} className="text-foreground" />
          </button>
          
          <button
            onClick={toggle}
            className="btn-primary w-20 h-20 rounded-full flex items-center justify-center animate-pulse-glow"
          >
            {isActive ? (
              <Pause size={32} className="text-primary-foreground" />
            ) : (
              <Play size={32} className="text-primary-foreground ml-1" />
            )}
          </button>
          
          <button
            onClick={() => setIsWorkout(!isWorkout)}
            className="glass-card p-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <Timer size={28} className="text-foreground" />
          </button>
        </div>

        {/* Progress Stats */}
        <div className="mt-12 glass-card p-6 w-full max-w-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">Rounds</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">120</div>
              <div className="text-sm text-muted-foreground">Calories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">15</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTimer;