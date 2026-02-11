import React from 'react';
import { PhoneIcon } from 'lucide-react';

const Phone: React.FC<{size?: number; className?: string}> = ({ size = 24, className = "" }) => {
  return <PhoneIcon size={size} className={className} />;
};

export default Phone;