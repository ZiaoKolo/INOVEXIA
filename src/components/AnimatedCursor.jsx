import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export const Cursor = () => (
  <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
    <path
      d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-slate-600 dark:text-slate-600"
    />
  </svg>
);

export const AnimatedCursor = ({ className, text }) => (
  <motion.div
    initial={{ translateX: '0', translateY: '0' }}
    animate={{ 
      translateX: ['0', '20px', '0'], 
      translateY: ['0', '40px', '0'] 
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut"
    }}
    className="flex items-center gap-4"
  >
    <div
      className={cn(
        'w-fit rounded-full py-1 px-2 bg-slate-600 dark:bg-slate-600 border border-slate-500 dark:border-slate-500 text-white text-xs font-medium',
        className
      )}
    >
      {text}
    </div>
    <Cursor />
  </motion.div>
);

export default AnimatedCursor;
