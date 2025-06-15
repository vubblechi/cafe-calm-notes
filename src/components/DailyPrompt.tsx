
import React, { useState } from 'react';

interface DailyPromptProps {
  onPromptGenerated: (prompt: string) => void;
}

const DailyPrompt: React.FC<DailyPromptProps> = ({ onPromptGenerated }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const gratitudePrompts = [
    "What small moment yesterday brought you unexpected joy?",
    "Name three things in your creative space that make you feel inspired.",
    "What skill or talent are you grateful to have developed?",
    "Who in your life encourages your creative journey?",
    "What's one thing about your work that felt meaningful recently?",
    "What simple pleasure are you looking forward to today?",
    "What challenge recently helped you grow as a designer?",
    "What tool, app, or resource makes your creative work easier?",
    "What aspect of your creative process brings you peace?",
    "What's one thing about your creative community that you appreciate?",
    "What project or piece of work are you proud of right now?",
    "What part of your daily routine helps you feel grounded?",
    "What's something beautiful you noticed in the world recently?",
    "What feedback or encouragement has stuck with you lately?",
    "What creative risk are you grateful you took?"
  ];

  const generatePrompt = () => {
    setIsGenerating(true);
    
    // Add a small delay for a more mindful experience
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * gratitudePrompts.length);
      const selectedPrompt = gratitudePrompts[randomIndex];
      onPromptGenerated(selectedPrompt);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50">
        <div className="text-center space-y-4">
          <h3 className="text-xl md:text-2xl font-light text-stone-700">
            Ready for your daily reflection?
          </h3>
          <p className="text-stone-600 font-light">
            Click below to receive a gentle prompt for gratitude journaling
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={generatePrompt}
          disabled={isGenerating}
          className="group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-light text-lg tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Preparing your prompt...
            </span>
          ) : (
            "Begin Today's Practice"
          )}
        </button>
      </div>
    </div>
  );
};

export default DailyPrompt;
