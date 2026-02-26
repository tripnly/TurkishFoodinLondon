import { MapPin, Clock, PoundSterling } from 'lucide-react'

interface RestaurantCardProps {
  name: string
  tagline: string
  description: string
  whatToOrder: string
  address: string
  hours?: string
  price: string
  tip?: string
}

export default function RestaurantCard({
  name,
  tagline,
  description,
  whatToOrder,
  address,
  hours,
  price,
  tip,
}: RestaurantCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="font-display text-xl font-bold text-navy">{name}</h3>
        <p className="text-turkish-red text-sm italic">{tagline}</p>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-sm">
          <span className="font-semibold text-navy">What to Order:</span>{' '}
          <span className="text-gray-600">{whatToOrder}</span>
        </p>
      </div>
      
      {tip && (
        <div className="bg-cream border-l-3 border-gold rounded-r-lg p-3 mb-4">
          <p className="text-sm">
            <span className="font-semibold text-navy">Pro Tip:</span>{' '}
            <span className="text-gray-600">{tip}</span>
          </p>
        </div>
      )}
      
      <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
        <span className="flex items-center gap-1">
          <MapPin size={14} /> {address}
        </span>
        {hours && (
          <span className="flex items-center gap-1">
            <Clock size={14} /> {hours}
          </span>
        )}
        <span className="flex items-center gap-1">
          <PoundSterling size={14} /> {price}
        </span>
      </div>
    </div>
  )
}
