import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/261333031563', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
      aria-label="WhatsApp"
    >
      <MessageCircle size={32} color="#FFFFFF" />
    </motion.button>
  );
}
