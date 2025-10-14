"use client"

import { useState, useRef, useEffect } from "react"

interface BeforeAfterProps {
  beforeSrc: string
  afterSrc: string
  alt: string
  initial?: number
}

export function BeforeAfter({ beforeSrc, afterSrc, alt, initial = 50 }: BeforeAfterProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(initial)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const percentage = ((e.clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const touch = e.touches[0]
    const percentage = ((touch.clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, percentage)))
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    document.addEventListener("mouseup", handleGlobalMouseUp)
    return () => document.removeEventListener("mouseup", handleGlobalMouseUp)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative overflow-hidden rounded-lg cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
      >
        {/* Before Image (Background) */}
        <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center select-none">
          <img 
            src={beforeSrc} 
            alt={`${alt} - Before`} 
            className="w-full h-full object-cover select-none pointer-events-none" 
            draggable={false}
          />
        </div>

        {/* After Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden select-none"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="w-full aspect-[4/3] bg-gray-400 flex items-center justify-center select-none">
            <img 
              src={afterSrc} 
              alt={`${alt} - After`} 
              className="w-full h-full object-cover select-none pointer-events-none" 
              draggable={false}
            />
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${position}%` }}
          
          
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
            <div className="w-4 h-4 bg-gray-400 rounded-full" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">
          After
        </div>
      </div>
    </div>
  )
}
