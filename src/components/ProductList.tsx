import { Product } from '@/types/products'

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products && products.length > 0 ? (
        products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </div>
        ))
        ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}