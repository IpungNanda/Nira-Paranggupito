'use client'
import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaAward } from 'react-icons/fa'

export default function AboutSection() {
  const features = [
    {
      icon: FaLeaf,
      title: '100% Alami',
      description: 'Dibuat dari nira kelapa murni tanpa bahan pengawet, pewarna, atau pemanis buatan'
    },
    {
      icon: FaHeart,
      title: 'Sehat & Bergizi',
      description: 'Mengandung mineral alami seperti zat besi, magnesium, dan potassium yang baik untuk tubuh'
    },
    {
      icon: FaAward,
      title: 'Kualitas Terbaik',
      description: 'Diproses dengan teknik tradisional yang telah turun-temurun untuk menjaga cita rasa asli'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#8B5A2B] mb-4 font-serif">
            Mengapa Memilih Gula Kelapa Kami?
          </h2>
          <p className="text-xl text-[#8B5A2B] max-w-3xl mx-auto font-light leading-relaxed">
            Gula kelapa Nira Paranggupito tidak hanya enak, tetapi juga menawarkan 
            berbagai keunggulan yang membuatnya menjadi pilihan terbaik untuk kesehatan keluarga Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-[#F5E8C8] hover:shadow-lg transition-all duration-300 border border-[#D2B48C]"
            >
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D2B48C]">
                <feature.icon className="text-[#8B5A2B] text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-[#8B5A2B] mb-4 font-serif">
                {feature.title}
              </h3>
              <p className="text-[#8B5A2B] leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '500+', label: 'Pelanggan' },
            { number: '5+', label: 'Tahun Pengalaman' },
            { number: '100%', label: 'Kepuasan' },
            { number: '100%', label: 'Alami' }
          ].map((stat, index) => (
            <div key={stat.label} className="p-6">
              <div className="text-3xl font-bold text-[#8B5A2B] mb-2 font-serif">
                {stat.number}
              </div>
              <div className="text-[#8B5A2B] font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}