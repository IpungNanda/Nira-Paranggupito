// Format currency to Indonesian Rupiah
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount)
}

// Create WhatsApp message for product order
export const createWhatsAppMessage = (product: {
  name: string
  price: number
  weight: string
}, customerName?: string): string => {
  const greeting = customerName ? `Halo, saya ${customerName}` : 'Halo'
  const message = `${greeting}

Saya ingin memesan:
📦 ${product.name} (${product.weight})
💵 Harga: Rp ${product.price.toLocaleString('id-ID')}

Bisa info lebih lanjut mengenai stok dan pengiriman?`

  return message
}

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Generate random ID
export const generateId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}