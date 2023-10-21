import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Product from "../Product/Product";

const UpdateProduct = () => {
  const product = useLoaderData();

  const { _id, productName, description, brandName, image, price, rating } =
    product;
  // console.log(product);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    if (
      !productName ||
      !brandName ||
      !price ||
      !description ||
      !rating ||
      !image
    ) {
      toast("please fill all fields ");
      return;
    }

    const updateProduct = {
      productName,
      brandName,
      price,
      description,
      rating,
      image,
    };
    // console.log(updateProduct);

    fetch(`https://e-selling-f3zbghz52-rexaulrana.vercel.app/update/${_id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast("Your product Updated successfully");
        }
      });
  };
  return (
    <div>
      <div className="mt-6 mb-5">
        <h1 className="text-center text-4xl font-bold text-green-600">
          Update Product
        </h1>

        <div>
          <form onSubmit={handleUpdate}>
            <div className="flex justify-evenly items-center gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Product Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="product-Name"
                    className="input input-bordered md:w-full"
                    name="productName"
                    defaultValue={productName}
                  />
                </label>
              </div>
              {/*  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Brand Name</span>
                </label>
                <label className="input-group">
                  <select
                    name="brandName"
                    className="select select-bordered w-full"
                    defaultValue={brandName}
                  >
                    <option>Select Brand Name</option>
                    <option>Walmart</option>
                    <option>AliBaba</option>
                    <option>eBay</option>
                    <option>Amazon</option>
                    <option>Target</option>
                    <option>Best Buy</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={price}
                    placeholder="price"
                    className="input input-bordered md:w-full"
                    name="price"
                  />
                </label>
              </div>
              {/*  */}
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text font-medium">
                    Short Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={description}
                    placeholder="description"
                    className="input input-bordered md:w-full"
                    name="description"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-evenly items-center gap-5">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    defaultValue={rating}
                    type="text"
                    placeholder="Rating"
                    className="input input-bordered md:w-full"
                    name="rating"
                  />
                </label>
              </div>
              {/*  */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-medium">Product Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={image}
                    placeholder="Product image"
                    className="input input-bordered md:w-full"
                    name="image"
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center mt-4 mb-6 ">
              <button className="btn bg-green-500 w-full hover:bg-green-600">
                Update
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
