import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import WorkoutTimer from "./pages/WorkoutTimer";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'timer':
        return <WorkoutTimer />;
      case 'explore':
        return <Explore />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="max-w-md mx-auto min-h-screen bg-background relative">
          {renderPage()}
          <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
