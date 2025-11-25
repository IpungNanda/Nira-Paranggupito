'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/ui/ProductCard'
import { Product } from '@/types'

export default function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulasi fetch products
    setTimeout(() => {
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'Gula Kelapa',
          description: 'Gula kelapa asli dalam bentuk batok tradisional. Dibuat dari nira kelapa pilihan dengan proses memasak yang tepat.',
          price: 25000,
          image: '/images/gula-batok.jpg',
          weight: '500g',
          isAvailable: true,
          createdAt: new Date('2024-01-15')
        },
        {
          id: '2',
          name: 'Gula Semut',
          description: 'Gula kelapa dalam bentuk telur semut yang praktis. Mudah digunakan untuk berbagai keperluan masak dan minuman.',
          price: 30000,
          image: '/images/gula-cair.jpg',
          weight: '350ml',
          isAvailable: true,
          createdAt: new Date('2024-01-10')
        },
   
      ]
      setProducts(mockProducts)
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#8B5A2B] mb-4 font-serif">
            Produk Unggulan Kami
          </h2>
          <p className="text-xl text-[#8B5A2B] max-w-3xl mx-auto font-light leading-relaxed">
            Temukan berbagai varian gula kelapa asli Paranggupito dengan kualitas terbaik 
            yang siap memenuhi kebutuhan sehat keluarga Anda
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B5A2B]"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#F5E8C8] rounded-2xl p-12 border border-[#D2B48C]">
            <h3 className="text-3xl font-bold text-[#8B5A2B] mb-4 font-serif">
              Siap Memesan Gula Kelapa Sehat?
            </h3>
            <p className="text-[#8B5A2B] text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Dapatkan gula kelapa asli Paranggupito dengan kualitas terbaik. 
              Pesan sekarang dan rasakan manfaatnya untuk kesehatan keluarga Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="bg-[#8B5A2B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#654321] transition-colors font-serif border border-[#8B5A2B]"
              >
                Lihat Semua Produk
              </a>
              <a
                href="https://wa.me/6281390176125"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#556B2F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#465823] transition-colors font-serif border border-[#556B2F]"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}