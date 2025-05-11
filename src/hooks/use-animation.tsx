
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delayMs?: number;
  durationMs?: number;
}

interface UseAnimationReturn<T extends HTMLElement> {
  ref: RefObject<T>;
  isVisible: boolean;
  hasAnimated: boolean;
}

/**
 * Hook to detect when an element is visible in the viewport for triggering animations
 */
export const useAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseAnimationOptions = {}
): UseAnimationReturn<T> => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    triggerOnce = true,
    delayMs = 0,
    durationMs = 600
  } = options;
  
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visible state based on intersection with a slight delay for smoother animations
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
            
            // If we only need to trigger once, unobserve after animation
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }, delayMs);
          
          return () => clearTimeout(timer);
        } else {
          // If we need multiple animations, reset visibility when out of view
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      { threshold, rootMargin }
    );
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, delayMs]);
  
  // Apply custom duration to element if needed
  useEffect(() => {
    if (ref.current && durationMs !== 600) {
      ref.current.style.transitionDuration = `${durationMs}ms`;
    }
  }, [durationMs]);
  
  return { ref, isVisible, hasAnimated };
};

/**
 * Helper hook for parallax scrolling effects
 */
export const useParallax = (speed: number = 0.2) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Request animation frame for smoother scrolling
      requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return offset;
};

/**
 * Hook to create staggered animations for list items
 */
export const useStaggeredAnimation = <T extends HTMLElement>(
  itemCount: number,
  options: { 
    baseDelay?: number;
    staggerDelay?: number;
    threshold?: number;
  } = {}
) => {
  const { 
    baseDelay = 100, 
    staggerDelay = 50,
    threshold = 0.1
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<T>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      { threshold }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [threshold]);
  
  const getDelayForIndex = (index: number) => baseDelay + (index * staggerDelay);
  
  return { containerRef, isVisible, getDelayForIndex };
};
