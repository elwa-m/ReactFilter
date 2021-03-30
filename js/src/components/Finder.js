import { useState } from "react";

import products from "../products";
import FilterForm from "./FilterForm";
import ProductsList from "./ProductsList";

export default function Finder() {
  const [saleOnly, setSaleOnly] = useState(false);

  /* Gebe alle Produkte in die Filterfunktion und erhalte
  nur die zurück, die den aktuellen Filtereinstellungen entsprechen. */
  const filteredProducts = getFilteredProducts(products, saleOnly);

  return (
    <div className="shop">
      <FilterForm saleOnly={saleOnly} setSaleOnly={setSaleOnly} />
      <ProductsList products={filteredProducts} />
    </div>
  );
}

function getFilteredProducts(products, saleOnly) {
  /* Speichere die Information, ob der Filter NICHT aktiv ist */
  const noSaleFilter = !saleOnly;

  const filteredProducts = products.filter(
    /* Entweder der Filter ist nicht aktiv, dann wird für alle
    Produkte true zurückgegeben, und es kommen entspechend
    alle durch den Filter. Andernfalls nur die, bei denen 
    product.sale true ist */
    (product) => noSaleFilter || product.sale
  );

  return filteredProducts;
}
