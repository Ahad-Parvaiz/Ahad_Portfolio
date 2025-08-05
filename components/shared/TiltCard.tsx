
import React, { useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  [key: string]: any; // To allow other props like href, target, etc.
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className, as: Component = 'div', ...rest }) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = -((y - height / 2) / (height / 2)) * 8; // Max rotation
    const rotateY = ((x - width / 2) / (width / 2)) * 8;
    
    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    ref.current.style.transition = 'none'; // No transition when moving
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'; // Smooth transition on leave
    ref.current.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  };

  return React.createElement(
    Component,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className,
      ...rest,
    },
    children
  );
};

export default TiltCard;
