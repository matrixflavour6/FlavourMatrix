import { motion } from 'motion/react';
import { ShieldCheck, Flame, BookOpen, Sparkles } from 'lucide-react';
import { CMSContent } from '../types';

interface MissionSectionProps {
  editableContent: CMSContent;
  onContentEdit: (key: string, value: any) => void;
  onCardEdit: (cardId: string, title: string, description: string) => void;
  isEditMode: boolean;
}

export default function MissionSection({
  editableContent,
  onContentEdit,
  onCardEdit,
  isEditMode,
}: MissionSectionProps) {
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'flame': return <Flame className="w-5 h-5 text-orange-500" />;
      case 'sparkles': return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'book': return <BookOpen className="w-5 h-5 text-purple-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-stone-900/40 border-y border-stone-900 relative" id="mission-statement">
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-12 max-w-3xl">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 mb-2 block">Our Culinary Philosophy</span>
          {isEditMode ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-amber-500 mb-1">Mission Section Title</label>
                <input
                  type="text"
                  value={editableContent.missionTitle}
                  onChange={(e) => onContentEdit('missionTitle', e.target.value)}
                  className="w-full bg-stone-900 border border-amber-500/40 rounded px-3 py-1.5 text-stone-100 text-2xl font-bold font-display"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-amber-500 mb-1">Mission Section Description</label>
                <textarea
                  value={editableContent.missionDescription}
                  onChange={(e) => onContentEdit('missionDescription', e.target.value)}
                  rows={3}
                  className="w-full bg-stone-900 border border-amber-500/40 rounded px-3 py-1.5 text-stone-300 text-sm"
                />
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-stone-100 tracking-tight mb-4">
                {editableContent.missionTitle}
              </h2>
              <p className="text-stone-400 text-base md:text-lg leading-relaxed max-w-4xl">
                {editableContent.missionDescription}
              </p>
            </>
          )}
        </div>

        {/* Informative Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="mission-cards-grid">
          {editableContent.missionCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-6 bg-stone-900/60 rounded-2xl border border-stone-850 hover:border-stone-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-stone-950 rounded-xl w-fit mb-4 border border-stone-850">
                  {getIcon(card.iconName)}
                </div>

                {isEditMode ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      value={card.title}
                      onChange={(e) => onCardEdit(card.id, e.target.value, card.description)}
                      className="w-full bg-stone-950 border border-amber-500/30 rounded px-2 py-1 text-stone-100 text-sm font-semibold"
                    />
                    <textarea
                      value={card.description}
                      onChange={(e) => onCardEdit(card.id, card.title, e.target.value)}
                      rows={3}
                      className="w-full bg-stone-950 border border-amber-500/30 rounded px-2 py-1 text-stone-300 text-xs"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold font-display text-stone-100 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-sm text-stone-400 leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
