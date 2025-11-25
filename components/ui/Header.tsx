'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaLeaf, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Effect untuk detect scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Gula Kelapa', href: '/about' },
    { name: 'Cara Pembuatan', href: '/processing' },
    { name: 'Produk', href: '/products' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b border-[#D2B48C]/30' 
          : 'bg-white shadow-md'
      }`}
    >
      {/* Top Bar */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        className={`${
          isScrolled ? 'hidden' : 'block'
        } bg-[#F5E8C8] text-[#8B5A2B] py-3 relative overflow-hidden border-b border-[#D2B48C]`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5A2B' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#8B5A2B]">
                <FaPhone className="text-[#8B5A2B] text-xs" />
              </div>
              <span className="text-[#8B5A2B] font-medium group-hover:text-[#654321] transition-colors">
                081390176125 (Pak Sarmo)
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-[#8B5A2B]">
                <FaMapMarkerAlt className="text-[#8B5A2B] text-xs" />
              </div>
              <span className="text-[#8B5A2B] font-medium group-hover:text-[#654321] transition-colors">
                Paranggupito, Wonogiri
              </span>
            </div>
          </div>
          
          <motion.a 
            href="https://paranggupito-beach.com" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-white hover:bg-[#8B5A2B] px-4 py-2 rounded-full text-[#8B5A2B] hover:text-white transition-all duration-300 flex items-center gap-2 group border border-[#8B5A2B]"
          >
            <span className="font-medium">Jelajahi Pantai Paranggupito</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-sm"
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-between items-center"
        >
          {/* Logo */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center gap-4 group">
              <div className={`relative ${
                isScrolled 
                  ? 'w-12 h-12 bg-[#F5E8C8]' 
                  : 'w-14 h-14 bg-[#F5E8C8]'
              } rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 border border-[#D2B48C]`}>
                <FaLeaf className="text-[#8B5A2B] text-xl" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#556B2F] rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className={`text-2xl font-bold font-serif ${
                  isScrolled ? 'text-[#8B5A2B]' : 'text-[#8B5A2B]'
                } group-hover:scale-105 transition-transform duration-300`}>
                  GULA KELAPA
                </h1>
                <p className={`text-sm ${
                  isScrolled ? 'text-[#8B5A2B]' : 'text-[#8B5A2B]'
                } font-medium flex items-center gap-1 font-serif opacity-80`}>
                  <span className="w-1.5 h-1.5 bg-[#556B2F] rounded-full animate-pulse"></span>
                  Nira Paranggupito
                </p>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div variants={itemVariants} className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={`relative font-semibold transition-all duration-300 group font-serif ${
                    isScrolled 
                      ? 'text-[#8B5A2B] hover:text-[#654321]' 
                      : 'text-[#8B5A2B] hover:text-[#654321]'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-[#8B5A2B]' : 'bg-[#8B5A2B]'
                  }`}></span>
                  
                  {/* Hover Dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className={`absolute -top-2 -right-2 w-2 h-2 rounded-full ${
                      isScrolled ? 'bg-[#8B5A2B]' : 'bg-[#8B5A2B]'
                    }`}
                  ></motion.span>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="https://wa.me/6281390176125"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg border border-[#8B5A2B] ${
                isScrolled
                  ? 'bg-[#8B5A2B] text-white hover:bg-[#654321] hover:shadow-xl'
                  : 'bg-[#8B5A2B] text-white hover:bg-[#654321] font-serif'
              }`}
            >
              <FaWhatsapp className="text-lg" />
              Pesan Sekarang
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
              isScrolled
                ? 'bg-[#8B5A2B] hover:bg-[#654321] text-white border-[#8B5A2B]'
                : 'bg-[#8B5A2B] hover:bg-[#654321] text-white border-[#8B5A2B]'
            }`}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden mt-4 rounded-2xl overflow-hidden border ${
                isScrolled 
                  ? 'bg-white border-[#D2B48C]' 
                  : 'bg-white border-[#D2B48C]'
              } shadow-lg`}
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-4 px-4 rounded-xl font-semibold transition-all duration-300 font-serif ${
                        isScrolled
                          ? 'text-[#8B5A2B] hover:bg-[#F5E8C8] hover:text-[#654321]'
                          : 'text-[#8B5A2B] hover:bg-[#F5E8C8] hover:text-[#654321]'
                      } flex items-center gap-3`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        isScrolled ? 'bg-[#8B5A2B]' : 'bg-[#8B5A2B]'
                      }`}></div>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="https://wa.me/6287737663441"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={` py-4 px-4 rounded-xl font-semibold text-center transition-all duration-300 mt-4 flex items-center justify-center gap-2 border border-[#8B5A2B] font-serif ${
                    isScrolled
                      ? 'bg-[#8B5A2B] text-white hover:bg-[#654321] hover:shadow-lg'
                      : 'bg-[#8B5A2B] text-white hover:bg-[#654321]'
                  }`}
                >
                  <FaWhatsapp className="text-lg" />
                  Pesan via WhatsApp
                </motion.a>

                {/* Pantai Link */}
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  href="https://paranggupito-beach.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 px-4 rounded-xl font-semibold text-center transition-all duration-300 border ${
                    isScrolled
                      ? 'bg-[#556B2F] text-white hover:bg-[#465823] border-[#556B2F]'
                      : 'bg-[#556B2F] text-white hover:bg-[#465823] border-[#556B2F]'
                  } flex items-center justify-center gap-2 font-serif`}
                >
                  Pantai Paranggupito
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}