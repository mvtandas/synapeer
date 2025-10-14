// Deterministic random values for SSR compatibility
// These are pre-calculated values to avoid hydration mismatches

export const floatingElements = {
  // For 4 elements
  small: [
    { left: 25, top: 30, delay: 0.5, duration: 5 },
    { left: 70, top: 65, delay: 1.2, duration: 6 },
    { left: 15, top: 80, delay: 2.0, duration: 4.5 },
    { left: 85, top: 20, delay: 0.8, duration: 5.5 }
  ],
  
  // For 6 elements
  medium: [
    { left: 20, top: 25, delay: 0.3, duration: 5.2 },
    { left: 75, top: 55, delay: 1.1, duration: 6.8 },
    { left: 35, top: 85, delay: 1.9, duration: 4.8 },
    { left: 80, top: 15, delay: 0.7, duration: 5.9 },
    { left: 10, top: 65, delay: 2.3, duration: 5.5 },
    { left: 60, top: 40, delay: 1.5, duration: 6.2 }
  ],
  
  // For 8 elements
  large: [
    { left: 15, top: 25, delay: 0.5, duration: 6 },
    { left: 75, top: 60, delay: 1.2, duration: 7 },
    { left: 35, top: 85, delay: 2.1, duration: 5.5 },
    { left: 85, top: 20, delay: 0.8, duration: 8 },
    { left: 10, top: 70, delay: 1.8, duration: 6.5 },
    { left: 60, top: 40, delay: 0.3, duration: 7.5 },
    { left: 90, top: 80, delay: 2.5, duration: 5.8 },
    { left: 25, top: 15, delay: 1.5, duration: 6.8 }
  ],
  
  // For 10 elements
  xlarge: [
    { left: 12, top: 22, delay: 0.4, duration: 5.8 },
    { left: 68, top: 58, delay: 1.3, duration: 7.2 },
    { left: 28, top: 82, delay: 2.2, duration: 5.3 },
    { left: 82, top: 18, delay: 0.9, duration: 8.1 },
    { left: 8, top: 68, delay: 1.9, duration: 6.7 },
    { left: 58, top: 38, delay: 0.2, duration: 7.8 },
    { left: 88, top: 78, delay: 2.6, duration: 5.9 },
    { left: 22, top: 12, delay: 1.6, duration: 6.9 },
    { left: 48, top: 92, delay: 0.6, duration: 5.4 },
    { left: 92, top: 48, delay: 2.8, duration: 7.3 }
  ],
  
  // For 12 elements
  xxlarge: [
    { left: 18, top: 28, delay: 0.6, duration: 6.2 },
    { left: 72, top: 62, delay: 1.4, duration: 7.5 },
    { left: 32, top: 86, delay: 2.3, duration: 5.7 },
    { left: 86, top: 22, delay: 1.0, duration: 8.3 },
    { left: 12, top: 72, delay: 2.0, duration: 6.9 },
    { left: 62, top: 42, delay: 0.4, duration: 8.0 },
    { left: 92, top: 82, delay: 2.7, duration: 6.1 },
    { left: 26, top: 16, delay: 1.7, duration: 7.1 },
    { left: 52, top: 96, delay: 0.7, duration: 5.6 },
    { left: 96, top: 52, delay: 2.9, duration: 7.6 },
    { left: 6, top: 36, delay: 1.2, duration: 6.4 },
    { left: 76, top: 6, delay: 0.1, duration: 5.9 }
  ]
}

// Helper function to get elements by count
export function getFloatingElements(count: number) {
  if (count <= 4) return floatingElements.small.slice(0, count)
  if (count <= 6) return floatingElements.medium.slice(0, count)
  if (count <= 8) return floatingElements.large.slice(0, count)
  if (count <= 10) return floatingElements.xlarge.slice(0, count)
  return floatingElements.xxlarge.slice(0, count)
}
