
import React, { useState } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

interface GratitudeJournalProps {
  prompt: string;
  onBack: () => void;
}

const GratitudeJournal: React.FC<GratitudeJournalProps> = ({ prompt, onBack }) => {
  const [journalEntry, setJournalEntry] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    if (journalEntry.trim()) {
      setIsComplete(true);
      // Auto-return to home after showing completion message
      setTimeout(() => {
        onBack();
      }, 3000);
    }
  };

  if (isComplete) {
    return (
      <div className="text-center space-y-6 animate-fade-in">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-light text-stone-800">
          Beautiful work
        </h2>
        <p className="text-lg text-stone-600 font-light max-w-md mx-auto">
          Thank you for taking this moment. Your reflection has been captured in your heart.
        </p>
        <div className="text-sm text-stone-500">
          Returning to the beginning...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 hover:bg-stone-200 rounded-full transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 text-stone-600" />
        </button>
        <h2 className="text-2xl font-light text-stone-800">Today's Reflection</h2>
      </div>

      {/* Prompt Card */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 border border-amber-200/50">
        <div className="text-center">
          <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed">
            "{prompt}"
          </p>
        </div>
      </div>

      {/* Journal Input */}
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200/50 overflow-hidden">
        <div className="p-6 space-y-4">
          <h3 className="text-lg font-light text-stone-700">Your thoughts:</h3>
          <textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Take your time... let your thoughts flow naturally onto the page."
            className="w-full h-48 md:h-64 p-4 border border-stone-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-stone-50/50 text-stone-700 placeholder-stone-400 leading-relaxed"
            style={{ 
              fontFamily: 'inherit',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          />
          
          <div className="flex justify-between items-center pt-2">
            <div className="text-sm text-stone-500">
              {journalEntry.length} characters
            </div>
            <button
              onClick={handleComplete}
              disabled={!journalEntry.trim()}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 disabled:from-stone-300 disabled:to-stone-400 text-white px-6 py-2 rounded-full font-light transition-all duration-200 disabled:cursor-not-allowed"
            >
              Complete Reflection
            </button>
          </div>
        </div>
      </div>

      {/* Gentle Reminder */}
      <div className="text-center">
        <p className="text-sm text-stone-500 font-light italic">
          Remember: there's no right or wrong way to reflect. 
          This is your peaceful moment.
        </p>
      </div>
    </div>
  );
};

export default GratitudeJournal;
