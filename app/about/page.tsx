'use client'
import { motion } from 'framer-motion'
import { FaLeaf, FaHeart, FaStar } from 'react-icons/fa'

export default function AboutPage() {
  const features = [
    {
      icon: FaLeaf,
      title: '100% Alami',
      description: 'Dibuat dari nira kelapa murni tanpa bahan pengawet atau pewarna tambahan'
    },
    {
      icon: FaHeart,
      title: 'Sehat & Bergizi',
      description: 'Mengandung mineral alami dan memiliki indeks glikemik yang lebih rendah'
    },
    {
      icon: FaStar,
      title: 'Kualitas Terbaik',
      description: 'Diproses dengan teknik tradisional yang menjaga cita rasa asli'
    }
  ]

  const benefits = [
    {
      title: 'Sumber Energi Alami',
      description: 'Gula kelapa mengandung karbohidrat kompleks yang memberikan energi bertahap'
    },
    {
      title: 'Kaya Mineral',
      description: 'Mengandung zat besi, magnesium, potassium, dan zinc yang baik untuk tubuh'
    },
    {
      title: 'Ramah Diabetes',
      description: 'Indeks glikemik lebih rendah dibandingkan gula putih biasa'
    },
    {
      title: 'Baik untuk Pencernaan',
      description: 'Mengandung inulin yang membantu kesehatan sistem pencernaan'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F5E8C8] text-[#8B5A2B] py-20 border-b border-[#D2B48C]">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6 font-serif"
          >
            Tentang Gula Kelapa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Mengenal lebih dalam tentang gula kelapa asli Paranggupito, 
            keunikan rasa, dan manfaat kesehatan yang terkandung di dalamnya
          </motion.p>
        </div>
      </section>

      {/* What is Coconut Sugar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-[#8B5A2B] mb-6 font-serif">
                Apa Itu Gula Kelapa?
              </h2>
              <div className="space-y-4 text-[#8B5A2B] font-light leading-relaxed">
                <p>
                  Gula kelapa adalah pemanis alami yang dihasilkan dari nira pohon kelapa. 
                  Nira adalah cairan manis yang diambil dari bunga pohon kelapa, kemudian 
                  dipanaskan hingga mengental dan membentuk kristal gula.
                </p>
                <p>
                  Berbeda dengan gula putih yang melalui proses rafinasi panjang, 
                  gula kelapa diproses secara tradisional sehingga menjaga kandungan 
                  mineral alami dan rasa khasnya.
                </p>
                <p>
                  Gula kelapa Nira Paranggupito diproduksi oleh petani lokal yang 
                  telah turun-temurun menguasai teknik pengolahan nira menjadi gula 
                  berkualitas tinggi.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <img
                src="/images/coconut-sugar-about.jpg"
                alt="Gula Kelapa Paranggupito"
                className="rounded-lg shadow-lg w-full h-80 object-cover border border-[#D2B48C]"
              />
              <div className="absolute inset-0 bg-[#8B5A2B] opacity-10 rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[#F5E8C8] border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4 font-serif">
              Keunggulan Gula Kelapa Kami
            </h2>
            <p className="text-[#8B5A2B] max-w-2xl mx-auto font-light">
              Produk gula kelapa Nira Paranggupito memiliki beberapa keunggulan 
              yang membuatnya berbeda dari produk sejenis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 bg-white rounded-lg border border-[#D2B48C]"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D2B48C]">
                  <feature.icon className="text-[#8B5A2B] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-3 font-serif">
                  {feature.title}
                </h3>
                <p className="text-[#8B5A2B] font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4 font-serif">
              Manfaat Kesehatan
            </h2>
            <p className="text-[#8B5A2B] max-w-2xl mx-auto font-light">
              Gula kelapa tidak hanya enak tetapi juga memiliki berbagai manfaat 
              untuk kesehatan tubuh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#F5E8C8] p-6 rounded-lg border border-[#D2B48C]"
              >
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-3 font-serif">
                  {benefit.title}
                </h3>
                <p className="text-[#8B5A2B] font-light">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Wisdom */}
      <section className="py-16 bg-[#F5E8C8] border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/images/traditional-process.jpg"
                alt="Proses Tradisional"
                className="rounded-lg shadow-lg w-full h-80 object-cover border border-[#D2B48C]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-[#8B5A2B] mb-6 font-serif">
                Kearifan Lokal Paranggupito
              </h2>
              <div className="space-y-4 text-[#8B5A2B] font-light leading-relaxed">
                <p>
                  Paranggupito telah lama dikenal sebagai penghasil gula kelapa 
                  terbaik di wilayah Wonogiri. Teknik pembuatan gula kelapa di 
                  sini telah diwariskan turun-temurun dari generasi ke generasi.
                </p>
                <p>
                  Petani gula kelapa Paranggupito mempertahankan metode tradisional 
                  dalam mengolah nira, mulai dari penyadapan hingga proses 
                  pemasakan yang membutuhkan keahlian khusus.
                </p>
                <p>
                  Dengan memilih gula kelapa Nira Paranggupito, Anda tidak hanya 
                  mendapatkan produk yang sehat tetapi juga turut melestarikan 
                  kearifan lokal dan mendukung perekonomian petani setempat.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}