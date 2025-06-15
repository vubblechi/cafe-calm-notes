
import React, { useState, useEffect } from 'react';
import { Coffee } from 'lucide-react';
import GratitudeJournal from '../components/GratitudeJournal';
import DailyPrompt from '../components/DailyPrompt';

const Index = () => {
  const [showJournal, setShowJournal] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState('');

  const handlePromptGenerated = (prompt: string) => {
    setCurrentPrompt(prompt);
    setShowJournal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100">
      {/* Header */}
      <header className="p-6 md:p-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="w-8 h-8 text-amber-700" />
            <h1 className="text-2xl md:text-3xl font-light text-stone-800 tracking-wide">
              Morning Ritual
            </h1>
          </div>
          <div className="text-sm text-stone-600 font-light">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {!showJournal ? (
            // Welcome Section
            <div className="text-center space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-relaxed">
                  Start your day with
                  <span className="block text-amber-700 font-normal">intention</span>
                </h2>
                <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed">
                  A gentle space for creative minds to pause, reflect, and cultivate gratitude 
                  before the day begins.
                </p>
              </div>

              {/* Coffee Cup Visual Element */}
              <div className="relative my-12">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-amber-100 to-orange-200 rounded-full flex items-center justify-center shadow-lg">
                  <Coffee className="w-16 h-16 md:w-20 md:h-20 text-amber-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-xl"></div>
              </div>

              <DailyPrompt onPromptGenerated={handlePromptGenerated} />
            </div>
          ) : (
            // Journal Section
            <div className="animate-fade-in">
              <GratitudeJournal 
                prompt={currentPrompt} 
                onBack={() => setShowJournal(false)} 
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-stone-500 text-sm font-light">
        <p>Take a deep breath. You've got this.</p>
      </footer>
    </div>
  );
};

export default Index;
