import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow product={product} key={product.id} />;
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
