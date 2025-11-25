'use client'
import { motion } from 'framer-motion'
import { FaTree, FaFire, FaBox } from 'react-icons/fa'

export default function ProcessingSection() {
  const steps = [
    {
      step: 1,
      icon: FaTree,
      title: 'Penyadapan Nira',
      description: 'Nira disadap dari bunga pohon kelapa di pagi hari dengan teknik tradisional'
    },
    {
      step: 2,
      icon: FaFire,
      title: 'Pemasakan Nira',
      description: 'Nira dimasak dengan suhu terkontrol hingga mengental dan berubah warna'
    },
    {
      step: 3,
      icon: FaFire,
      title: 'Pencetakan',
      description: 'Nira yang telah mengental dituang ke dalam cetakan batok kelapa'
    },
    {
      step: 4,
      icon: FaBox,
      title: 'Pengemasan',
      description: 'Gula kelapa dikemas dengan rapi dan higienis untuk menjaga kualitas'
    }
  ]

  return (
    <section id="processing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#8B5A2B] mb-4 font-serif">
            Proses Pembuatan Tradisional
          </h2>
          <p className="text-xl text-[#8B5A2B] max-w-3xl mx-auto font-light leading-relaxed">
            Setiap tahap pembuatan gula kelapa kami lakukan dengan penuh ketelitian 
            untuk memastikan kualitas dan keaslian rasa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Step Number */}
              <div className="relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8B5A2B] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 border border-[#D2B48C]">
                  {step.step}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-[#F5E8C8] p-8 rounded-2xl shadow-lg h-full pt-10 border border-[#D2B48C]">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D2B48C]">
                  <step.icon className="text-[#8B5A2B] text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#8B5A2B] mb-4 font-serif">
                  {step.title}
                </h3>
                <p className="text-[#8B5A2B] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#F5E8C8] rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-[#D2B48C]">
            <h3 className="text-2xl font-bold text-[#8B5A2B] mb-4 font-serif">
              Komitmen Terhadap Kualitas
            </h3>
            <p className="text-[#8B5A2B] text-lg leading-relaxed font-light">
              Kami tetap mempertahankan proses tradisional karena percaya bahwa 
              kearifan lokal menghasilkan cita rasa yang autentik. Setiap batch 
              produksi melalui quality control ketat untuk memastikan konsistensi 
              kualitas gula kelapa Nira Paranggupito.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}