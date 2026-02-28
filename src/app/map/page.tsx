import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Turkish Food Map | Turkish Food in London',
  description: 'Interactive map of the best Turkish restaurants, bakeries, and dessert shops in London. Find Turkish food near you across Green Lanes, Dalston, Stoke Newington, Wood Green, Finsbury Park, and Edmonton.',
}

const MapClient = dynamic(() => import('@/components/MapClient'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gray-50">
      <div className="text-center">
        <p className="text-5xl mb-4 animate-pulse">🗺️</p>
        <p className="text-gray-500 text-sm">Loading map...</p>
      </div>
    </div>
  ),
})

export default function MapPage() {
  return <MapClient />
}