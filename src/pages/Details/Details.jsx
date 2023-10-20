import { useLoaderData, useParams } from "react-router-dom";

import swal from "sweetalert";

const Details = () => {
  const { id } = useParams();
  //   console.log(id);
  const allProducts = useLoaderData();
  const productsDetails = allProducts.find((product) => product._id === id);
  //   console.log(productsDetails);
  const { brandName, description, image, price, productName, rating } =
    productsDetails;
  const cartItem = {
    brandName,
    description,
    image,
    price,
    productName,
    rating,
  };
  const handleAddToCart = () => {
    // console.log(productsDetails);
    fetch("http://localhost:5000/myCart", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          swal({
            title: "Success!",
            text: " Product Added to Cart",
            icon: "success",
            button: "Ok",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-green-600 text-center">
        Product Details
      </h1>
      <div>
        <div className="card  mt-4 glass">
          <figure>
            <img
              className="py-5 w-[500px] rounded-lg"
              src={productsDetails.image}
              alt={productsDetails.productName}
            />
          </figure>
          <div className="card-body">
            <h1 className="card-title">{productsDetails.productName}</h1>
            <p>{productsDetails.description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddToCart()}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
