import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Eye, Edit3, Save, RefreshCw, CheckCircle2, GitCommit, X, Mail } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
  changesCount: number;
  onSaveTrigger: () => void;
}

export default function AdminPanel({
  isOpen,
  onClose,
  isAdmin,
  setIsAdmin,
  isEditMode,
  setIsEditMode,
  changesCount,
  onSaveTrigger,
}: AdminPanelProps) {
  // Login State
  const [email, setEmail] = useState('akshathghanti@gmail.com'); // Autofilled based on additional user metadata for beautiful developer experience
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Sync simulation states
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'saved'>('idle');
  const [commitHash, setCommitHash] = useState('f9c5a2');

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulated secure check
    setTimeout(() => {
      if (email.trim() && password === 'admin') {
        setIsAdmin(true);
        setIsEditMode(true);
        onClose();
        setPassword('');
      } else {
        setError('Invalid owner credentials. Hint: use password "admin"');
      }
      setLoading(false);
    }, 800);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsEditMode(false);
  };

  // Simulate automatic Git Commit on saving/editing changes
  const handleSaveToGitHub = () => {
    setSyncStatus('syncing');
    onSaveTrigger();

    setTimeout(() => {
      // Generate random hex commit hash
      const randomHash = Math.random().toString(16).substring(2, 8);
      setCommitHash(randomHash);
      setSyncStatus('saved');
      
      setTimeout(() => {
        setSyncStatus('idle');
      }, 3500);
    }, 1500);
  };

  // Trigger sync simulation if changesCount incremented (meaning live editor detected edits)
  useEffect(() => {
    if (changesCount > 0 && isAdmin && isEditMode) {
      setSyncStatus('syncing');
      const delayDebounce = setTimeout(() => {
        const randomHash = Math.random().toString(16).substring(2, 8);
        setCommitHash(randomHash);
        setSyncStatus('saved');
        setTimeout(() => setSyncStatus('idle'), 3500);
      }, 2000);
      return () => clearTimeout(delayDebounce);
    }
  }, [changesCount]);

  return (
    <>
      {/* 1. Login Modal Overlay */}
      <AnimatePresence>
        {isOpen && !isAdmin && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm p-4 flex justify-center items-start" id="admin-login-modal">
            {/* Backdrop closer */}
            <div className="fixed inset-0" onClick={onClose} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-stone-900 border border-stone-800 rounded-3xl w-full max-w-md my-auto p-6 md:p-8 shadow-2xl z-10 space-y-6"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-stone-950/60 hover:bg-stone-950 rounded-full border border-stone-855 text-stone-400 hover:text-stone-200 transition-all cursor-pointer"
                id="close-login-modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-2">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-2xl w-fit mx-auto mb-2">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-stone-100">
                  Owner Authentication
                </h3>
                <p className="text-xs text-stone-400">
                  Log in to enable GastroChronicles' CMS editor.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Owner Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-stone-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500/50 rounded-xl pl-10 pr-4 py-2 text-stone-100 text-sm outline-none transition-all"
                      placeholder="owner@gastrochronicles.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-stone-950 border border-stone-800 focus:border-amber-500/50 rounded-xl px-4 py-2 text-stone-100 text-sm outline-none transition-all"
                    placeholder="Enter owner password (admin)"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 bg-red-950/20 border border-red-900/30 p-2.5 rounded-lg text-center font-mono">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-950 text-sm font-bold rounded-xl transition-all cursor-pointer disabled:opacity-50"
                  id="submit-login-btn"
                >
                  {loading ? (
                    <RefreshCw className="w-4 h-4 animate-spin text-stone-950" />
                  ) : (
                    <>
                      <Unlock className="w-4 h-4 text-stone-950" />
                      <span>Authenticate</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. Floating Live Edit Dock (Bottom-Right, only visible to logged-in Admin) */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-80 z-40 bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-4 space-y-4"
            id="admin-floating-dock"
          >
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-stone-850 pb-2.5">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-stone-300">CMS Control Board</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-[10px] font-mono text-amber-500 hover:text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-md hover:bg-amber-500/5 transition-all"
                id="dock-logout-btn"
              >
                Log Out
              </button>
            </div>

            {/* Mode Selector */}
            <div className="flex bg-stone-950 p-1 rounded-xl border border-stone-850 text-xs font-mono">
              <button
                onClick={() => setIsEditMode(false)}
                className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  !isEditMode ? 'bg-stone-800 text-stone-100 font-bold' : 'text-stone-500'
                }`}
                id="view-mode-dock-btn"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Mode</span>
              </button>
              <button
                onClick={() => setIsEditMode(true)}
                className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  isEditMode ? 'bg-amber-600 text-stone-950 font-bold' : 'text-stone-500'
                }`}
                id="edit-mode-dock-btn"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Mode</span>
              </button>
            </div>

            {/* Git Sync Simulator Status */}
            <div className="bg-stone-950 p-3 rounded-xl border border-stone-850 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-500">
                <span>GitHub Sync Status:</span>
                <span className="text-stone-400">repo: GastroChronicles</span>
              </div>

              <div className="flex items-center justify-between">
                {syncStatus === 'syncing' ? (
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                    <RefreshCw className="w-4 h-4 animate-spin text-amber-500" />
                    <span>Syncing with main...</span>
                  </div>
                ) : syncStatus === 'saved' ? (
                  <div className="flex items-center gap-1.5 text-xs text-green-400 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Saved to Repo</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-stone-400 font-mono">
                    <GitCommit className="w-4 h-4 text-stone-500" />
                    <span>Commit Hash: {commitHash}</span>
                  </div>
                )}

                <button
                  onClick={handleSaveToGitHub}
                  disabled={syncStatus === 'syncing' || changesCount === 0}
                  className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-20 text-stone-950 rounded-lg transition-all cursor-pointer"
                  id="push-to-github-btn"
                >
                  <Save className="w-3 h-3" />
                  <span>Push</span>
                </button>
              </div>

              {changesCount > 0 && syncStatus === 'idle' && (
                <div className="text-[10px] font-mono text-amber-500 text-center animate-pulse pt-1">
                  * {changesCount} unpushed local edit{changesCount > 1 ? 's' : ''} detected
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
