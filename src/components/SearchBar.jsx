import { useState } from "react";

function SearchBar({ products, setProducts }) {
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);
  const [originalProducts] = useState(products);
  //create state for the checkbox filter feature to help the rerendering when unchecked

  function searchFunction(event) {
    const filteredArray = products.filter((element) => {
      if (
        element.name.toLowerCase().includes(event.target.value.toLowerCase())
      ) {
        return true;
      } else return false;
    });
    setProducts(filteredArray);
  }

  function filterFunction(event) {
    setShowOnlyInStock(event.target.checked);
    if (!event.target.checked) {
      // If the checkbox is unchecked, reset to show all products
      setProducts(originalProducts);
    } else {
      // If the checkbox is checked, filter to show only in-stock products
      const inStockProducts = originalProducts.filter(
        (product) => product.inStock
      );
      setProducts(inStockProducts);
    }
  }

  return (
    <div>
      <input
        onChange={(event) => searchFunction(event)}
        type="search"
        placeholder="search..."
      />
      <br />
      <input
        id="filter"
        type="checkbox"
        checked={showOnlyInStock}
        onChange={(event) => filterFunction(event)}
      />
      <label htmlFor="filter"> Show products in stock</label>
    </div>
  );
}

export default SearchBar;
