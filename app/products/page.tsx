'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaWhatsapp } from 'react-icons/fa'
import { Product } from '@/types'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<'all' | 'available'>('all')

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, filter])

  const fetchProducts = async () => {
    try {
      // Simulasi fetch products
      setTimeout(() => {
        const mockProducts: Product[] = [
          {
            id: '1',
            name: 'Gula Kelapa',
            description: 'Gula kelapa asli dalam bentuk batok tradisional. Dibuat dari nira kelapa pilihan dengan proses memasak yang tepat sehingga menghasilkan gula dengan warna coklat keemasan dan rasa manis alami.',
            price: 25000,
            image: '/images/gula-batok.jpg',
            weight: '500g',
            isAvailable: true,
            createdAt: new Date('2024-01-15')
          },
          {
            id: '2',
            name: 'Gula Semut',
            description: 'Gula kelapa dalam bentuk telur semut yang praktis. Mudah digunakan untuk berbagai keperluan masak dan minuman. Tekstur yang halus dan rasa yang konsisten.',
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
    } catch (error) {
      console.error('Error fetching products:', error)
      setLoading(false)
    }
  }

  const filterProducts = () => {
    let filtered = products

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by availability
    if (filter === 'available') {
      filtered = filtered.filter(product => product.isAvailable)
    }

    setFilteredProducts(filtered)
  }

  const handleOrder = (product: Product) => {
    const message = `Halo, saya ingin memesan ${product.name} (${product.weight})\nHarga: Rp ${product.price.toLocaleString()}`
    const phoneNumber = '6281390176125'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#8B5A2B]"></div>
      </div>
    )
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
            Produk Kami
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Temukan berbagai varian gula kelapa asli Paranggupito dengan 
            kualitas terbaik dan harga terjangkau
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-[#D2B48C]/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B5A2B]" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#D2B48C] rounded-lg focus:ring-2 focus:ring-[#8B5A2B] focus:border-transparent text-[#8B5A2B] placeholder-[#8B5A2B]/50"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-4">
              <FaFilter className="text-[#8B5A2B]" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="border border-[#D2B48C] rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#8B5A2B] focus:border-transparent text-[#8B5A2B]"
              >
                <option value="all">Semua Produk</option>
                <option value="available">Tersedia</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-[#8B5A2B] text-lg">
                Tidak ada produk yang ditemukan
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#D2B48C]/30"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-[#8B5A2B] font-serif">
                        {product.name}
                      </h3>
                      <span className="bg-[#F5E8C8] text-[#8B5A2B] px-2 py-1 rounded text-sm font-medium border border-[#D2B48C]">
                        {product.weight}
                      </span>
                    </div>
                    
                    <p className="text-[#8B5A2B] mb-4 line-clamp-2 font-light">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-[#8B5A2B] font-serif">
                        Rp {product.price.toLocaleString()}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrder(product)}
                      className="w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 font-serif border bg-[#8B5A2B] text-white hover:bg-[#654321] border-[#8B5A2B]"
                    >
                      <FaWhatsapp className="text-lg" />
                      Pesan via WhatsApp
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[#F5E8C8] border-t border-[#D2B48C]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-[#8B5A2B] mb-6 font-serif"
            >
              Cara Pemesanan
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  step: '1',
                  title: 'Pilih Produk',
                  description: 'Pilih produk gula kelapa yang Anda inginkan'
                },
                {
                  step: '2',
                  title: 'Klik Pesan',
                  description: 'Klik tombol "Pesan via WhatsApp" pada produk'
                },
                {
                  step: '3',
                  title: 'Konfirmasi',
                  description: 'Konfirmasi pesanan dan alamat pengiriman via WhatsApp'
                }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-[#8B5A2B] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 border border-[#D2B48C]">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#8B5A2B] mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-[#8B5A2B] font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}