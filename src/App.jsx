import React, { useState } from 'react'; // Added useState import
import Router from './Router'; // Import the Router component
import Welcome from './components/Welcome';

const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {/* Welcome Screen - Shows over everything */}
      <Welcome onComplete={handleWelcomeComplete} />
      
      {/* Main App - Only visible after welcome completes */}
      <div className={`transition-opacity duration-1000 ${showMainContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="h-screen overflow-y-scroll">
          {/* Main Routes */}
          <main className="min-h-screen">
            <Router />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
