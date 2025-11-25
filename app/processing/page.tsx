'use client'
import { motion } from 'framer-motion'
import { FaTree, FaFire, FaBox } from 'react-icons/fa'

export default function ProcessingPage() {
  const steps = [
    {
      step: 1,
      icon: FaTree,
      title: 'Penyadapan Nira',
      description: 'Nira disadap dari bunga pohon kelapa di pagi hari. Proses ini membutuhkan keahlian khusus untuk mendapatkan nira berkualitas terbaik.',
      image: '/images/tapping-process.jpg',
      details: [
        'Pemilihan pohon kelapa yang sehat',
        'Penyadapan dilakukan pagi hari',
        'Penggunaan wadah steril'
      ]
    },
    {
      step: 2,
      icon: FaFire,
      title: 'Pemasakan Nira',
      description: 'Nira segar dimasak dengan suhu terkontrol menggunakan kayu bakar. Proses ini menghilangkan kadar air dan mengentalkan nira.',
      image: '/images/cooking-process.jpg',
      details: [
        'Pemasakan dengan suhu stabil',
        'Pengadukan terus menerus',
        'Pengawasan ketat terhadap kekentalan'
      ]
    },
    {
      step: 3,
      icon: FaFire,
      title: 'Pencetakan',
      description: 'Nira yang telah mengental dituang ke dalam cetakan tradisional. Bentuk cetakan menentukan jenis gula kelapa yang dihasilkan.',
      image: '/images/molding-process.jpg',
      details: [
        'Cetakan dari batok kelapa',
        'Pembentukan sesuai varian',
        'Pendinginan alami'
      ]
    },
    {
      step: 4,
      icon: FaBox,
      title: 'Pengemasan',
      description: 'Gula kelapa yang telah mengering dikemas dengan rapi menggunakan bahan yang aman dan higienis untuk menjaga kualitas.',
      image: '/images/packaging-process.jpg',
      details: [
        'Pengemasan higienis',
        'Labeling yang informatif',
        'Quality control ketat'
      ]
    }
  ]

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

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
            Proses Pembuatan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Mengikuti proses tradisional yang telah turun-temurun untuk 
            menghasilkan gula kelapa dengan cita rasa dan kualitas terbaik
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4 font-serif">
              4 Tahap Utama Pembuatan Gula Kelapa
            </h2>
            <p className="text-[#8B5A2B] max-w-2xl mx-auto font-light">
              Setiap tahap dilakukan dengan penuh ketelitian untuk memastikan 
              kualitas dan keaslian rasa gula kelapa Nira Paranggupito
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.3 }}
                variants={variants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover border border-[#D2B48C]"
                    />
                    <div className="absolute -top-4 -left-4 bg-[#8B5A2B] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold border border-[#D2B48C]">
                      {step.step}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white p-3 rounded-full border border-[#D2B48C]">
                      <step.icon className="text-[#8B5A2B] text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#8B5A2B] font-serif">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-[#8B5A2B] mb-6 text-lg font-light leading-relaxed">
                    {step.description}
                  </p>

                  <div className="bg-[#F5E8C8] rounded-lg p-6 border border-[#D2B48C]">
                    <h4 className="font-semibold text-[#8B5A2B] mb-3 font-serif">
                      Detail Proses:
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-[#8B5A2B] rounded-full mt-2 flex"></div>
                          <span className="text-[#8B5A2B] font-light">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-[#F5E8C8] border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-[#8B5A2B] mb-6 font-serif">
                Standar Kualitas
              </h2>
              <div className="space-y-4 text-[#8B5A2B] font-light leading-relaxed">
                <p>
                  Setiap batch produksi gula kelapa Nira Paranggupito melalui 
                  proses quality control yang ketat. Kami memastikan hanya 
                  gula kelapa dengan kualitas terbaik yang sampai ke tangan konsumen.
                </p>
                <p>
                  Standar kualitas kami meliputi kebersihan proses, konsistensi 
                  rasa, tekstur yang tepat, dan kemasan yang aman. Semua proses 
                  dilakukan dengan mengutamakan hygiene dan sanitasi.
                </p>
                <p>
                  Hasilnya adalah gula kelapa dengan warna coklat keemasan alami, 
                  aroma khas nira yang harum, dan rasa manis yang tidak 
                  berlebihan dengan aftertaste yang bersih.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white p-6 rounded-lg text-center border border-[#D2B48C]">
                <div className="text-3xl font-bold text-[#8B5A2B] mb-2 font-serif">100%</div>
                <div className="text-[#8B5A2B] font-light">Alami</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-[#D2B48C]">
                <div className="text-3xl font-bold text-[#8B5A2B] mb-2 font-serif">0%</div>
                <div className="text-[#8B5A2B] font-light">Bahan Kimia</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-[#D2B48C]">
                <div className="text-3xl font-bold text-[#8B5A2B] mb-2 font-serif">24</div>
                <div className="text-[#8B5A2B] font-light">Jam Proses</div>
              </div>
              <div className="bg-white p-6 rounded-lg text-center border border-[#D2B48C]">
                <div className="text-3xl font-bold text-[#8B5A2B] mb-2 font-serif">100%</div>
                <div className="text-[#8B5A2B] font-light">Kepuasan</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Traditional Tools */}
      <section className="py-16 bg-white border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#8B5A2B] mb-4 font-serif">
              Alat-Alat Tradisional
            </h2>
            <p className="text-[#8B5A2B] max-w-2xl mx-auto font-light">
              Kami tetap menggunakan alat-alat tradisional yang telah teruji 
              mampu menghasilkan gula kelapa dengan cita rasa khas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Wajan Besar',
                description: 'Terbuat dari tembaga untuk memasak nira dengan panas merata'
              },
              {
                name: 'Cetakan Batok',
                description: 'Menggunakan batok kelapa asli untuk bentuk yang tradisional'
              },
              {
                name: 'Pengaduk Kayu',
                description: 'Dari kayu jati untuk mengaduk nira selama pemasakan'
              }
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#F5E8C8] p-6 rounded-lg border border-[#D2B48C] text-center"
              >
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-3 font-serif">
                  {tool.name}
                </h3>
                <p className="text-[#8B5A2B] font-light">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}