import { motion } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-xl"
      onClick={onClose} // Close if clicking background
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#0d0d0d] border border-white/10 p-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Don't close if clicking modal
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-500"></div>

        <h2 className="text-2xl font-bold tracking-tighter mb-2 font-mono">ESTABLISH_CONNECTION</h2>
        <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest mb-8">
          Secure Channel // End-to-End Encryption
        </p>

        <div className="space-y-4">
          {/* Email Option */}
          <a href="mailto:mohamedlakhrouf@gmail.com" className="flex items-center justify-between group p-4 border border-white/5 bg-white/5 hover:border-blue-500/50 transition-all">
            <span className="text-xs font-mono text-gray-400 group-hover:text-white">EMAIL_PROTO</span>
            <span className="text-blue-500">→</span>
          </a>

          {/* LinkedIn Option */}
          <a href="https://www.linkedin.com/in/mohamed-l-216670212/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 border border-white/5 bg-white/5 hover:border-blue-500/50 transition-all">
            <span className="text-xs font-mono text-gray-400 group-hover:text-white">LINKEDIN_SIGNAL</span>
            <span className="text-blue-500">→</span>
          </a>

          {/* GitHub Option */}
          <a href="https://github.com/SUITSHIMED" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group p-4 border border-white/5 bg-white/5 hover:border-blue-500/50 transition-all">
            <span className="text-xs font-mono text-gray-400 group-hover:text-white">GITHUB_SOURCE</span>
            <span className="text-blue-500">→</span>
          </a>
        </div>

        <button 
          onClick={onClose}
          className="mt-10 w-full py-3 text-[10px] font-mono text-gray-600 hover:text-red-500 transition-colors uppercase tracking-widest border-t border-white/5"
        >
          [ Terminate_Session ]
        </button>
      </motion.div>
    </motion.div>
  );
};
export default ContactModal;