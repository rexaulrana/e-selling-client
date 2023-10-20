import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
// import { useLoaderData } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  //   console.log(brands);
  return (
    <div className="mt-5 mb-5">
      <div>
        <h1 className="text-center text-5xl mb-5 font-bold "> Our Brands</h1>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Brand key={brand._id} brandItem={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
