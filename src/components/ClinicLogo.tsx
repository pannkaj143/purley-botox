import React from 'react';

interface ClinicLogoProps {
  className?: string;
  isDark?: boolean;
}

const ClinicLogo: React.FC<ClinicLogoProps> = ({ 
  className = "h-16", 
  isDark = false 
}) => {
  return (
    <img
      src="/images/da638ab1-696c-425f-8892-3312cc9c158f.png"
      alt="Confidental Clinic Logo"
      className={className}
    />
  );
};

export default ClinicLogo;
