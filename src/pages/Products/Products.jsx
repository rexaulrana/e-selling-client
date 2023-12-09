import { useLoaderData, useParams } from "react-router-dom";
// import Product from "../../components/Product/Product";
import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import Slider from "../../components/Slider/Slider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const allProducts = useLoaderData();
  const { brandName } = useParams();
  useEffect(() => {
    const brandProducts = allProducts.filter(
      (product) => product.brandName === brandName
    );
    setProducts(brandProducts);
  }, [allProducts, brandName]);
  return (
    <div>
      {products?.length < 1 ? (
        <h1 className="px-80 py-20 text-4xl font-bold">
          Products coming,please stay with us,Thank You!!
        </h1>
      ) : (
        <div>
          <div className="mt-5 mb-6">
            <Slider></Slider>
          </div>
          <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
