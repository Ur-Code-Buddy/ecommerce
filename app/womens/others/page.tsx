import type { Metadata } from "next"
import ProductsGrid from "@/components/products-grid"
import ProductsHeader from "@/components/products-header"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: "Women's Accessories - Modern Footwear",
  description: "Browse our collection of women's accessories and other items.",
}

export default function WomensOthersPage() {
  // Filter only women's other products
  const womensOtherProducts = products
    .filter((product) => product.category === "women")
    .slice(0, 3) // For demo purposes, just show some products
    .map((product) => ({
      ...product,
      name: `Women's ${product.name} Accessory`,
      description: `Premium women's accessory with exceptional quality and style.`,
      type: "accessory",
    }))

  return (
    <main className="flex-1 bg-[#FAF1E6] transition-colors duration-300 dark:bg-[#2E1A1A] dark:text-[#B3B3B3]">
      <ProductsHeader
        title="Women's Accessories"
        description="Discover our premium selection of women's accessories to complete your look."
        imageSrc="/placeholder.svg?height=500&width=1920"
        theme="purple"
      />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <ProductsGrid
          products={womensOtherProducts}
          theme="purple"
          hideSearch={true}
          productType="other"
          category="women"
        />
      </div>
    </main>
  )
}

