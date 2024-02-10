function ProductRow({ product }) {
  return (
    <tr>
      {product.inStock ? (
        <td>{product.name}</td>
      ) : (
        <td className="product-out-stock">{product.name}</td>
      )}
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
