function ProductCard({ product }) {
  return (
    <div className="card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;