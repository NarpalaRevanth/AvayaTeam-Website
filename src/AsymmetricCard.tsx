import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface AsymmetricCardProps {
  children: ReactNode;
  className?: string;
  withOffset?: boolean;
}

export function AsymmetricCard({ children, className = '', withOffset = false }: AsymmetricCardProps) {
  if (withOffset) {
    return (
      <div className="group relative">
        <div className="offset-frame-shadow">
          <motion.div
            whileHover={{ x: -4, y: -4 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`bg-white border border-[#E6E6E6] asymmetric-card p-6 relative overflow-hidden ${className}`}
          >
            {children}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-[#E6E6E6] asymmetric-card p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
