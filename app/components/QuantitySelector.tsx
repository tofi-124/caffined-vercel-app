'use client'

import { FaMinus, FaPlus } from 'react-icons/fa'

type Props = {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  onChange?: (value: number) => void
  min?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
}: Props) {
  const sizeClasses = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg',
  }

  const buttonSizeClasses = {
    sm: 'w-8',
    md: 'w-10',
    lg: 'w-12',
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= min && value <= max && onChange) {
      onChange(value)
    }
  }

  return (
    <div className={`flex items-center border border-gray-300 rounded-md overflow-hidden ${sizeClasses[size]}`}>
      <button
        onClick={onDecrease}
        disabled={quantity <= min}
        className={`${buttonSizeClasses[size]} h-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
        aria-label="Decrease quantity"
      >
        <FaMinus className="text-xs" />
      </button>
      
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className="w-12 h-full text-center border-x border-gray-300 font-medium focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        className={`${buttonSizeClasses[size]} h-full flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
        aria-label="Increase quantity"
      >
        <FaPlus className="text-xs" />
      </button>
    </div>
  )
}
