// Performance monitoring utilities

export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  });
};

// Preload critical resources
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Web Vitals tracking (optional)
export const trackWebVitals = async () => {
  try {
    // Dynamic import to avoid build errors if web-vitals is not installed
    const webVitals = await import('web-vitals').catch(() => null);
    
    if (webVitals) {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = webVitals;
      onCLS(console.log);
      onINP(console.log);  // Replaced onFID with onINP
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    } else {
      console.log('Web Vitals not available');
    }
  } catch (error) {
    console.log('Web Vitals tracking failed:', error);
  }
};

// Simple performance metrics
export const getPerformanceMetrics = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    return {
      // Time to first byte
      ttfb: navigation.responseStart - navigation.requestStart,
      // DOM content loaded
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      // Load complete
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      // First paint (if available)
      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
      // First contentful paint (if available)
      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
    };
  }
  
  return null;
};