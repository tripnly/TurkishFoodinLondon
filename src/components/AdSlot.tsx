'use client'

import { useEffect } from 'react'

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  responsive?: boolean
  className?: string
}

export default function AdSlot({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = ''
}: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1144765684947111"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

// Placeholder for development/before ads approved
export function AdSlotPlaceholder({ 
  size = 'rectangle' 
}: { 
  size?: 'rectangle' | 'banner' | 'sidebar' 
}) {
  const sizes = {
    rectangle: 'h-[250px] w-full',
    banner: 'h-[90px] w-full',
    sidebar: 'h-[600px] w-full',
  }
  
  return (
    <div className={`bg-gray-100 rounded-lg ${sizes[size]} flex items-center justify-center text-gray-400 text-sm`}>
      <span>Advertisement</span>
    </div>
  )
}
