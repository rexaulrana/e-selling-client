import { useLoaderData, useParams } from "react-router-dom";
// import Product from "../../components/Product/Product";
import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [noProducts, setNoProducts] = useState("");
  const allProducts = useLoaderData();
  const { brandName } = useParams();
  useEffect(() => {
    const brandProducts = allProducts.filter(
      (product) => product.brandName === brandName
    );
    setProducts(brandProducts);
    if (products.length === 0) {
      setNoProducts("No Products Available for this brand");
      console.log("rna");
    }
  }, [brandName, allProducts, products.length]);
  return (
    <div>
      <div className="mt-5 mb-6">{products && <Slider></Slider>}</div>
      <div>
        {!products ? (
          <h1>{noProducts}</h1>
        ) : (
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
