import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartItem from "../../components/MyCartItem/MyCartItem";

const MyCart = () => {
  // const [product, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/mycart")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.length === 0) {
  //         setNoData("No data found");
  //       }
  //       // setProducts(data);
  //       // console.log(product);
  //     });
  // }, []);
  const [noData, setNoData] = useState();
  const allProducts = useLoaderData();
  // console.log(allProducts);
  if (allProducts.length < 1) {
    setNoData("No data found");
  }
  return (
    <div>
      <h3 className="text-4xl font-bold text-green-600 text-center mt-6 mb-7">
        My Cart
      </h3>
      {!allProducts && <h1>{noData}</h1>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allProducts.map((product) => (
          <MyCartItem key={product._id} cart={product}></MyCartItem>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
