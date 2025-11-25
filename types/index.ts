// Product types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  weight: string
  isAvailable: boolean
createdAt?: Date 
}

// Component props types
export interface ProductCardProps {
  product: Product
  index?: number
}

export interface WhatsAppButtonProps {
  productName?: string
  productPrice?: number
  productWeight?: string
}