'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaStar, FaShippingFast, FaLeaf } from 'react-icons/fa'

export default function Hero() {
  const features = [
    {
      icon: FaLeaf,
      text: '100% Alami'
    },
    {
      icon: FaStar,
      text: 'Kualitas Premium'
    },
    {
      icon: FaShippingFast,
      text: 'Pengiriman Cepat'
    }
  ]

  return (
    <section className="relative bg-white text-[#8B5A2B] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5A2B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif"
            >
              Gula Kelapa{' '}
              <span className="text-[#D2B48C]">Asli</span>{' '}
              Paranggupito
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 text-[#8B5A2B] max-w-lg font-light leading-relaxed"
            >
              Dari nira kelapa pilihan, diolah dengan cara tradisional – melalui penyaringan, 
              direbus, dan dicetak dengan penuh ketelatenan hingga menjadi gula kelapa murni 
              yang manis alami dan berkualitas tinggi.
            </motion.p>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-[#F5E8C8] px-4 py-3 rounded-lg border border-[#D2B48C]">
                  <feature.icon className="text-[#8B5A2B]" />
                  <span className="text-[#8B5A2B] font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#654321] transition-colors text-center shadow-lg border border-[#8B5A2B] font-serif"
              >
                Lihat Produk
              </a>
              <a
                href="https://wa.me/6281390176125"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#556B2F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#465823] transition-colors flex items-center justify-center gap-2 shadow-lg border border-[#556B2F] font-serif"
              >
                <FaWhatsapp />
                Pesan Sekarang
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D2B48C]">
              <img
                src="/images/hero-gula-kelapa.jpg"
                alt="Gula Kelapa Paranggupito"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-white/10"></div>
            </div>
            
            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-4 -left-4 bg-[#F5E8C8] text-[#8B5A2B] px-4 py-2 rounded-full shadow-lg font-semibold border border-[#D2B48C] font-serif"
            >
              🏆 Kualitas Terbaik
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-[#A52A2A] text-white px-4 py-2 rounded-full shadow-lg font-semibold border border-[#A52A2A] font-serif"
            >
              💚 Alami & Sehat
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#8B5A2B] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#8B5A2B] rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}