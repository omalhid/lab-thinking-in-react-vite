// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <div>
        <h2>IronStore</h2>
      </div>
      <SearchBar products={products} setProducts={setProducts} />
      <div>
        <ProductTable products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
