'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaStar, FaWeight } from 'react-icons/fa'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const handleOrder = () => {
    const message = `Halo, saya ingin memesan ${product.name} (${product.weight})\nHarga: Rp ${product.price.toLocaleString()}`
    const phoneNumber = '6281390176125'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#D2B48C]/30"
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Availability Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          product.isAvailable 
            ? 'bg-[#556B2F] text-white' 
            : 'bg-[#A52A2A] text-white'
        }`}>
          {product.isAvailable ? 'Tersedia' : 'Habis'}
        </div>

        {/* Weight Badge */}
        <div className="absolute top-3 left-3 bg-[#8B5A2B] text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <FaWeight className="text-xs" />
          {product.weight}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name and Rating */}
        <div className="mb-3">
          <h3 className="text-xl font-bold text-[#8B5A2B] mb-2 line-clamp-1 font-serif">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 text-[#D2B48C]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="fill-current" size={14} />
            ))}
            <span className="text-[#8B5A2B] text-sm ml-1 opacity-80">(4.8)</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#8B5A2B] mb-4 line-clamp-2 text-sm leading-relaxed font-light">
          {product.description}
        </p>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-[#8B5A2B] font-serif">
              Rp {product.price.toLocaleString()}
            </span>
          </div>
          
          <button
            onClick={handleOrder}
            disabled={!product.isAvailable}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all font-serif ${
              product.isAvailable
                ? 'bg-[#8B5A2B] text-white hover:bg-[#654321] shadow-lg hover:shadow-xl transform hover:scale-105 border border-[#8B5A2B]'
                : 'bg-[#D2B48C] text-[#8B5A2B] cursor-not-allowed border border-[#D2B48C]'
            }`}
          >
            <FaWhatsapp />
            {product.isAvailable ? 'Pesan' : 'Habis'}
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-[#F5E8C8]">
          <div className="flex justify-between text-xs text-[#8B5A2B] opacity-80">
            <span>💚 Sehat & Alami</span>
            <span>🚀 Ready Stock</span>
            <span>📦 Gratis Ongkir</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}