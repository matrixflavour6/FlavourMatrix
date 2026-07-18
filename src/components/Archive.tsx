import React, { useState } from 'react';
import { articles } from '../data/newsletter';
import { Article } from '../types';
import { Search, BookOpen, Clock, ChevronDown, ChevronUp, Bookmark, BookmarkCheck, Calendar, FileText, Unlock } from 'lucide-react';

interface ArchiveProps {
  savedArticleIds: string[];
  onToggleSaveArticle: (id: string) => void;
}

export default function Archive({ savedArticleIds, onToggleSaveArticle }: ArchiveProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);

  const categories = [
    'all',
    'Molecular Gastronomy',
    'Fermentation & Acids',
    'Maillard & Heat',
    'Sensory Science',
    'Exclusive Protocols'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.scienceConcept.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article: Article) => {
    setExpandedArticleId(expandedArticleId === article.id ? null : article.id);
  };

  return (
    <section className="py-16 bg-zinc-50 border-t border-zinc-100" id="newsletter-archive-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-left border-l-4 border-zinc-900 pl-4 max-w-3xl">
          <span className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Archives & Logs</span>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl mt-1">
            The Culinary Science Archive
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Browse our laboratory research logs and scientific culinary protocols. Enter a chemical compound or food item to locate associated cooking formulas. All resources are 100% open-access.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between border-b border-zinc-200 pb-6">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute top-3.5 left-3.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search equations, acids, proteins..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full h-11 rounded-lg border border-zinc-200 bg-white pl-10 pr-4 text-xs font-medium focus:border-zinc-900 focus:outline-none transition-colors shadow-sm"
              id="archive-search-input"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 overflow-x-auto py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider transition-all border whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-zinc-950 text-white border-zinc-950 shadow-sm'
                    : 'bg-white text-zinc-500 border-zinc-200 hover:text-zinc-900 hover:bg-zinc-50 shadow-sm'
                }`}
              >
                {cat === 'all' ? 'All Logs' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* ARTICLES LISTING */}
        <div className="mt-10 grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => {
              const isExpanded = expandedArticleId === article.id;
              const isSaved = savedArticleIds.includes(article.id);

              return (
                <div 
                  key={article.id} 
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded 
                      ? 'border-zinc-300 bg-white shadow-md' 
                      : 'border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm'
                  }`}
                  id={`article-card-${article.id}`}
                >
                  
                  {/* Article Card Summary Row */}
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start justify-between text-left">
                    
                    {/* Main content teaser */}
                    <div className="flex-grow flex flex-col gap-2 max-w-3xl">
                      {/* Metadata Row */}
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                        <span className="font-bold text-zinc-900 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded">
                          {article.category}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.publishDate}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold text-zinc-900 tracking-tight leading-snug mt-2">
                        {article.title}
                      </h3>

                      {/* Brief description */}
                      <p className="text-sm text-zinc-500 leading-relaxed font-sans mt-1.5 font-medium">
                        {article.summary}
                      </p>

                      {/* Isolated focus indicator */}
                      <div className="mt-4 flex items-center gap-2">
                        <span className="inline-flex rounded-md bg-amber-50 border border-amber-100 px-2.5 py-0.5 text-[10px] font-mono text-amber-800 font-semibold uppercase tracking-wider">
                          FOCUS: {article.scienceConcept}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider bg-emerald-50 border border-emerald-100 text-emerald-800">
                          <Unlock className="h-2.5 w-2.5" />
                          FREE ACCESS
                        </span>
                      </div>
                    </div>

                    {/* Image / Expand button block */}
                    <div className="shrink-0 flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4 w-full md:w-auto border-t md:border-t-0 border-zinc-100 pt-4 md:pt-0">
                      
                      {/* Preview Image */}
                      <div className="hidden sm:block h-20 w-32 rounded-xl overflow-hidden border border-zinc-200 shadow-inner">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="h-full w-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Bookmarking / Reader triggers */}
                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleSaveArticle(article.id);
                          }}
                          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all ${
                            isSaved 
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-600 hover:bg-emerald-100' 
                              : 'bg-white border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50'
                          }`}
                          title="Bookmark Article"
                        >
                          {isSaved ? <BookmarkCheck className="h-4.5 w-4.5 fill-emerald-100" /> : <Bookmark className="h-4.5 w-4.5" />}
                        </button>

                        <button
                          onClick={() => handleArticleClick(article)}
                          className={`h-10 px-4 rounded-lg flex items-center justify-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                            isExpanded
                              ? 'bg-zinc-900 border-zinc-900 text-white'
                              : 'bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50'
                          }`}
                        >
                          {isExpanded ? (
                            <>
                              <span>Close Log</span>
                              <ChevronUp className="h-3.5 w-3.5" />
                            </>
                          ) : (
                            <>
                              <span>Read Protocol</span>
                              <ChevronDown className="h-3.5 w-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* EXPANDED RICH-TEXT PROTOCOL RENDER */}
                  {isExpanded && (
                    <div className="border-t border-zinc-200 bg-zinc-50/50 p-6 sm:p-10 text-left">
                      <div className="prose prose-zinc max-w-4xl mx-auto font-sans leading-relaxed text-zinc-700">
                        
                        {/* Custom Rendered content */}
                        <div className="whitespace-pre-line text-sm sm:text-base">
                          {/* Parse titles, subheaders, bullet lists with custom styling */}
                          {article.content.split('\n').map((line, idx) => {
                            if (line.startsWith('### ')) {
                              return <h3 key={idx} className="font-display text-lg sm:text-xl font-extrabold text-zinc-900 mt-8 mb-4 tracking-tight uppercase border-b border-zinc-200 pb-1.5">{line.replace('### ', '')}</h3>;
                            }
                            if (line.startsWith('#### ')) {
                              return <h4 key={idx} className="font-display text-sm sm:text-base font-bold text-zinc-900 mt-6 mb-3 uppercase tracking-wider">{line.replace('#### ', '')}</h4>;
                            }
                            if (line.startsWith('* ')) {
                              return <li key={idx} className="ml-5 list-disc text-zinc-700 my-1 font-medium">{line.replace('* ', '')}</li>;
                            }
                            if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                              return <li key={idx} className="ml-5 list-decimal text-zinc-700 my-1.5 font-medium">{line}</li>;
                            }
                            if (line.startsWith('| ')) {
                              return (
                                <div key={idx} className="font-mono text-xs bg-white p-2.5 my-1 border border-zinc-100 rounded-md">
                                  {line}
                                </div>
                              );
                            }
                            if (line.trim() === '---') {
                              return <hr key={idx} className="my-8 border-t border-zinc-200" />;
                            }
                            return <p key={idx} className="my-4 leading-relaxed font-medium text-zinc-600">{line}</p>;
                          })}
                        </div>

                        {/* Complete footer bookmark tag */}
                        <div className="mt-8 border-t border-zinc-200 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase">
                            <FileText className="h-4 w-4" />
                            <span>OPEN SCIENCE LICENSE — REPRODUCTION & MODIFICATION PERMITTED.</span>
                          </div>
                          
                          <button
                            onClick={() => onToggleSaveArticle(article.id)}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-xs font-mono font-bold uppercase transition-all ${
                              isSaved
                                ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
                                : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                            }`}
                          >
                            {isSaved ? <BookmarkCheck className="h-4 w-4 text-emerald-600" /> : <Bookmark className="h-4 w-4 text-zinc-400" />}
                            {isSaved ? 'SAVED TO MY JOURNAL' : 'SAVE PROTOCOL'}
                          </button>
                        </div>

                      </div>
                    </div>
                  )}

                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-white p-16 text-center shadow-inner">
              <BookOpen className="h-10 w-10 text-zinc-300 mx-auto stroke-[1.5]" />
              <p className="mt-4 font-mono text-sm text-zinc-400">
                No matching laboratory protocols catalogued for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} 
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wide hover:bg-zinc-800"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
