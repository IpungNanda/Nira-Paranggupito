'use client'
import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLeaf, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: 'https://wa.me/6281390176125',
      name: 'WhatsApp',
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/gulakelapa_official',
      name: 'Instagram',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/share/1N7hBkP2ZF/',
      name: 'Facebook',
    }
  ]

  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Proses Pembuatan', href: '/processing' },
    { name: 'Produk', href: '/products' },
  ]

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: 'Paranggupito, Wonogiri, Jawa Tengah',
      subtext: 'Pusat Produksi Gula Kelapa',
      link: '#'
    },
    {
      icon: FaPhone,
      text: '081390176125 (Pak Sarmo)',
      subtext: 'Senin - Minggu: 08.00 - 17.00 WIB',
      link: 'tel:+6281390176125'
    },
    {
      icon: FaEnvelope,
      text: 'gulakelapaparanggupito@gmail.com',
      subtext: 'Respon cepat 1x24 jam',
      link: 'mailto:gulakelapaparanggupito@gmail.com'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="bg-white text-[#8B5A2B] relative overflow-hidden border-t border-[#D2B48C]/30">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%238B5A2B' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '300px 300px'
          }}
        ></div>
      </div>

      {/* Main Footer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-start gap-6 mb-6">
              <div className="relative">
                <div className="w-18 h-18 bg-[#F5E8C8] rounded-2xl flex items-center justify-center shadow-lg border border-[#D2B48C]">
                  <FaLeaf className="text-[#8B5A2B] text-3xl" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#A52A2A] rounded-full flex items-center justify-center shadow-lg">
                  <FaHeart className="text-white text-xs" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#8B5A2B] mb-1 font-serif">GULA KELAPA</h3>
                <p className="text-[#D2B48C] font-semibold text-lg font-serif">Nira Paranggupito</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2.5 h-2.5 bg-[#556B2F] rounded-full animate-pulse"></div>
                  <span className="text-[#D2B48C] text-sm">Online • Siap Melayani</span>
                </div>
              </div>
            </div>

            <p className="text-[#8B5A2B] text-base leading-relaxed max-w-xl mb-6 font-light">
              Dari nira kelapa pilihan, diolah dengan cara tradisional – melalui penyaringan,
              direbus, dan dicetak dengan penuh ketelatenan hingga menjadi gula kelapa murni
              yang manis alami dan berkualitas tinggi.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg border-2 border-[#8B5A2B] bg-white flex items-center justify-center transition-all duration-300 hover:bg-[#8B5A2B] shadow-md hover:shadow-xl"
                >
                  <social.icon size={22} className="text-[#8B5A2B] hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-[#8B5A2B] mb-6 flex items-center gap-2 font-serif">
              <div className="w-2 h-2 bg-[#D2B48C] rounded-full"></div>
              Navigasi Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-[#8B5A2B] hover:text-[#D2B48C] transition-all duration-300 py-2 border-b border-[#F5E8C8] hover:border-[#D2B48C]"
                  >
                    <div className="w-2 h-2 bg-[#D2B48C] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 font-light">
                      {link.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Bagian yang Dirapikan */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-[#8B5A2B] mb-6 flex items-center gap-2 font-serif">
              <div className="w-2 h-2 bg-[#D2B48C] rounded-full"></div>
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <a
                    href={contact.link}
                    className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-[#F5E8C8]/50 hover:shadow-md border border-transparent hover:border-[#D2B48C]/30"
                  >
                    {/* Icon Container */}
                    <div className=" w-12 h-12 from-[#F5E8C8] to-[#E8D5B5] rounded-lg flex items-center justify-center shadow-sm border border-[#D2B48C]/50 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="text-[#8B5A2B] text-lg" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[#8B5A2B] font-semibold text-sm leading-tight group-hover:text-[#654321] transition-colors duration-300">
                        {contact.text}
                      </p>
                      {contact.subtext && (
                        <p className="text-[#D2B48C] text-xs mt-1.5 font-light leading-relaxed">
                          {contact.subtext}
                        </p>
                      )}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Additional Contact Info */}
            <motion.div
              variants={itemVariants}
              className="mt-6 p-4 from-[#F5E8C8]/30 to-[#E8D5B5]/30 rounded-xl border border-[#D2B48C]/20"
            >
              <div className="text-center">
                <p className="text-[#8B5A2B] text-sm font-semibold mb-1">Jam Operasional</p>
                <p className="text-[#D2B48C] text-xs font-light">Senin - Minggu: 08.00 - 17.00 WIB</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 p-6 bg-[#F5E8C8]/60 rounded-xl border border-[#D2B48C]"
        >
          {[
            { icon: '🌿', title: '100% Alami', desc: 'Tanpa bahan kimia' },
            { icon: '🏆', title: 'Kualitas Premium', desc: 'Terbaik di kelasnya' },
            { icon: '👨‍🍳', title: 'Proses Tradisional', desc: 'Turun temurun' },
            { icon: '💚', title: 'Ramah Lingkungan', desc: 'Eco-friendly' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group p-3 rounded-lg hover:bg-white/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h5 className="font-semibold text-[#8B5A2B] mb-1 font-serif">{feature.title}</h5>
              <p className="text-[#8B5A2B] text-sm font-light opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-[#D2B48C]/30 bg-[#F5E8C8]"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <p className="text-[#8B5A2B] text-sm font-light">
                © {currentYear} Nira Paranggupito. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-1 h-1 bg-[#8B5A2B] rounded-full"></div>
                <span className="text-[#8B5A2B] text-sm font-light">
                  Made with in Paranggupito
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-[#8B5A2B] hover:text-[#654321] text-sm transition-colors duration-300 font-light hover:underline">
                Kebijakan Privasi
              </Link>
              <div className="w-1 h-1 bg-[#8B5A2B] rounded-full"></div>
              <Link href="/terms" className="text-[#8B5A2B] hover:text-[#654321] text-sm transition-colors duration-300 font-light hover:underline">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}