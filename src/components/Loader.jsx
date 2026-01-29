const Loader = ({ isLoading }) => {
  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-slate-50 dark:bg-dark transition-all duration-600 min-h-screen ${
        isLoading ? 'opacity-100' : 'opacity-0 invisible'
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-4 animate-pulse">
        <iconify-icon icon="solar:infinity-linear" width="48" className="text-slate-900 dark:text-white"></iconify-icon>
        <span className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">ZOMTIK</span>
      </div>
    </div>
  );
};

export default Loader;
