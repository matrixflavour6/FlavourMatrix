import { motion } from 'motion/react';
import { erasData } from '../data/eras';
import { EraId } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface TeaserCardsProps {
  onPickEra: (id: EraId) => void;
}

export default function TeaserCards({ onPickEra }: TeaserCardsProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-stone-950" id="teaser-cards-section">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-500 mb-2 block">Interactive Vault Teaser</span>
          <h2 className="text-3xl font-extrabold font-display text-stone-100 tracking-tight">
            Pick Your Historical Era
          </h2>
          <p className="text-stone-400 text-sm mt-2 max-w-xl mx-auto">
            Select an era to jump into the corresponding historical recipes, ingredients, and chemical transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" id="teaser-cards-grid">
          {erasData.map((era, index) => (
            <motion.div
              key={era.id}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative h-80 rounded-2xl overflow-hidden border border-stone-850/80 bg-stone-900 cursor-pointer flex flex-col justify-end p-5 transition-all shadow-lg"
              onClick={() => onPickEra(era.id)}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={era.image}
                  alt={era.name}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-amber-500">
                  <span>0{index + 1}</span>
                  <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold font-display text-stone-100 leading-tight">
                  {era.name}
                </h3>
                <p className="text-[11px] text-stone-400 line-clamp-2 leading-relaxed">
                  {era.description}
                </p>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 pt-2 opacity-80 group-hover:opacity-100 transition-all">
                  <span>Enter Vault</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
