'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

interface WhatsAppButtonProps {
  productName?: string
  productPrice?: number
  productWeight?: string
}

export default function WhatsAppButton({ 
  productName, 
  productPrice, 
  productWeight 
}: WhatsAppButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const defaultMessage = 'Halo, saya ingin bertanya tentang produk gula kelapa Nira Paranggupito'
  const productMessage = productName 
    ? `Halo, saya ingin memesan:\n\n${productName} (${productWeight})\nHarga: Rp ${productPrice?.toLocaleString()}\n\nBisa info lebih lanjut?`
    : defaultMessage

  const phoneNumber = '6281390176125'
  
  const handleClick = () => {
    if (productName) {
      // Direct order for specific product
      const encodedMessage = encodeURIComponent(productMessage)
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    } else {
      // Toggle expanded state for general inquiry
      setIsExpanded(!isExpanded)
    }
  }

  const handleGeneralInquiry = () => {
    const encodedMessage = encodeURIComponent(defaultMessage)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    setIsExpanded(false)
  }

  const handleProductInfo = () => {
    const message = 'Halo, saya ingin info lebih lanjut tentang produk gula kelapa yang tersedia'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
    setIsExpanded(false)
  }

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50 hover:bg-green-600 transition-colors group"
      >
        <FaWhatsapp size={24} />
        
        {/* Ping Animation */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 border-2 border-green-500 rounded-full"
        />
      </motion.button>

      {/* Expanded Options */}
      <AnimatePresence>
        {isExpanded && !productName && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            
            {/* Options Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 100 }}
              className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl z-50 p-4 min-w-64"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -top-2 -right-2 bg-gray-100 text-gray-600 rounded-full p-1 hover:bg-gray-200 transition-colors"
              >
                <FaTimes size={14} />
              </button>

              <h3 className="font-semibold text-gray-800 mb-3 text-center">
                Hubungi Kami
              </h3>
              
              <div className="space-y-2">
                <button
                  onClick={handleGeneralInquiry}
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <FaWhatsapp />
                  Tanya Produk
                </button>
                
                <button
                  onClick={handleProductInfo}
                  className="w-full border border-green-500 text-green-600 py-3 px-4 rounded-lg hover:bg-green-50 transition-colors flex items-center justify-center gap-2 font-semibold"
                >
                  <FaWhatsapp />
                  Info Produk
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  Senin - Minggu<br />
                  08:00 - 17:00 WIB
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}