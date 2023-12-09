import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCartItem from "../../components/MyCartItem/MyCartItem";

const MyCart = () => {
  const allProducts = useLoaderData();
  const [remaining, setRemaining] = useState(allProducts);
  // console.log(allProducts);

  // console.log(noData);
  return (
    <div>
      {!allProducts.length > 0 ? (
        <h1 className="px-72 py-20 text-2xl font-semibold">
          Your Cart is empty , please add some items
        </h1>
      ) : (
        <div>
          <div>
            <h3 className="text-4xl font-bold text-green-600 text-center mt-6 mb-7">
              My Cart
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {remaining.map((product) => (
              <MyCartItem
                key={product._id}
                cart={product}
                setRemaining={setRemaining}
                remaining={remaining}
              ></MyCartItem>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
